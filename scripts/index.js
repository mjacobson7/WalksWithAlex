// Variables 
const faqs = document.querySelectorAll('.faq__button');


// Functions
const toggleFaqVisibility = (faqAnswer, faqs) => {
	faqs.forEach(faq => {
		if (!faqAnswer.isEqualNode(faq.nextElementSibling)) {
			faq.nextElementSibling.classList.remove('faq__item_show');
		}
	})
	faqAnswer.classList.toggle('faq__item_show');
}


// Event Listeners
faqs.forEach(faq => {
	faq.addEventListener('click', (e) => {
		toggleFaqVisibility(e.currentTarget.nextElementSibling, faqs)
	})
})