import Shop from "./Beverages.js";
const main = document.getElementById("main");

window.onload = () => {
  const shop = new Shop()
  console.log(shop);
  const drinkBtnWrap = document.createElement("div");
  drinkBtnWrap.setAttribute("id", "button-wrap__drink")
  main.appendChild(drinkBtnWrap);
  // 1. ドリンク取得
  const drinkData = shop.getAllBeverages();
  createButton(drinkData, drinkBtnWrap);

  // 2. ドリンクに応じたカスタマイズ
  drinkBtnWrap.addEventListener('click', (e) => {
    e.target.classList.toggle("active")
    const drinkId = e.target.dataset.name;
    const targetDrink = drinkData[drinkId];

    shop.chooseBeverages(targetDrink.id);
    console.log(shop);

    const oldEle = document.getElementById("button-wrap__customize");
    if (oldEle) oldEle.remove();

    const customizeBtnWrap = document.createElement("div");
    customizeBtnWrap.setAttribute("id", "button-wrap__customize")
    main.appendChild(customizeBtnWrap);
    
    targetDrink.type.forEach(type => {
      const customizeData = shop.getCustomizes(type);
      createCustomizeButton(customizeData, customizeBtnWrap);
    })

    customizeBtnWrap.addEventListener('click', (e) => {
      const customizeId = e.target.dataset.name;
      shop.memorizeName(customizeId)
      e.target.classList.toggle("active")
    });
  });
  
}

function createButton(items, parent) {
  items.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("id", item.id)
    btn.setAttribute("class", "button-wrap__button")
    btn.dataset.name = i;
    btn.textContent = item.name;
    parent.appendChild(btn);
  })
}

function createCustomizeButton(items, parent) {
  const title = document.createElement("div");
  title.textContent = items.type;
  title.setAttribute("class", "button-wrap__title");
  parent.appendChild(title);
  
  const btnWrap = document.createElement("div");
  btnWrap.setAttribute("class", "button-wrap__customize");
  parent.appendChild(btnWrap);

  items.choices.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("id", i)
    btn.setAttribute("class", "button-wrap__button")
    btn.dataset.name = items.name[i];
    btn.textContent = item;
    btnWrap.appendChild(btn);
  })
}
