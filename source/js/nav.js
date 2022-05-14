const resize = () => {
  if (window.innerWidth <= 660) {
    document.querySelector('.footer').style.display = 'none';
  } else {
    document.querySelector('.footer').style.display = 'grid';
  }
}

window.addEventListener('resize', _.debounce(resize, 100));

const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.main-nav__toggle');

header.classList.remove('page-header--nojs');
navToggle.addEventListener('click', function() {
  if (header.classList.contains('page-header--nav-closed')) {
    header.classList.remove('page-header--nav-closed');
    header.classList.add('page-header--nav-opened');
  } else {
    header.classList.remove('page-header--nav-opened');
    header.classList.add('page-header--nav-closed');
  }
});