




function checkForVisibility() {
  var rightBox = document.querySelectorAll(".right");
  var boxLeft = document.querySelectorAll(".left");
  let slide = document.querySelectorAll(".ti-table");
  var tiHeader = document.querySelector(".ti-table-header");

  rightBox.forEach(function(right) {
    if (isElementInViewport(right)) {
      right.classList.add("visible")
    }else {
      right.classList.remove("visible");
    }
  });
  boxLeft.forEach(function(boxLeft) {
    if (isElementInViewport(boxLeft)) {
      boxLeft.classList.add("visible")
    }else {
      boxLeft.classList.remove("visible");
    }
  });


  
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -500 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 300 
  );
}

if (window.addEventListener) {
  addEventListener('scroll', checkForVisibility,false)
}





