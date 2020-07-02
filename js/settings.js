// ----------------------------------------------------------
// LEVIDIO MOCK UP - T SHIRT 1
// July, 25 2018
// Andre Hardika - RootPixel
// ----------------------------------------------------------

var width = $(window).width();
var scroll = $(window).scrollTop();

$(document).ready(function () {
	//smoothscroll
	$("a[target=self]").on('click', function(event) {
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 100},'slow');
		return false;
	});

	// Get Viewport: Remove attribute on small device
	if (width < 575) {
		$('div').removeAttr('data-wow-delay');
	}
});

// Fixed menu when scrolling
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if(scroll > 0){
		$('nav').addClass('navbar-blue');
	} else{
		$('nav').removeClass('navbar-blue');
	}

});

// Tooltip
$('[data-toggle="tooltip"]').tooltip();

// Wow JS
new WOW().init();

// Levidio Personal Branding Menu Tweak
$('.navbar-collapse').on('show.bs.collapse', function () {
	$('.navbar-page').css('background-color','rgba(0,0,0,.9)');
	$('.navbar-page .navbar-brand').css('color','#FF7174');
});
$('.navbar-collapse').on('hide.bs.collapse', function () {
	$('.navbar-page').css('background-color','transparent');
	$('.navbar-page .navbar-brand').css('color','#FFF');
});
