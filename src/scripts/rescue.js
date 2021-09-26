import '../pages/rescue.css';
import PopupWithImage from './PopupWithImage';

const photos = document.querySelectorAll('.photo-collage__item');

const imagePopup = new PopupWithImage('popup_type_image');
imagePopup.setEventListeners();
photos.forEach((photo) =>
	photo.addEventListener('click', () => {
		imagePopup.open(photo.querySelector('.photo-collage__image').src);
	})
);
