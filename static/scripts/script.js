const sidebar = document.querySelector('.mobile-navigation-bar-links');
const closeSidebar = document.querySelector('.close-sidebar');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function () {
  sidebar.classList.toggle('active');
  closeSidebar.classList.toggle('active');
});
closeSidebar.addEventListener('click', function () {
  sidebar.classList.remove('active');
  closeSidebar.classList.remove('active');
});
document.addEventListener('keyup', function () {
  sidebar.classList.remove('active');
  closeSidebar.classList.remove('active');
});


// Get active navlink

let currentURL = window.location.href;
let navLinks = document.querySelectorAll('.nav-links li a');
for (let i = 0; i < navLinks.length; i++) {
  let link = navLinks[i];
  if (link.href === currentURL) {
    link.classList.add('active');
  }
}



const blogMenu = document.querySelector('.blog-menu');
const blogDropdown = document.querySelector('.blog-dropdown');
const arrowdown = document.querySelector('.ri-arrow-down-s-line');
const arrowup = document.querySelector('.ri-arrow-up-s-line');

// Track whether the mouse is inside the blog menu or dropdown
let isMouseInsideMenu = false;
let isMouseInsideDropdown = false;

blogMenu.addEventListener('mouseenter', () => {
  isMouseInsideMenu = true;
  blogDropdown.style.display = 'flex';
  arrowdown.style.display = 'none'
  arrowup.style.display = 'flex'
});

blogMenu.addEventListener('mouseleave', () => {
  isMouseInsideMenu = false;
  if (!isMouseInsideDropdown) {
    blogDropdown.style.display = 'none';
    arrowup.style.display = 'none'
    arrowdown.style.display = 'flex'
  }
});

blogDropdown.addEventListener('mouseenter', () => {
  isMouseInsideDropdown = true;
  blogDropdown.style.display = 'flex';
  arrowdown.style.display = 'none'
  arrowup.style.display = 'flex'
});

blogDropdown.addEventListener('mouseleave', () => {
  isMouseInsideDropdown = false;
  if (!isMouseInsideMenu) {
    blogDropdown.style.display = 'none';
    arrowup.style.display = 'none'
    arrowdown.style.display = 'flex'
  }
});


