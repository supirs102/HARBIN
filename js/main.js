$(function(){

	// aboutimageslide
	$('#aboutimage').each(function(){
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

	// informationslide
	$('#information').each(function(){
		var $slides = $('.slideshow').find('img'),
				slideCount = $slides.length,
				currentIndex = 0;
		$slides.eq(0).fadeIn();
		setInterval(showNextSlide,5000);
		function showNextSlide(){
			var nextIndex = (currentIndex+1)%slideCount;
			$slides.eq(currentIndex).fadeOut(1000);
			$slides.eq(nextIndex).fadeIn(1000);
			currentIndex=nextIndex;
		}
	});

	// topsvg
	var topsvg = $('#top-svg');
	var topTop = topsvg.offset().top-500;
	topsvg.hide();
	// スクロールがSVGに達したらSVG起動
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if (winTop >= topTop) {
			topsvg.fadeIn();
		}
	});

	// centersvg
	var centersvg = $('#center-svg');
	var centerTop = centersvg.offset().top-500;
	centersvg.hide();
	// スクロールがSVGに達したらSVG起動
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if (winTop >= centerTop) {
			centersvg.fadeIn();
		}
	});

	// bottomsvg
	var bottomsvg = $('#bottom-svg');
	var bottomTop = bottomsvg.offset().top-700;
	bottomsvg.hide();
	// スクロールがSVGに達したらSVG起動
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if (winTop >= bottomTop) {
			bottomsvg.fadeIn();
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