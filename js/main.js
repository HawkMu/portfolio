const menuButton = document.querySelector('.menu-button');
const headerNav = document.querySelector('.header-nav');

menuButton.addEventListener('click', function () {
  headerNav.classList.toggle('is-open');

  if (headerNav.classList.contains('is-open')) {
    menuButton.textContent = '閉じる';
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    menuButton.textContent = 'メニュー';
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

const navLinks = document.querySelectorAll('.header-nav a');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    headerNav.classList.remove('is-open');
    menuButton.textContent = 'メニュー';
    menuButton.setAttribute('aria-expanded', 'false');
  });
}