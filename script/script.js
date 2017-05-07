console.log("Grace Moon says Hi! :)");

"use strict";

//// typeIt jquery for home
$('#typewrite').typeIt({
     strings: ["front end web development", "web design", "illustrating children's books", "watching and drawing cartoons", "nature walks", "netflix", "eating ice cream"],
     startDelay: 4500,
     speed: 70,
     cursor: true,
     cursorSpeed: 700,
     breakLines: false,
     autoStart: false,
     deleteDelay: 2000,
     // breakDelay: 100,     
     lifeLike: true,
     loop: true,
});



//to home jQuery
$('.home-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.home').offset().top
	}, 400);
}); 

//to about
$('.about-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.about').offset().top
	}, 400);
});

//to projects
$('.projects-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.projects').offset().top
	}, 400);
});

$('.contact-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.contact').offset().top
	}, 400);
});


$('#hamburger-button').click(() => {
	console.log('clicked');
	$('nav').toggleClass('navToggle');
});

$('.navi').click(() => {
	console.log('button clicked?')
	$('nav').removeClass('navToggle');
});