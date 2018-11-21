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

	// element-sp
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1.2,
		initialSlide: 1,
		centeredSlides: true,
		// simulateTouch: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	// elementsp001imageslide
	$('#elementsp001image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#elementsp001-modalopenlabel').on('click', function() {
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

	// elementsp002imageslide
	$('#elementsp002image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#elementsp002-modalopenlabel').on('click', function() {
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

	// elementsp003imageslide
	$('#elementsp003image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#elementsp003-modalopenlabel').on('click', function() {
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

	// elementtb001imageslide
	$('#elementtb001image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#elementtb001-modalopenlabel').on('click', function() {
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

	// elementtb002imageslide
	$('#elementtb002image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#elementtb002-modalopenlabel').on('click', function() {
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

	// elementtb003imageslide
	$('#elementtb003image').each(function(){
		var $slides = $(this).find('.slide'),
			slideCount = $slides.length,
			currentIndex = 0;
		$('#elementtb003-modalopenlabel').on('click', function() {
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

	// chocolat
    $('.chocolat-parent').Chocolat();
    // chocolat
    $('.chocolat-parent-tb').Chocolat();
    // chocolat
    $('.chocolat-parent-sp').Chocolat();

    // chocolat画像切替
	$('.chocolat-right').click(function() {
		$('.chocolat-img').hide().fadeIn(1500);
	});
	$('.chocolat-left').click(function() {
		$('.chocolat-img').hide().fadeIn(1500);
	});

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
//一番左で統一
//おかしかったら左と真ん中
//右はない
//作品はフェード
//fontはあとで
//border1px
//
//
//真ん中スタートのリピート無しelement-sp
//
//
//タブレットのとこのmastercheffは文字にリンク
//隙間もリンク
//spはfontsize変更くる
//ぬるっと三角がついてくるのはPCだけ
//pcのnavの文字はホバーで変わるようにするかも
//
//
