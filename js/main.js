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

	// element001imageslide
	$('#element001image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#element001-modalopenlabel').on('click', function() {
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

	// element002imageslide
	$('#element002image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#element002-modalopenlabel').on('click', function() {
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

	// element003imageslide
	$('#element003image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#element003-modalopenlabel').on('click', function() {
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

	// cuisinehover途中
	$('#cuisine001').find('a').mouseenter(function() {
		$('#filter').find('.bgheader').stop().fadeOut(); //蜿ｳ蛛ｴ
		$('#filter').find('.bg01').stop().fadeIn(); //蜿ｳ蛛ｴ
		$('.bg11').stop().fadeIn(); //蟾ｦ蛛ｴ
	}).mouseleave(function() {
		$('header').find('.bgheader').stop().fadeOut();
		$('header').find('.bg06').stop().fadeIn();
		$('.bg11').stop().fadeOut();
	});


});


//料理のとこも動き（周り囲まれる的な線）
//料理の左と下・右と上でそれぞれボーダーがひかれるもの
//
//
//
//
//
//一番左で統一
//おかしかったら左と真ん中
//右はない
//作品はフェード
//fontはあとで
//border1px
//
//
//
//
