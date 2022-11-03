# Starbucks Customize

## このアプリについて

Starbucksで販売されている14種類のドリンクをカスタマイズし、購入できるアプリです☕️  
自宅でスタバ気分を味わいたい時や、初めてのカスタマイズ前の練習にどうぞ。

[starbucks-customize.surge.sh](https://starbucks-customize.surge.sh/)  

<img src="https://user-images.githubusercontent.com/5979966/199855013-848ae734-da2a-425c-9b54-64963b82200d.png" alt="トップページ" width="47%"> <img src="https://user-images.githubusercontent.com/5979966/199855018-6e7332ad-c5bd-4ab7-bec9-c60365a114a0.png" alt="投稿ページ" width="47%">

## このアプリの使い方

1. このリポジトリをクローンしてください。
  ``` zsh
  git clone git@github.com:kotaro-caffeinism/starbucks-customize.git
  ```
2. `index.html` をブラウザで開いてください。`"access to script from origin 'null' has been blocked by CORS policy"` と表示されうまくいかない場合は、[Live Server](https://github.com/ritwickdey/vscode-live-server) などを使ってアプリを起動してください。
3. 以下のような画面が表示されればOKです🥳 ご注文をどうぞ！

![アプリのスクリーンショット](https://user-images.githubusercontent.com/5979966/199855013-848ae734-da2a-425c-9b54-64963b82200d.png)

## 使用技術

- HTML
- CSS: BEM記法を使用
- JavaScript: OOPを採用
- linter: eslint
- formatter: prettier
- test library: mocha, chai
