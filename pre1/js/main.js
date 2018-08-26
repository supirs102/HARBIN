$(function(){

	// mainimageslide
	$('#mainimage').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;

		$('#modalopenlabel').on('click', function() {
			currentIndex = 0;
			$slides.eq(currentIndex).fadeIn();
			idmodal = setInterval(showNextSlide, 7000);

		});

		$('label.close').on('click', function() {
			clearInterval(idmodal);
			$slides.fadeOut();
		});
		function showNextSlide(){
			var nextIndex = (currentIndex + 1) % slideCount;
			$slides.eq(currentIndex).fadeOut(3000);
			$slides.eq(nextIndex).fadeIn(3000);
			currentIndex = nextIndex;
		}
	});

	// scrollsvg
	var batusvg = $('#test01');
	var batuTop = batusvg.offset().top-500;
	batusvg.hide();
	// スクロールがSVGに達したらSVG起動
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if (winTop >= batuTop) {
			batusvg.fadeIn();
		}
	});

	// scrollabout
	var aboutmovep = $('#about').find('p');
	var aboutTop = aboutmovep.offset().top-300;
	aboutmovep.hide();
	// スクロールがaboutに達したらabout起動
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if (winTop >= aboutTop) {
			aboutmovep.fadeIn(2000);
		}
	});


	// headerサイズ調整
	// var w = window.outerWidth;
	// var h = window.outerHeight;
	// $('header').css({
	// 	width : w,
	// 	height : h + 24
	// });
	// $(window).resize(function(){
	// 	var w = window.outerWidth;
	// 	var h = window.outerHeight;
	// 	$('header').css({
	// 		width : w,
	// 		height : h + 24
	// 	});
	// });
});