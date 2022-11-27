// Get button: When a visitor clicks on the title of the image..
/* var img1 = document.getElementById("imgTitle1");
var img2 = document.getElementById("imgTitle2");
var img3 = document.getElementById("imgTitle3");
var img4 = document.getElementById("imgTitle4");
var img5 = document.getElementById("imgTitle5");
var img6 = document.getElementById("imgTitle6");
var img7 = document.getElementById("imgTitle7");
var img8 = document.getElementById("imgTitle8");
var img9 = document.getElementById("imgTitle9");
var img10 = document.getElementById("imgTitle10"); */

// Get button: When a visitor clicks on overlay arounf the title of the image..
var img1 = document.getElementById("overlay1");
var img2 = document.getElementById("overlay2");
var img3 = document.getElementById("overlay3");
var img4 = document.getElementById("overlay4");
var img5 = document.getElementById("overlay5");
var img6 = document.getElementById("overlay6");
var img7 = document.getElementById("overlay7");
var img8 = document.getElementById("overlay8");
var img9 = document.getElementById("overlay9");
var img10 = document.getElementById("overlay10");

// Get the modal
var myModal = document.getElementById("myModal");

// Get the modal content
var myContent = document.getElementById("myContent");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, display modal & open src html
img1.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image01.html"; }

img2.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image02.html"; }

img3.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image03.html"; }

img1.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image01.html"; }

img4.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image04.html"; }

img5.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image05.html"; }

img6.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image06.html"; }

img7.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image07.html"; }

img8.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image08.html"; }

img9.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image09.html"; }

img10.onclick = function(){
  myModal.style.display = "block";
  myContent.src = "image10.html"; }

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  myModal.style.display = "none";
}

