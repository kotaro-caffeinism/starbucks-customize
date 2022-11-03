import Shop from "./Beverages.js";
const main = document.getElementById("main");
const submit = document.getElementById("submit");

window.onload = () => {
  const shop = new Shop()

  const drinkBtnWrap = document.createElement("div");
  drinkBtnWrap.setAttribute("id", "drink-wrap");
  main.appendChild(drinkBtnWrap);

  // 1. ドリンク取得
  const drinkData = shop.getAllBeverages();
  createDrinkButton(drinkData, drinkBtnWrap);

  // 2. ドリンクに応じたカスタマイズ
  drinkBtnWrap.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    const drinkId = e.target.dataset.name;
    const targetDrink = drinkData[drinkId];
    shop.chooseBeverages(targetDrink.id);

    const oldEle = document.getElementById("drink-wrap__customize");
    if (oldEle) oldEle.remove();

    const customizeBtnWrap = document.createElement("div");
    customizeBtnWrap.setAttribute("id", "drink-wrap__customize");
    main.appendChild(customizeBtnWrap);
    
    targetDrink.type.forEach(type => {
      const customizeData = shop.getCustomizes(type);
      createCustomizeButton(customizeData, targetDrink, customizeBtnWrap);
    })

    customizeBtnWrap.addEventListener("click", (e) => {
      const customizeId = e.target.dataset.name;
      const customizePrice = e.target.dataset.price;
      shop.memorizeName(customizeId);
      shop.calcSum(Number(customizePrice));
      e.target.classList.toggle("active")
    });
  });
  
  // 3. 注文する
  submit.addEventListener("click", () => {
    const rtn = shop.checkout();

    const finalName = document.createElement("div");
    finalName.setAttribute("id", "final_name");
    finalName.textContent = rtn.beverage;

    const finalPrice = document.createElement("div");
    finalPrice.setAttribute("id", "final_price");
    finalPrice.textContent = `${rtn.check}円`;

    main.appendChild(finalName);
    main.appendChild(finalPrice);
  });
}

function createDrinkButton(items, parent) {
  items.forEach((item, i) => {
    const div = document.createElement("div");
    div.setAttribute("id", item.id);
    div.setAttribute("class", "drink-wrap__menu");
    div.dataset.name = i;
    
    const img = document.createElement("img");
    img.src = item.image;
    img.setAttribute("class", "drink-wrap__img");
    div.appendChild(img);

    const drinkName = document.createElement("div");
    drinkName.textContent = item.name;
    drinkName.setAttribute("class", "drink-wrap__name");
    div.appendChild(drinkName);

    parent.appendChild(div);
  })
}

function createCustomizeButton(items, targetDrink, parent) {
  const title = document.createElement("div");
  title.textContent = items.type;
  title.setAttribute("class", "drink-wrap__title");
  parent.appendChild(title);
  
  const btnWrap = document.createElement("div");
  btnWrap.setAttribute("class", "drink-wrap__customize");
  parent.appendChild(btnWrap);

  items.choices.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("id", i);
    btn.setAttribute("class", "drink-wrap__button");

    if (items.type === "size") {
      btn.dataset.price = targetDrink.price[i];
    } else {
      btn.dataset.price = items.price[i];
    }
    btn.dataset.name = items.name[i];
    btn.textContent = item;
    btnWrap.appendChild(btn);
  })
}
