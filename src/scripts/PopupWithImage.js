import Popup from './popup.js';

class PopupWithImage extends Popup {
	open(link) {
		const image = this._popupElement.querySelector('.popup__image');
		image.src = link;
		super.open();
	}
}

export default PopupWithImage;
