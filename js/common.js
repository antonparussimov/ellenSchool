$(function () {

	// Toggle Menu
	// -----------------------------------------------------------------------
	var currentScroll;
	$('.gnav-toggle').click(function () {
		$(this).toggleClass('is-active');
		$('.gnav').toggleClass("is-active");
		if ($('.gnav-toggle').hasClass('is-active')) {
			currentScroll = $(window).scrollTop();
			$('body').css({
				position: 'fixed',
				width: '100%',
				top: -1 * currentScroll
			});
		} else {
			$('body').attr({
				style: ''
			});
			$(window).scrollTop(currentScroll);
		}
	});


	// fix header
	// -----------------------------------------------------------------------
	var headerTop = $(".header-main").offset().top;
	$(window).on("scroll load", function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > headerTop) {
			$('body').addClass("fixed");
			$('.header-main').addClass("fixed");
		} else {
			$('body').removeClass("fixed");
			$('.header-main').removeClass("fixed");
		}
	});





	if (window.location.href.indexOf("/news/") > -1) {
		$('a[href^="#"]').click(function () {
		  var speed = 500;
		  var href = $(this).attr("href");
		  var target = $(href == "#" || href == "" ? 'html' : href);
		  var position = target.offset().top;
		    position = position - $('.header-main').outerHeight();
		  $("html, body").animate({
		    scrollTop: position
		  }, speed, "swing");
			console.log("ok");
		  return false;

		});

	}else{
		$('a[href^="#"]').click(function () {
			var speed = 500;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({
				scrollTop: position
			}, speed, "swing");
			return false;
		});
	}

	  // top slider
	// -----------------------------------------------------------------------

	$(window).on('scroll', function () {
		pagetop = $(this).scrollTop();
		timing = ($(this).width() > 767);

		if (pagetop > timing) {
			$('#to-top').addClass('is-visible');
		} else {
			$('#to-top').removeClass('is-visible');
		}
	});

	$('#to-top').on('click', function () {
		$("html, body").stop().animate({
			scrollTop: 0
		}, 500, "swing");
	});
	$('.ads span').click(function() {
		$(this).parent().hide();
	})
});

$('#top-mv').slick({
  dots: false,
	prevArrow: false,
	nextArrow: false,
  autoplay: true,
	autoplaySpeed: 3000,
	speed: 1500,
	fade: true,
	arrows: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	infinite: true,
	swipe: true,
	waitForAnimate: false,
	cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
});
