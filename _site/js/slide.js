/* jshint esnext:true */
(function() {
  'use-strict';
  function putInSlide(element) {
    var RATIO = 90 / 100;
    var slide = document.querySelector("." + element);
    var listOfImages = [];
    var listOfTexts = [];
    var currentImage = 0;
    var WIDTH = window.getComputedStyle(slide).getPropertyValue('width');
    var HEIGHT = window.getComputedStyle(slide).getPropertyValue('height');

    slide.style.width = WIDTH + "px";
    WIDTH = slide.offsetWidth;
    slide.style.height = HEIGHT + "px";
    HEIGHT = slide.offsetHeight;
    slide.style.position = "relative";

    for (var i of slide.children) {
      i.style.width = WIDTH * RATIO + "px";
      i.style.position = "absolute";
      i.style.left = (WIDTH - i.offsetWidth) / 2 + "px";
      if (i.localName === "img") {
        i.style.height = HEIGHT * RATIO + "px";
        i.style.top = (HEIGHT - i.offsetHeight) / 2 + "px";
        listOfImages.push(i);
      }
      else if (i.localName === "p") {
        i.style.height = HEIGHT / 3 + "px";
        i.style.bottom = "0px";
        i.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        i.style.color = "white";
        i.style.zindex = "1";
        i.classList.add("arrivingSlide");
        listOfTexts.push(i);
      }
    }

    while (slide.firstChild) {
      slide.removeChild(slide.firstChild);
    }

    var left = createArrow("left.png", -1);
    var right = createArrow("right.png", 1);
    var beginText = document.createElement("div");
    beginText.style.width = "100%";
    beginText.style.height = HEIGHT / 2;

    slide.appendChild(left);
    slide.appendChild(right);
    function loadCurrentSlide() {
      for (var child in slide.children) {
        if (child.localName === "img") {
          slide.removeChild(child);
          break;
        }
      }
      slide.appendChild(listOfImages[currentImage]);
      slide.appendChild(listOfTexts[currentImage]);
    }

    function createArrow (image, direction) {
      var arrow = document.createElement('div');
      var OFFSET = (slide.offsetWidth * 10 / 100) / 2 + "px";

      arrow.className = arrow.className + " slideArrow";
      arrow.style.backgroundImage = "url('/images/" + image + "')";
      arrow.style.width = "50px";
      arrow.style.height = "50px";
      arrow.style.position = "absolute";
      arrow.style.top = HEIGHT / 3 - 20 + "px";
      if (direction === 1)
        arrow.style.right = OFFSET;
      else if (direction === -1)
        arrow.style.left = OFFSET;
      arrow.style.zIndex = "1";

      arrow.addEventListener("click", function () {
        var ok = 1;
        if (direction === 1) {
          if (currentImage + 1 < listOfImages.length) {
            currentImage++;
          }
          else
            ok = 0;
        }
        else if (direction === -1) {
          if (currentImage > 0) {
            currentImage--;
          }
          else
            ok = 0;
        }
        if (ok)
          loadCurrentSlide();
      }, false);

      return (arrow);
    }
    loadCurrentSlide();
  }

  putInSlide("slided");
}());
