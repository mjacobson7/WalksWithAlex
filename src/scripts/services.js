import '../pages/services.css';

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
	const links = card.querySelectorAll('.card__link');
	links.forEach((link) => {
		link.addEventListener('click', () => {
			card
				.querySelector('.card__read-more')
				.classList.toggle('card__read-more_visible');

			card.querySelector('.card__dots').classList.toggle('card__dots_visible');
		});
	});
});
