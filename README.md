# Starbucks Customize

## このアプリについて

Starbucksで販売されている14種類のドリンクをカスタマイズし、購入できるアプリです☕️  
自宅でスタバ気分を味わいたい時や、初めてのカスタマイズ前の練習にどうぞ。

[starbucks-customize.surge.sh](https://starbucks-customize.surge.sh/)  

<img src="https://user-images.githubusercontent.com/5979966/199770895-af6bb4c2-331b-47c5-910c-3bdd32392379.png" alt="トップページ" width="45%"> <img src="https://user-images.githubusercontent.com/5979966/199770918-dacfed55-4bcf-419b-84dc-817b5c368522.png" alt="投稿ページ" width="45%">

## このアプリの使い方

1. このリポジトリをクローンしてください。
  ``` zsh
  git clone git@github.com:kotaro-caffeinism/starbucks-customize.git
  ```
2. `index.html` をブラウザで開いてください。`"access to script from origin 'null' has been blocked by CORS policy"` と表示されうまくいかない場合は、LiveShare を使ってアプリを起動してください。
3. 以下のような画面が表示されればOKです🥳 ご注文をどうぞ！

![アプリのスクリーンショット](https://user-images.githubusercontent.com/5979966/199770895-af6bb4c2-331b-47c5-910c-3bdd32392379.png)

## 使用技術

- HTML
- CSS: BEM記法を使用
- JavaScript: OOPを採用
- linter: eslint
- formatter: prettier
- test library: mocha, chai
