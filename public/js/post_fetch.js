const fetchForm = document.querySelector('.fetchForm input');
const btn = document.querySelector('.btn');
const url = '/fetch';

const postFetch = () => {
    const formData = {
        name:fetchForm.value
    };

    fetch(url, {
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(formData)
    }).then((response) => {
        if(!response.ok){
            console.log('error!');
        }
        console.log('ok!');
        console.log(response);
        return response.text();
    }).then((data) => {
        console.log(data);
        alert(data);
    }).catch((error) => {
        console.log(error);
    });
};

btn.addEventListener('click', postFetch, false);