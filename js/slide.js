var slideIndex = 1;
var slide_index_auto = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if(n > x.length) {
  	slideIndex = 1
  }    
  
  if(n < 1) {
  	slideIndex = x.length
  }
  
  for(i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  
  x[slideIndex-1].style.display = "block";  
}

function auto_slide() {
	var i;
	var x = document.getElementsByClassName("mySlides");
  
  for(i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
  }

  slide_index_auto++;
  if(slide_index_auto > x.length) {
  	slide_index_auto = 1
  }
  x[slide_index_auto-1].style.display = "block"; 
  setTimeout(auto_slide, 4000);
}

auto_slide();