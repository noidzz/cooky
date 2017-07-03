 $(function(){

  jQuery('ul.navbar-nav li.dropdown').hover(function() {
 jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});




$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
})  
 
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
  setTimeout(auto_slide, 3000);
}

auto_slide();