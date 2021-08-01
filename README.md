# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![img](https://github.com/chianglynn/frontendmentor-easybank-landing-page/blob/main/src/screenshot/screenshot.png?raw=true)

### Links

- Solution URL: [https://github.com/chianglynn/frontendmentor-easybank-landing-page](https://github.com/chianglynn/frontendmentor-easybank-landing-page)
- Live Site URL: [https://chianglynn.github.io/frontendmentor-easybank-landing-page/](https://chianglynn.github.io/frontendmentor-easybank-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaSrcipt

### What I learned

CSS can't animate between 'display: none;' and 'display: block' directly, so I manipulate this with JavaSrcipt as below:

```js
const showMenu = () => {
    navOpenIcon.classList.toggle('hide-nav-icon');
    navCloseIcon.classList.toggle('hide-nav-icon');
    overlayAndMobileNavMenu.style.display = 'block'; // Manipulate CSS display before change the classes for animation
    overlayAndMobileNavMenu.classList.remove('animation-fade-out');
    overlayAndMobileNavMenu.classList.add('animation-fade-in');
    navMenu.style.top = `${navHeight + 25}px`;
    overlay.style.top = `${navHeight}px`;
};
```

## Author

- Blog - [Lynn's Self-taught Records](https://lynnchiang.wordpress.com/)
- Frontend Mentor - [@chianglynn](https://www.frontendmentor.io/profile/chianglynn)