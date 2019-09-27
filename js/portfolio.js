function checkForVisibility() {
  var rightBox = document.querySelectorAll(".right-animation");
  var boxLeft = document.querySelectorAll(".left-animation");
  var topbox = document.querySelectorAll(".top-animation");
  var lightbox = document.querySelectorAll(".mySlides");

  topbox.forEach(function(top, lightbox){
    if (isElementInViewport(top)){
        top.classList.add("popin" );

    }
    else{
        top.classList.remove("popin");
        document.querySelector(".mySlides").classList.remove("lightbox");
    }
  });

  rightBox.forEach(function(right) {
    if (isElementInViewport(right)) {
      right.classList.add("visible");
    } else {
      right.classList.remove("visible");

    }
  });
  boxLeft.forEach(function(boxLeft) {
    if (isElementInViewport(boxLeft)) {
      boxLeft.classList.add("visible");
    } else {
      boxLeft.classList.remove("visible");
    }
  });
}


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -100 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 100
  );
}

if (window.addEventListener) {
  addEventListener("scroll", checkForVisibility, false);
  addEventListener("load", document.querySelector(".top-animation").classList.add("popin"))
}

function gallery(i){
/*     document.getElementById("overlay").classList.add("overlay")
 */    document.getElementById(i).classList.add("lightbox");
    
}

  