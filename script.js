const nav = document.querySelector('.nav');
const navMenuOpenIcon = document.querySelector('.nav-menu-hamburger-icon');
const navMenuCloseIcon = document.querySelector('.nav-menu-close-icon');
const mobileNavMenu = document.querySelector('.nav-links-for-mobile');
const overlay = document.querySelector('.overlay');

function showNavMenu() {
    navMenuOpenIcon.classList.add('hidden');
    navMenuCloseIcon.classList.remove('hidden');

    mobileNavMenu.classList.remove('hidden');

    overlay.style.display = 'block';
    overlay.classList.remove('animation-fade-out');
    overlay.classList.add('animation-fade-in');
}

function hideNavMenu() {
    navMenuCloseIcon.classList.add('hidden');
    navMenuOpenIcon.classList.remove('hidden');

    mobileNavMenu.classList.add('hidden');

    overlay.classList.remove('animation-fade-in');
    overlay.classList.add('animation-fade-out');
    setTimeout(() => overlay.style.display = 'none', 300);
}

navMenuOpenIcon.addEventListener('click', showNavMenu);
navMenuCloseIcon.addEventListener('click', hideNavMenu);