const main = document.getElementById("main");

window.onload = () => {
  const drinkBtnWrap = document.createElement("div");
  drinkBtnWrap.setAttribute("id", "button-wrap__drink")
  main.appendChild(drinkBtnWrap);
  // 1. ドリンク取得
  const drinkData = getDrink();
  console.log(drinkData);
  createButton(drinkData, drinkBtnWrap);

  // 2. ドリンクに応じたカスタマイズ
  drinkBtnWrap.addEventListener('click', (e) => {
    const drinkId = e.target.dataset.name;
    const targetDrink = drinkData[drinkId];

    const customizeBtnWrap = document.createElement("div");
    customizeBtnWrap.setAttribute("id", "button-wrap__customize")
    main.appendChild(customizeBtnWrap);
    
    targetDrink.type.forEach(type => {
      const customizeData = getCustomize(type);
      console.log(customizeData);

      createCustomizeButton(customizeData.choices, customizeBtnWrap);
    })

    customizeBtnWrap.addEventListener('click', (e) => {
      console.log(e.target);
      e.target.classList.toggle("active")
    });
  });
  
}


function createButton(items, parent) {
  items.forEach((item, i) => {
    const btn = document.createElement("button");
    console.log(item);
    btn.setAttribute("id", item.id)
    btn.setAttribute("class", "button-wrap__button")
    btn.dataset.name = i;
    btn.textContent = item.name;
    parent.appendChild(btn);
  })
}
function createCustomizeButton(items, parent) {
  const btnWrap = document.createElement("div");
    btnWrap.setAttribute("class", "button-wrap__customize")
    parent.appendChild(btnWrap);
  
  items.forEach((item, i) => {
    const btn = document.createElement("button");
    console.log(item);
    btn.setAttribute("id", i)
    btn.setAttribute("class", "button-wrap__button")
    btn.dataset.name = i;
    btn.textContent = item;
    btnWrap.appendChild(btn);
  })
}
