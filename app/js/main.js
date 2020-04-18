$(document).ready(function() {
	//Wow.js
	new WOW().init();
	//Tabs
	$(".js-tab-trigger").click(function(){
		let id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="'+ id +'"]');

		$(".js-tab-trigger.active").removeClass("active");
		$(this).addClass("active");

		$(".js-tab-content.active").removeClass("active");
		content.addClass("active");
	});
	//Tabs
	$(".js-tab-header").click(function(){
		let id = $(this).attr('data-tab'),
		content = $('.js-tab-body[data-tab="'+ id +'"]');

		$(".js-tab-header.active").removeClass("active");
		$(this).addClass("active");

		$(".js-tab-body.active").removeClass("active");
		content.addClass("active");
	});

	//Map
	let stock = $('.stock');
	let	stockTop = stock.offset().top;
	$(window).bind('scroll', function() {
		let windowTop = $(this).scrollTop();
		if (windowTop > stockTop) {
			$('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.2453299345166!2d37.60522089868893!3d55.92778482384432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53a0ac32d875f%3A0xe1064c1e68c2b74a!2z0YPQuy4g0JLRi9GB0YLQsNCy0L7Rh9C90LDRjywgNTMsINCS0LXRiNC60LgsINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMTI3NTQz!5e0!3m2!1sru!2sua!4v1587135708892!5m2!1sru!2sua" frameborder="0" aria-hidden="false"></iframe>')
			$(window).unbind('scroll');
		}
	});

	//Timer
	function timerLeft() {
		setInterval(function() {
			let daysLeft = document.getElementById('timer-v-days'),
				daysText = document.getElementById('timer-v-days__text'),
				hoursLeft = document.getElementById('timer-v-hours'),
				hoursText = document.getElementById('timer-v-hours__text'),
				minutesLeft = document.getElementById('timer-v-minutes'),
				minutesText = document.getElementById('timer-v-minutes__text'),
				secLeft = document.getElementById('timer-v-seconds'),
				secText = document.getElementById('timer-v-seconds__text'),
				dateNow = new Date().getTime(),
				dateFinish = new Date(2020,4,19),
				sec = Math.floor((dateFinish - dateNow) / 1000),
				secToMinutes = sec % 3600,
				daysNumber = Math.floor((dateFinish - dateNow) / (1000 * 60 * 60 *24)),
				hoursNumber = Math.floor(sec / 3600),
				minutesNumber = Math.floor(secToMinutes / 60),
				secondsNumber = secToMinutes % 60;

			daysLeft.innerHTML = daysNumber;
			hoursLeft.innerHTML = hoursNumber;
			minutesLeft.innerHTML = minutesNumber;
			secLeft.innerHTML = secondsNumber;
		}, 1000)
	}

	timerLeft();

});






