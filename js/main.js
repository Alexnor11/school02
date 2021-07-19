// Фиксированная шапка
$(document).scroll(function() {
	if($(document).width() < 980)
		return false;

	if($(document).scrollTop() > $('.full-page').height() / 2)
		$("header").addClass("fixed");
	else
		$("header").removeClass("fixed");
});