class Header {
	constructor() { }

	_closeMobileNav({ hamburgerMenu, closeButton, headerTitle, mobileNavContainer, body }) {
		closeButton.classList.add('header__menu-icon_hide');
		hamburgerMenu.classList.remove('header__menu-icon_hide');
		headerTitle.classList.remove('header__title_hide');
		mobileNavContainer.classList.remove('header__mobile-nav-container_active');
		body.style.overflow = 'auto';
	}

	_openMobileNav({ hamburgerMenu, closeButton, headerTitle, mobileNavContainer, body }) {
		hamburgerMenu.classList.add('header__menu-icon_hide');
		closeButton.classList.remove('header__menu-icon_hide');
		headerTitle.classList.add('header__title_hide');
		mobileNavContainer.classList.add('header__mobile-nav-container_active');
		body.style.overflow = 'hidden';
	}

	async _getTemplate() {
		const templates = document.createElement('template');
		templates.innerHTML = await (await fetch('./templates/header.html')).text()

		return templates.content.querySelector('#header').content.cloneNode(true);
	}

	_setEventListeners(data) {
		data.hamburgerMenu.addEventListener('click', () => {
			this._openMobileNav(data);
		});
		data.closeButton.addEventListener('click', () => {
			this._closeMobileNav(data);
		});
	}

	_renderHeader(template, body) {
		body.prepend(template);
	}

	async generateHeader() {
		const template = await this._getTemplate();
		const data = {
			hamburgerMenu: template.querySelector('.header__menu-icon_open'),
			closeButton: template.querySelector('.header__menu-icon_close'),
			headerTitle: template.querySelector('.header__title'),
			mobileNavContainer: template.querySelector('.header__mobile-nav-container'),
			body: document.querySelector('body')
		}

		this._setEventListeners(data);
		this._renderHeader(template, data.body);
	}


}

export default Header;


