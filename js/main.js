$(function(){

	// aboutimageslide
	$('#aboutimage').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('.modalopenlabel').on('click', function() {
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

    $('.chocolat-parent').Chocolat();

    // headernavhover
    var nav = $('#navya');
    nav.append('<span></span>');
    //原点の位置
    var contY = nav.offset().top;
    $('li a', nav).mouseover(function(){  
        //移動先の位置を取得
        var thisOffset = $(this).offset().top - contY - 12;
        $('span', nav).stop().animate({
            top : thisOffset +'px'
        },200);
    });

    // ページ内リンク
    $('a[href^="#"]').click(function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


//料理のとこも動き（周り囲まれる的な線）
//料理の左と下・右と上でそれぞれボーダーがひかれるもの
//
//
//
//
//
//
//
//
//
//
//
//
//
