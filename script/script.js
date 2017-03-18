console.log("Grace Moon says Hi! :)");

"use strict";

//to home jQuery
$('.home-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.home').offset().top
	}, 670);
	$(".home-button").css("color", "#777777");
	$(".about-button").css("color", "#101010");
	$(".projects-button").css("color", "#101010");
	$(".contact-button").css("color", "#101010");
}); 



//to about
$('.about-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.about').offset().top
	}, 670);
	$(".home-button").css("color", "#101010");
	$(".about-button").css("color", "#777777");
	$(".projects-button").css("color", "#101010");
	$(".contact-button").css("color", "#101010");
});

//to projects
$('.projects-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.projects').offset().top
	}, 670);
	$(".home-button").css("color", "#101010");
	$(".about-button").css("color", "#101010");
	$(".projects-button").css("color", "#777777");
	$(".contact-button").css("color", "#101010");
});

$('.contact-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.contact').offset().top
	}, 670);
	$(".home-button").css("color", "#101010");
	$(".about-button").css("color", "#101010");
	$(".projects-button").css("color", "#101010");
	$(".contact-button").css("color", "#777777");
});


// //TOP OF PAGE
// function toTop() {
// 	window.scrollTo(0,0);
// }
// let navHome = document.querySelector('.home-button');
// navHome.addEventListener("click", function() {
// 	toTop();
// });

// //ABOUT PAGE
// function toAbout() {
// 	    let about = document.querySelector('.about');
// 	    about.scrollIntoView();
// }
// let navAbout = document.querySelector('.about-button');
// navAbout.addEventListener("click", function(){
// 		console.log("about button before");
// 		toAbout();
// });

// //PROJECTS PAGE
// function toProjects() {
// 	let projects = document.querySelector('.projects');
// 	projects.scrollIntoView();
// }
// let navProjects = document.querySelector('.projects-button');
// navProjects.addEventListener("click", function() {
// 	toProjects();
// });

// //LINKS PAGE
// function toLinks() {
// 	let links = document.querySelector('.links');
// 	links.scrollIntoView();
// }
// let navLinks = document.querySelector('.links-button');
// navLinks.addEventListener("click", function() {
// 	toLinks();
// });







