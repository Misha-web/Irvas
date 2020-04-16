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

});





