//Get the button:
mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 75) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
mybutton.addEventListener("click",function(){topFunction()},false);
// -----------------------------------------------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(p) {
  showSlides(slideIndex += p);
}
// Thumbnail image controls
function currentSlide(o) {
  showSlides(slideIndex = o);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sec2slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.getElementById("prevbtn").addEventListener("click",function(){plusSlides(-1)},false);
document.getElementById("nextbtn").addEventListener("click",function(){plusSlides(1)},false);
document.getElementById("dot1").addEventListener("click",function(){currentSlide(1)},false);
document.getElementById("dot2").addEventListener("click",function(){currentSlide(2)},false);
document.getElementById("dot3").addEventListener("click",function(){currentSlide(3)},false);
// -----------------------------------------------------------------------------------
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsivefunc() {
  var x = document.getElementById("mynav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.getElementById("bars").addEventListener("click",function(){responsivefunc()},false);
// -----------------------------------------------------------------------------------
/* Auto close nav bar after nav click */
function autoclose() {
  var x = document.getElementById("mynav");
  if (x.className === "topnav responsive") {
    x.className = "topnav";
  }
}
document.getElementById("homenav").addEventListener("click",function(){autoclose()},false);
document.getElementById("aboutnav").addEventListener("click",function(){autoclose()},false);
document.getElementById("locationsnav").addEventListener("click",function(){autoclose()},false);
document.getElementById("music_avenuenav").addEventListener("click",function(){autoclose()},false);
document.getElementsByClassName("section-1").addEventListener("click",function(){autoclose()},false);