$(document).ready(function() {

	faqReaderSection.click(function() {

		$(this).children('.o-cmp-faq-reader__section__answer').slideToggle(300);
		$(this).find('.a-cmp-drop-down-circle').toggleClass('a-cmp-drop-down-circle--active');

	});

});