# NodeJsMySQLHeroku

リポジトリ作成してクローンしておく

## package.json 作成

npm init

npm install express --save

npm install -save ejs

npm install mysql

## CLI から heroku にアプリを追加する

heroku create
アプリ名は任意なので、書かない場合は heroku がランダムで生成してくれます。

## heroku をリモートレポジトリに紐付ける

https://dashboard.heroku.com/apps にアクセスしてアプリ名をコピー]

heroku git:remote -a [アプリ名]

package.json を add して commit まで実施

## 自分のリポジトリに push

git push origin main

## Heroku に push

git push heroku main

## App の起動

https://dashboard.heroku.com/appsの右上`open APP`

## 参照

自分のリポジトリで Heroku にデプロイ

https://j-hack.gitbooks.io/deploy-meteor-app-to-heroku/content/step4.html

Node.js + MySQL で作ったアプリを Heroku にデプロイする

https://qiita.com/atlansien/items/c1596fb8df94abb034f4

## MySQL デプロイの動作確認する

node.js ✖️ express.js ✖️ mysql の web アプリ heroku 公開までの方法

https://zenn.dev/toshi_h/articles/c3e3df74d6ceb8897c9d

## MySQL のテーブル内容をデプロイして確認完了

ランダムシックス作成

## デプロイ後の URL

https://morning-cove-72329.herokuapp.com/

## 勉強

### express の get と post の違い

GET は情報を取得するときに使うものです。
POST は新しい情報の登録をするときに使うものです。

### MySQL の結果をボタンをトリガとして出力する

https://code-database.com/knowledges/113

### ToDo

veu.js でフロントエンド開発

- json を html 表示する方法まとめる(MySQL から取得するデータは JSON 形式なので、それを JS で HTML 表示する必要がある)
  [javascript json データを XMLHttpRequest を使って取得する](https://mebee.info/2020/10/25/post-20785/)
