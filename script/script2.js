 //  document.addEventListener("DOMContentLoaded", function(event) {
	// console.log("DOM loaded");
 //  });
console.log("Grace Moon says Hi! :) Please use Google Chrome~ DOM loaded");

"use strict";
// let navLink = document.querySelector('.links-butt');
// navLink.addEventListener("click", function(){
// 			console.log("link button working");
// 	    alert('ho ho ho');  
// });

// let navAbout = document.querySelector('.about-butt');
// navAbout.addEventListener("click", function(){
// 			console.log("about button before");
// 	    let about = document.querySelector('.about');
// 	    about.scrollIntoView();
// });


// function toHome() {
// 	    let home = document.querySelector('.home');
// 	    home.scrollIntoView();
// }
// let navHome = document.querySelector('.home-butt');
// navAbout.addEventListener("click", function(){
// 		console.log("about button before");
// 		toAbout();
// });

let fadeInPage = document.querySelector('body').style.animation;



//TOP OF PAGE
function toTop() {
	window.scrollTo(0,0);
}
let navHome = document.querySelector('.home-button');
navHome.addEventListener("click", function() {
	toTop();
});

//ABOUT PAGE
function toAbout() {
	    let about = document.querySelector('.about');
	    about.scrollIntoView();
}
let navAbout = document.querySelector('.about-button');
navAbout.addEventListener("click", function(){
		console.log("about button before");
		toAbout();
});

//PROJECTS PAGE
function toProjects() {
	let projects = document.querySelector('.projects');
	projects.scrollIntoView();
}
let navProjects = document.querySelector('.projects-button');
navProjects.addEventListener("click", function() {
	toProjects();
});

//LINKS PAGE
function toLinks() {
	let links = document.querySelector('.links');
	links.scrollIntoView();
}
let navLinks = document.querySelector('.links-button');
navLinks.addEventListener("click", function() {
	toLinks();
});

//FADE IN / OUT CSS PER PAGE
