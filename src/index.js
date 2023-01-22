import './sass/index.scss';

const headerEl = document.getElementById('header');
window.onscroll = function () {
  var scrolled = window.pageYOffset;
  if (scrolled >= 100) {
    headerEl.classList.add('bg-visible');
  } else {
    headerEl.classList.remove('bg-visible');
  }
};
