$(function(){
	// headerslide
	$('#mainimage').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;

		$slides.eq(currentIndex).fadeIn();
		setInterval(showNextSlide, 7000);
		function showNextSlide(){
			var nextIndex = (currentIndex + 1) % slideCount;
			$slides.eq(currentIndex).fadeOut(3000);
			$slides.eq(nextIndex).fadeIn(3000);
			currentIndex = nextIndex;
		}
	});

	// scrollsvg
	var batusvg = $('#test01');    
	batusvg.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			batusvg.fadeIn();
		}
	});
});