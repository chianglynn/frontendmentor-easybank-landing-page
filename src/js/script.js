// Nav menu variables
const nav = document.querySelector('.nav');
const navOpenIcon = document.querySelector('.nav-hamburger-icon');
const navCloseIcon = document.querySelector('.nav-close-icon');
const overlayAndMobileNavMenu = document.querySelector('.overlay-nav-menu');
const overlay = document.querySelector('.overlay');
const navMenu = document.querySelector('.nav-menu');
const navHeight = nav.getBoundingClientRect().height;
// Section variables
const sectionOne = document.querySelector('.section-1');

// Nav Menu Functions
const showMenu = () => {
    navOpenIcon.classList.toggle('hide-nav-icon');
    navCloseIcon.classList.toggle('hide-nav-icon');
    overlayAndMobileNavMenu.style.display = 'block';
    overlayAndMobileNavMenu.classList.remove('animation-fade-out');
    overlayAndMobileNavMenu.classList.add('animation-fade-in');
    navMenu.style.top = `${navHeight + 25}px`;
    overlay.style.top = `${navHeight}px`;
};

const hideMenu = () => {
    navOpenIcon.classList.toggle('hide-nav-icon');
    navCloseIcon.classList.toggle('hide-nav-icon');
    overlayAndMobileNavMenu.classList.remove('animation-fade-in');
    overlayAndMobileNavMenu.classList.add('animation-fade-out');

};

const fixNav = entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('fixed-nav');
    else nav.classList.remove('fixed-nav');
};

const sectionOneObserver = new IntersectionObserver(fixNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

// Observer
sectionOneObserver.observe(sectionOne);

// Event listeners
navOpenIcon.addEventListener('click', showMenu);
[navCloseIcon, overlay].forEach(element => element.addEventListener('click', hideMenu));