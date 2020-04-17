$(document).ready(function() {
	$(".js-tab-trigger").click(function(){
		let id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="'+ id +'"]');

		$(".js-tab-trigger.active").removeClass("active");
		$(this).addClass("active");

		$(".js-tab-content.active").removeClass("active");
		content.addClass("active");
	});

	$(".js-tab-header").click(function(){
		let id = $(this).attr('data-tab'),
		content = $('.js-tab-body[data-tab="'+ id +'"]');

		$(".js-tab-header.active").removeClass("active");
		$(this).addClass("active");

		$(".js-tab-body.active").removeClass("active");
		content.addClass("active");
	});

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





