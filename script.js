 //  document.addEventListener("DOMContentLoaded", function(event) {
	// console.log("DOM loaded");
 //  });
console.log("Grace Moon says Hi! :) DOM loaded");

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


function toAbout() {
	    let about = document.querySelector('.about');
	    about.scrollIntoView();
}
let navAbout = document.querySelector('.about-butt');
navAbout.addEventListener("click", function(){
		console.log("about button before");
		toAbout();
});

