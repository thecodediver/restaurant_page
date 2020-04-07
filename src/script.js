import './style.css';
import { render, clearTab } from './render'
import { homeTab } from './hometab'
import { menuTab } from './menutab'
import { contactTab } from './contacttab'
render();
homeTab();

let buttons = document.querySelectorAll('.tab');
buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    let name = e.target.id;
    switch (name) {
      case "homeButton":
        document.getElementById('menuButton').className = 'tab';
        document.getElementById('contactButton').className = 'tab';
        e.target.className = 'tab current-tab';
        clearTab();
        homeTab();
        break;

      case "menuButton":
        document.getElementById('homeButton').className = 'tab';
        document.getElementById('contactButton').className = 'tab';
        e.target.className = 'tab current-tab';
        clearTab();
        menuTab();
        break;

      case "contactButton":
        document.getElementById('menuButton').className = 'tab';
        document.getElementById('homeButton').className = 'tab';
        e.target.className = 'tab current-tab';
        clearTab();
        contactTab();
        break;
    
      default:
        break;
    }
  });
});
