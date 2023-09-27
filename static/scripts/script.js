const sidebar = document.querySelector('.mobile-navigation-bar-links');
const closeSidebar = document.querySelector('.close-sidebar');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function() {
  sidebar.classList.toggle('active');
  closeSidebar.classList.toggle('active');
});
closeSidebar.addEventListener('click', function() {
  sidebar.classList.remove('active');
  closeSidebar.classList.remove('active');
});
document.addEventListener('keyup', function() {
  sidebar.classList.remove('active');
  closeSidebar.classList.remove('active');
});


// Get sactive navlink

let currentURL = window.location.href;
        let navLinks = document.querySelectorAll('.nav-links li a');
        for (let i = 0; i < navLinks.length; i++) {
            let link = navLinks[i];
            if (link.href === currentURL) {
                link.classList.add('active');
            }
        }