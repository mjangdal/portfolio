function checkForVisibility() {
  var rightBox = document.querySelectorAll(".right-animation");
  var boxLeft = document.querySelectorAll(".left-animation");

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
}
