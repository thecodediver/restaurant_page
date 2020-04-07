function render(){
  let mainPageContainer = document.getElementById('content');
  let header = document.createElement('header');
  let logo = document.createElement('img');
  logo.src = "dist/logo.png";
  header.appendChild(logo);
  
  mainPageContainer.appendChild(header);

  let body = document.createElement('div');
  body.id = "mainBody";

  let headline = document.createElement('h1');
  headline.className = 'headline';
  headline.textContent = 'Pizza Structure';
  body.appendChild(headline);

  let lead = document.createElement('h3');
  lead.className = 'lead';
  lead.textContent = 'Your place for the best local pizza!';
  body.appendChild(lead);

  mainPageContainer.appendChild(body);

  let tabContainer = document.createElement('div');
  tabContainer.id = 'tabContainer';

  let home = document.createElement('button');
  home.id = 'homeButton';
  home.className = 'current-tab tab';
  home.textContent = 'Home';
  tabContainer.appendChild(home);

  let menu = document.createElement('button');
  menu.id = 'menuButton';
  menu.className = 'tab';
  menu.textContent = 'Menu';
  tabContainer.appendChild(menu);

  let contact = document.createElement('button');
  contact.id = 'contactButton';
  contact.className = 'tab';
  contact.textContent = 'Contact Us';
  tabContainer.appendChild(contact);

  mainPageContainer.appendChild(tabContainer);
}

function clearTab() {
  let tabInfoContainer = document.querySelectorAll('.tabInfoContainer');
  if(tabInfoContainer.length > 0){
    tabInfoContainer.forEach((container) => {
      container.parentNode.removeChild(container);
    });
  };
}


export { render, clearTab }