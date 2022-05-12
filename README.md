# NodeJsMySQLHeroku

リポジトリ作成してクローンしておく

## package.json 作成

npm init

## CLI から heroku にアプリを追加する

heroku create
アプリ名は任意なので、書かない場合は heroku がランダムで生成してくれます。

## heroku をリモートレポジトリに紐付ける

https://dashboard.heroku.com/appsにアクセスしてアプリ名をコピー
heroku git:remote -a [アプリ名]

package.json を add して commit まで実施

## 自分のリポジトリに push

git push origin main

## Heroku に push

git push heroku main

## App の起動

https://dashboard.heroku.com/appsの右上`open APP`
