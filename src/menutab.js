function menuTab() {
  let mainContainer = document.getElementById('content');
  let menu = document.createElement('div');
  menu.className = 'tabInfoContainer';

  let menuHeadline = document.createElement('h4');
  menuHeadline.textContent = 'Pizza Structure Menu';
  menuHeadline.style.cssText = 'text-align: center; margin: 0;';
  menu.appendChild(menuHeadline);

  let actualMenuContainer = document.createElement('div');
  actualMenuContainer.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr 1fr';

  let menuItem1Container = document.createElement('div');
  menuItem1Container.style.cssText = 'grid-row: 1; grid-column: 1;';
  let menuItem1title = document.createElement('h5');
  menuItem1title.textContent = 'Pasta';
  menuItem1Container.appendChild(menuItem1title);
  let menuItem1description = document.createElement('p');
  menuItem1description.textContent = 'Rigatoni with an incredible meat sauce that includes breadsticks on the side';
  menuItem1Container.appendChild(menuItem1description);
  let menuItem1cost = document.createElement('strong');
  menuItem1cost.textContent = '$19.99';
  menuItem1Container.appendChild(menuItem1cost);
  actualMenuContainer.appendChild(menuItem1Container);
  
  let menuItem2Container = document.createElement('div');
  menuItem2Container.style.cssText = 'grid-row: 1; grid-column: 2;';
  let menuItem2title = document.createElement('h5');
  menuItem2title.textContent = 'Steak';
  menuItem2Container.appendChild(menuItem2title);
  let menuItem2description = document.createElement('p');
  menuItem2description.textContent = '22 ounces of perfectly marbled and generously flavored bone-in cut.';
  menuItem2Container.appendChild(menuItem2description);
  let menuItem2cost = document.createElement('strong');
  menuItem2cost.textContent = '$29.99';
  menuItem2Container.appendChild(menuItem2cost);
  actualMenuContainer.appendChild(menuItem2Container);

  let menuItem3Container = document.createElement('div');
  menuItem3Container.style.cssText = 'grid-row: 2; grid-column: 1;';
  let menuItem3title = document.createElement('h5');
  menuItem3title.textContent = 'Hamburger';
  menuItem3Container.appendChild(menuItem3title);
  let menuItem3description = document.createElement('p');
  menuItem3description.textContent = 'Our regular two-patty burger, layered with four pieces of crispy, sweet applewood-smoked bacon.';
  menuItem3Container.appendChild(menuItem3description);
  let menuItem3cost = document.createElement('strong');
  menuItem3cost.textContent = '$39.99';
  menuItem3Container.appendChild(menuItem3cost);
  actualMenuContainer.appendChild(menuItem3Container);

  let menuItem4Container = document.createElement('div');
  menuItem4Container.style.cssText = 'grid-row: 2; grid-column: 2;';
  let menuItem4title = document.createElement('h5');
  menuItem4title.textContent = 'Steak & Cheese';
  menuItem4Container.appendChild(menuItem4title);
  let menuItem4description = document.createElement('p');
  menuItem4description.textContent = 'A sandwich made from thinly sliced pieces of beefsteak and melted cheese in a long hoagie roll.';
  menuItem4Container.appendChild(menuItem4description);
  let menuItem4cost = document.createElement('strong');
  menuItem4cost.textContent = '$49.99';
  menuItem4Container.appendChild(menuItem4cost);
  actualMenuContainer.appendChild(menuItem4Container);

  let menuItem5Container = document.createElement('div');
  menuItem5Container.style.cssText = 'grid-row: 3; grid-column: 1;';
  let menuItem5title = document.createElement('h5');
  menuItem5title.textContent = 'Burrito';
  menuItem5Container.appendChild(menuItem5title);
  let menuItem5description = document.createElement('p');
  menuItem5description.textContent = 'Burritos are filled with a savory filling, most often a meat such as chicken, beef, or pork, and often include other ingredients such as rice, cooked beans, vegetables, cheese, and condiments.';
  menuItem5Container.appendChild(menuItem5description);
  let menuItem5cost = document.createElement('strong');
  menuItem5cost.textContent = '$59.99';
  menuItem5Container.appendChild(menuItem5cost);
  actualMenuContainer.appendChild(menuItem5Container);

  let menuItem6Container = document.createElement('div');
  menuItem6Container.style.cssText = 'grid-row: 3; grid-column: 2;';
  let menuItem6title = document.createElement('h5');
  menuItem6title.textContent = 'Pot Roast';
  menuItem6Container.appendChild(menuItem6title);
  let menuItem6description = document.createElement('p');
  menuItem6description.textContent = 'Pot roast is a braised beef dish made by browning a roast-sized piece of beef before slow cooking the meat in a covered dish, sometimes with vegetables, in or over liquid.';
  menuItem6Container.appendChild(menuItem6description);
  let menuItem6cost = document.createElement('strong');
  menuItem6cost.textContent = '$69.99';
  menuItem6Container.appendChild(menuItem6cost);
  actualMenuContainer.appendChild(menuItem6Container);







  menu.appendChild(actualMenuContainer);
  mainContainer.appendChild(menu);
}

export { menuTab }