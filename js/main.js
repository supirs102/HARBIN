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

	// topSVGのキャッシュ消すつまり画像にタイムスタンプして別画像として認識させる
	var timestamp = new Date().getTime();
	$('#top-svg').css({'background-image': 'url(images/topline.svg' + '?' + timestamp + ')'});
	// centerSVGのキャッシュ消すつまり画像にタイムスタンプして別画像として認識させる
	var timestamp = new Date().getTime();
	$('#center-svg').css({'background-image': 'url(images/centerline.svg' + '?' + timestamp + ')'});
	// bottomSVGのキャッシュ消すつまり画像にタイムスタンプして別画像として認識させる
	var timestamp = new Date().getTime();
	$('#bottom-svg').css({'background-image': 'url(images/footerline.svg' + '?' + timestamp + ')'});


	// ハルビンの物語の背景
	$('.bg-slider').bgSwitcher({
		images: ['images/monogatari.png','images/monogatari.png','images/monogatari.png'], // 切り替える背景画像を指定
		loop: true // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
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

	// cuisine
	$(".cuisine-image").colorbox({
		rel: 'slideshow',
		transition: 'fade',
		slideshow: false,
		slideshowSpeed: 5000,
		maxWidth: "100%",
		maxHeight: "100%",
		opacity: 1
	});
	// cuisine-tb
	$(".cuisinetb-image").colorbox({
		rel: 'slideshowtb',
		transition: 'fade',
		slideshow: false,
		slideshowSpeed: 5000,
		maxWidth: "100%",
		maxHeight: "100%",
		opacity: 1
	});
	// cuisine-sp
	$(".cuisinesp-image").colorbox({
		rel: 'slideshowsp',
		transition: 'fade',
		slideshow: false,
		slideshowSpeed: 5000,
		maxWidth: "100%",
		maxHeight: "100%",
		opacity: 1
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

    // ページ内リンク
    $('a[href^="#"]').click(function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

    // パソコン版centerSVG内のコンテンツへのリンク(cuisine)を押された際、centerSVGを表示
	$('#navcuisinepc').one("click", function () {
        $('#center-svg').show();
        $('a[href^="#cuisine"]').triggerHandler('click');
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
//footernav日本語なるように→ホバーのときの線どっちに合わせるの？→なし
///フッターの住所合間→均一がいいかも
//mastercheffシェフを野菜とかと行の高さ合わせる
///topsvgおろす
//相対的に下の文章との隙間も縮める（上と下の隙間一緒に）全体的に隙間縮める
///ハルビンの物語のとこ背景INFORMATION的にするかも（フェード）
///mainimageの画像もう少し大きく
///mastercheff（トップページの）文字サイズ１上げる（ふりがなは微妙）
//cuisinespの画像がぱぱっと切り替わるのが一番気になる
//それならライトボックスがいい（それなら横の矢印あってもいいかも）
//mastercheff下からの位置でできたらいいな（いずれって感じ）
//ハルビンの物語の背景は高兄ちゃんが確認する（後で画像いただける？）
//
//
//
//全体的に画質の重さの調整
//pngとjpgのいいとこ取りの形式がある
//
///element画像かぶってるの治す
//XDシミュレーションできるかもなの確認（むー）



//　うえのheaderの塊を中央にできるように（header navとかのmargin-topをvhに変更）
//　cuisineタブレット版パソコン版
//
//
//　ハルビンの物語のとこ中の文字の感じ
//　栽培家たちの野菜とかトップページ（パソコン）中も
//　モーダルで矢印消して一回一回戻る形か、ライトボックス頑張るか
//
//　SVGタブレット版動かす
//　ハルビンの物語のとこパソコン版のフェードを止めて
//　栽培家たちの野菜の文字タブレット版をスマホ版に合わせる
//　タブレット版のmainimage少し大きく
//
//　ハルビンの物語のとこ横にウィーンウィーンってする
//　マスターシェフ文字サイズ上げる（画像も暗めに）行間確認
//
//


// たか兄ちゃんのモーダル背景がずれる（肉）の原因はそのまま幅を縮めるとみきれるから