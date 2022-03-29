// get elements
const navIcon = document.getElementById('nav-icon');
const navbarCollapse = document.getElementById('navbar-collapse');

let isNavbarShow = false;

// show nav
function showNav() {
  navIcon.classList.add('open');
  navbarCollapse.classList.add('open');
  isNavbarShow = true;
}

// hide nav
function hideNav() {
  navIcon.classList.remove('open');
  navbarCollapse.classList.remove('open');
  isNavbarShow = false;
}

// onlcick navicon
navIcon.addEventListener('click', () => {
  isNavbarShow = !isNavbarShow;
  if (isNavbarShow) {
    showNav();
  } else {
    hideNav();
  }
});

// stop propagation func
function stopPropagationFunc(e) {
  console.log(e);
  e.stopPropagation();
}
