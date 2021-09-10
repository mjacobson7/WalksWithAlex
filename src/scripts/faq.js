import '../pages/faq.css';

// Variables 
const faqs = document.querySelectorAll('.faq__button');


// Functions
const toggleFaqVisibility = (faqAnswer, chevron) => {
	faqAnswer.classList.toggle('faq__item_show');
	chevron.classList.toggle('faq__chevron_rotate');
}


// Event Listeners
faqs.forEach(faq => {
	faq.addEventListener('click', (e) => {
		toggleFaqVisibility(e.currentTarget.nextElementSibling, e.currentTarget.querySelector('.faq__chevron'))
	})
})