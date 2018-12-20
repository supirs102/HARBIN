$(function(){

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
	var centerTop = centersvg.offset().top-700;
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

	// topSVGのキャッシュ消すつまり画像にタイムスタンプして別画像として認識させる
	var timestamp = new Date().getTime();
	$('#top-svg').css({'background-image': 'url(images/topline.svg' + '?' + timestamp + ')'});
	// centerSVGのキャッシュ消すつまり画像にタイムスタンプして別画像として認識させる
	var timestamp = new Date().getTime();
	$('#center-svg').css({'background-image': 'url(images/centerline.svg' + '?' + timestamp + ')'});
	// bottomSVGのキャッシュ消すつまり画像にタイムスタンプして別画像として認識させる
	var timestamp = new Date().getTime();
	$('#bottom-svg').css({'background-image': 'url(images/footerline.svg' + '?' + timestamp + ')'});

    // パソコン版centerSVG内のコンテンツへのリンク(cuisine)を押された際、centerSVGを表示
	$('#navcuisinepc').one("click", function () {
        $('#center-svg').show();
        $('a[href^="#cuisinemo"]').triggerHandler('click');
    });
    // パソコン版centerSVG内のコンテンツへのリンク(mastercheff)を押された際、centerSVGを表示
	$('#navmastercheffpc').one("click", function () {
        $('#center-svg').show();
        $('a[href^="#mastercheff"]').triggerHandler('click');
    });
    // パソコン版centerSVG内のコンテンツへのリンク(element)を押された際、centerSVGを表示
	$('#navelementpc').one("click", function () {
        $('#center-svg').show();
        $('a[href^="#element"]').triggerHandler('click');
    });

	// 上に戻るボタン
    var topBtn = $('#gotop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // headernavhover
    var nav = $('#navya');
    nav.append('<span class="navsankaku"></span>');
    // 原点の位置
    var contY = nav.offset().top;
    $('li a', nav).mouseover(function(){
        // 移動先の位置を取得
        var thisOffset = $(this).offset().top - contY - 8;
        $('span.navsankaku', nav).stop().animate({
            top : thisOffset +'px'
        },200);
    });
    // ウィンドウリサイズ時挙動
	$(window).resize(function(){
		// headernavhover
	    var nav = $('#navya');
	   	$('span.navsankaku').hide();
	    nav.append('<span class="navsankaku"></span>');
	    // 原点の位置
	    var contY = nav.offset().top;
	    $('li a', nav).mouseover(function(){
	        // 移動先の位置を取得
	        var thisOffset = $(this).offset().top - contY - 8;
	        $('span.navsankaku', nav).stop().animate({
	            top : thisOffset +'px'
	        },200);
	    });
	});
	$(window).on('load resize', function(){
		var w = $(window).width();
		var x = 426;
		if (w < x) {
			// headernavhover
			var nav = $('#navya');
			nav.append('<span class="navsankaku"></span>');
			// 原点の位置
			var contY = nav.offset().top;
			$('li a', nav).mouseover(function(){
			    // 移動先の位置を取得
			    var thisOffset = $(this).offset().top - contY - 4;
			    $('span.navsankaku', nav).stop().animate({
			        top : thisOffset +'px'
			    },200);
			});
			// ウィンドウリサイズ時挙動
			$(window).resize(function(){
				// headernavhover
			    var nav = $('#navya');
			   	$('span.navsankaku').hide();
			    nav.append('<span class="navsankaku"></span>');
			    // 原点の位置
			    var contY = nav.offset().top;
			    $('li a', nav).mouseover(function(){
			        // 移動先の位置を取得
			        var thisOffset = $(this).offset().top - contY - 4;
			        $('span.navsankaku', nav).stop().animate({
			            top : thisOffset +'px'
			        },200);
			    });
			});
		}
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

	// ハルビンの物語の背景
	$('.bg-slider').bgSwitcher({
		images: ['images/monogatari.png','images/monogatari.png','images/monogatari.png'], // 切り替える背景画像を指定
		loop: true // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
	});

	// cuisinemokari
	$(".cuisinemokari001").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari002").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari003").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari004").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari005").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari006").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari007").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari008").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari009").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari010").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari011").modaal({
		animation: 'fade',
		fullscreen: true
	});
	$(".cuisinemokari012").modaal({
		animation: 'fade',
		fullscreen: true
	});

	// cuisinemonew
	$("#cuisinemonew001").animatedModal({
		animatedIn: 'fadeIn',
		animatedOut: 'fadeOut',
		animationDuration: '0.5s',
		color: '#000417',
		overflow: 'hidden'
	});
	$("#cuisinemonew002").animatedModal();
	$("#cuisinemonew003").animatedModal();
	$("#cuisinemonew004").animatedModal();
	$("#cuisinemonew005").animatedModal();
	$("#cuisinemonew006").animatedModal();
	$("#cuisinemonew007").animatedModal();
	$("#cuisinemonew008").animatedModal();
	$("#cuisinemonew009").animatedModal();
	$("#cuisinemonew010").animatedModal();
	$("#cuisinemonew011").animatedModal();
	$("#cuisinemonew012").animatedModal();

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

	// informationslide
	$('#information').each(function(){
		var $slides = $('.slideshow').find('img'),
				slideCount = $slides.length,
				currentIndex = 0;
		$slides.eq(0).fadeIn();
		setInterval(showNextSlide,7000);
		function showNextSlide(){
			var nextIndex = (currentIndex+1)%slideCount;
			$slides.eq(currentIndex).fadeOut(3000);
			$slides.eq(nextIndex).fadeIn(3000);
			currentIndex=nextIndex;
		}
	});

	// ウィンドウリサイズ時挙動
	$(window).on('load resize', function(){
		var w = $(window).width();
		var h = $(window).height();
		if (w > h) {
			$('#masterimage1').css({'background-image': 'url(images/master.jpg)'});
			$('#cheffimage1').css({'background-image': 'url(images/cheff.png)'});
		}
	});

});

