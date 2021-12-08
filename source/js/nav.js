const resize = () => {
  if (window.innerWidth <= 320) {
    document.querySelector('.footer').style.display = 'none';
  } else {
    document.querySelector('.footer').style.display = 'flex';
  }
}

window.addEventListener('resize', _.debounce(resize, 100));
