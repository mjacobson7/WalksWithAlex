const hamburgerMenu = document.querySelector('.header__menu-icon_open');
const closeButton = document.querySelector('.header__menu-icon_close');
const headerTitle = document.querySelector('.header__title');
const mobileNavContainer = document.querySelector('.header__mobile-nav-container');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.add('header__menu-icon_hide');
	closeButton.classList.remove('header__menu-icon_hide');

	headerTitle.classList.add('header__title_hide');

	mobileNavContainer.classList.add('header__mobile-nav-container_active');

	body.style.overflow = 'hidden';
})

closeButton.addEventListener('click', () => {
	closeButton.classList.add('header__menu-icon_hide');
	hamburgerMenu.classList.remove('header__menu-icon_hide');

	headerTitle.classList.remove('header__title_hide');

	mobileNavContainer.classList.remove('header__mobile-nav-container_active');

	body.style.overflow = 'auto';
})