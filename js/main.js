// js/main.js
document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
