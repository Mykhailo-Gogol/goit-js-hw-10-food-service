const Handlebars = require('handlebars');
import recipes from './menu.json';
import './styles.css';

// Add template
const source = document.querySelector('#menu-template').innerHTML.trim();
const listRef = document.querySelector('.js-menu');
const template = Handlebars.compile(source);
recipes.forEach(recipe => {
  const markup = template(recipe);
  listRef.insertAdjacentHTML('beforeEnd', markup);
});

// Check Theme
const toggler = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
function checkTheme() {
  if (localStorage.getItem('theme') === 'false') {
    document.body.classList.add(Theme.LIGHT);
    toggler.checked = false;
  }
  if (localStorage.getItem('theme') === 'true') {
    document.body.classList.add(Theme.DARK);
    toggler.checked = true;
  }
}
checkTheme();

// Change Theme
function onThemeChange(event) {
  if (event.target.checked) {
    // console.log(event.target.checked);

    document.body.classList.add(Theme.DARK);
  } else {
    // console.log(event.target.checked);
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
  localStorage.setItem('theme', event.target.checked);
  console.log(typeof localStorage.getItem('theme'));
}
toggler.addEventListener('change', onThemeChange);
