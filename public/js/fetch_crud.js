const postIkku = document.querySelector(".postIkku");
const postBtn = document.querySelector(".postBtn");
const datalist = document.querySelector(".pokemonzukan");
const url = "/fetch";

// create
const createFetch = () => {
  const data = {
    ikku: postIkku.value,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Create error!");
        throw new Error("error");
      }
      console.log("Create ok!");
      return response.json();
    })
    .then((data) => {
      appendList(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

postBtn.addEventListener("click", createFetch, false);

// read
const readFetch = () => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log("Read Error!");
        throw new Error("error");
      }
      console.log("Read ok!");
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const thisData = data[i];
        appendList(thisData);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

readFetch();

// update
const updateFetch = (thisLi) => {
  const thisId = thisLi.dataset.id;
  const updateArea = thisLi.querySelector(".updateArea");
  const updateIkku = thisLi.querySelector(".updateIkku").value;
  const data = {
    id: thisId,
    ikku: updateIkku,
  };

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Update error!");
        throw new Error("error");
      }
      console.log("Update ok");
      return response.json();
    })
    .then((data) => {
      thisLi.firstChild.textContent = data.ikku;
      thisLi.removeChild(updateArea);
    })
    .catch((error) => {
      console.log(error);
    });
};

document.addEventListener(
  "click",
  (e) => {
    if (e.target.className != "updateBtn") {
      return;
    }
    const thisLi = e.target.closest("li");
    updateFetch(thisLi);
  },
  false
);

// delete
const deleteFetch = (thisList) => {
  const thisId = thisList.dataset.id;
  const data = {
    id: thisId,
  };

  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("DELETE error");
        throw new Error("error");
      }
      console.log("Delete ok!");
      return response.json();
    })
    .then((data) => {
      const deleteId = data.id;
      console.log("DELETE ID ->" + deleteId);
      thisList.remove();
    })
    .catch((error) => {
      console.log(error);
    });
};

document.addEventListener(
  "click",
  (e) => {
    if (e.target.className !== "doDelete") {
      return;
    }
    const thisList = e.target.closest("li");
    deleteFetch(thisList);
  },
  false
);

// Append Button
const appendBtn = (className, text) => {
  const btn = document.createElement("button");
  btn.className = className;
  btn.innerHTML = text;
  return btn;
};

// Append List
const appendList = (thisData) => {
  const li = document.createElement("li");
  li.dataset.id = thisData.id;
  li.innerHTML = thisData.ikku;
  const updateBtn = appendBtn("doUpdate", "修正");
  li.appendChild(updateBtn);
  const deleteBtn = appendBtn("doDelete", "削除");
  li.appendChild(deleteBtn);
  datalist.appendChild(li);
};

// Append Update Area
const appendUpdateInput = (thisIkku) => {
  const input = document.createElement("input");
  input.type = "text";
  input.name = "updateIkku";
  input.size = "30";
  input.maxlength = "30px";
  input.className = "updateIkku";
  input.value = thisIkku;
  return input;
};

const appendUpdateBtn = () => {
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "送信";
  btn.className = "updateBtn";
  return btn;
};

const appendUpdateArea = (thisList) => {
  const thisIkku = thisList.firstChild.textContent;
  const appendDiv = document.createElement("div");
  appendDiv.className = "updateArea";
  appendDiv.appendChild(appendUpdateInput(thisIkku));
  appendDiv.appendChild(appendUpdateBtn());
  thisList.appendChild(appendDiv);
};

document.addEventListener(
  "click",
  (e) => {
    if (e.target.className !== "doUpdate") {
      return;
    }
    const thisList = e.target.closest("li");
    if (thisList.querySelector(".updateArea") === null) {
      appendUpdateArea(thisList);
    }
  },
  false
);
