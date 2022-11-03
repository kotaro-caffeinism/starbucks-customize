import Shop from "./Beverages.js";

const main = document.getElementById("main");
const submit = document.getElementById("submit");
const reload = document.getElementById("reload");

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
    const isTarget = e.target.parentElement.classList.contains("drink-wrap__menu");
    if (!isTarget) return;

    drinkBtnWrap.innerHTML = "";
    drinkBtnWrap.appendChild(e.target.parentElement);
    e.target.parentElement.classList.add("selected_drink");
    
    const drinkId = e.target.parentElement.dataset.name;
    const targetDrink = drinkData[drinkId];
    shop.chooseBeverages(targetDrink.id);

    const oldEle = document.getElementById("customize-wrap");
    if (oldEle) oldEle.remove();

    const customizeBtnWrap = document.createElement("div");
    customizeBtnWrap.setAttribute("id", "customize-wrap");
    main.appendChild(customizeBtnWrap);

    submit.classList.remove("disp_none");
    reload.classList.remove("disp_none");
    
    targetDrink.type.forEach(type => {
      const customizeData = shop.getCustomizes(type);
      createCustomizeButton(customizeData, targetDrink, customizeBtnWrap);
    })

    customizeBtnWrap.addEventListener("click", (e) => {
      const customizeId = e.target.dataset.name;
      const customizePrice = e.target.dataset.price;
      shop.memorizeName(customizeId);
      shop.calcSum(Number(customizePrice));

    const isTarget = e.target.classList.contains("customize-wrap__button");
    if (!isTarget) return;

    e.target.classList.toggle("active")
    });
  });
  
  // 3. 注文する
  submit.addEventListener("click", () => {
    const result = shop.checkout();

    const finalWrap = document.createElement("div");
    finalWrap.setAttribute("id", "final-wrap");

    const finalName = document.createElement("div");
    finalName.setAttribute("id", "final-wrap__name");
    finalName.textContent = result.beverage;

    const finalPrice = document.createElement("div");
    finalPrice.setAttribute("id", "final-wrap__price");
    finalPrice.textContent = `${result.check}円`;

    finalWrap.appendChild(finalName);
    finalWrap.appendChild(finalPrice);
    drinkBtnWrap.appendChild(finalWrap);
  });

  reload.addEventListener("click", () => {
    location.reload();
  })
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

    const drinkPrice = document.createElement("div");
    drinkPrice.textContent = `${item.price[0]}〜${item.price[3]}円`;
    drinkPrice.setAttribute("class", "drink-wrap__price");
    div.appendChild(drinkPrice);

    parent.appendChild(div);
  })
}

function createCustomizeButton(items, targetDrink, parent) {
  const title = document.createElement("div");
  title.textContent = items.type;
  title.setAttribute("class", "customize-wrap__title");
  parent.appendChild(title);
  
  const btnWrap = document.createElement("div");
  btnWrap.setAttribute("class", "customize-wrap__buttons");
  parent.appendChild(btnWrap);

  items.choices.forEach((item, i) => {
    const btn = document.createElement("div");
    btn.setAttribute("id", i);
    btn.setAttribute("class", "customize-wrap__button");
    
    const price = document.createElement("span");
    price.setAttribute("class", "customize-wrap__price");

    if (items.type === "size") {
      btn.dataset.price = targetDrink.price[i];
      price.textContent = ` (${targetDrink.price[i]}円)`;
    } else {
      btn.dataset.price = items.price[i];
      price.textContent = ` (${items.price[i]}円)`;
    }
    btn.dataset.name = items.name[i];
    btn.textContent = item;

    btn.appendChild(price);
    btnWrap.appendChild(btn);
  })
}
