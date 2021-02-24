const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

switchRef.addEventListener('change', setBodyTheme);

standartTheme();

function setBodyTheme() {
  if (switchRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function standartTheme() {
  if (localStorage.getItem === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true;
  }
}
