// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the image thumbnail that opens the modal
// Get the iframe that is included in modal
// When the user clicks on the image thumbnail, open the modal 
// and present changed  source for iframe to externam html

document.getElementById("myThumbImg1").onclick = function(){
  modal.style.display = "block";
  document.getElementById("myIframe").src="image01.html";}

document.getElementById("myThumbImg2").onclick = function(){
    modal.style.display = "block";
    document.getElementById("myIframe").src="image02.html";}

document.getElementById("myThumbImg3").onclick = function(){
  modal.style.display = "block";
  document.getElementById("myIframe").src="image03.html";}

document.getElementById("myThumbImg4").onclick = function(){
    modal.style.display = "block";
    document.getElementById("myIframe").src="image04.html";}

document.getElementById("myThumbImg5").onclick = function(){
  modal.style.display = "block";
  document.getElementById("myIframe").src="image05.html";}

document.getElementById("myThumbImg6").onclick = function(){
    modal.style.display = "block";
    document.getElementById("myIframe").src="image06.html";}

document.getElementById("myThumbImg7").onclick = function(){
  modal.style.display = "block";
  document.getElementById("myIframe").src="image07.html";}

document.getElementById("myThumbImg8").onclick = function(){
    modal.style.display = "block";
    document.getElementById("myIframe").src="image08.html";}

document.getElementById("myThumbImg9").onclick = function(){
  modal.style.display = "block";
  document.getElementById("myIframe").src="image07.html";}

document.getElementById("myThumbImg10").onclick = function(){
    modal.style.display = "block";
    document.getElementById("myIframe").src="image10.html";}