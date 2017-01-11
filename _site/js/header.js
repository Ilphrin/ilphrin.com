(function() {
  'use-strict';
  
  var header = document.querySelector(".header");
  var header_style = window.getComputedStyle(header);
  var headerCursor = document.querySelector(".headerCursor");
  var headerCursorImg = headerCursor.children[0];
  var mq = window.matchMedia("(max-width: 590px;)");
  headerCursor.addEventListener('click', function(){
    if (header_style.getPropertyValue("margin-top") == "-82px") {
      headerCursorImg.style.transform = "rotateZ(0deg)";
      window.setTimeout(function() {
        header.style.marginTop = "0px";
        headerCursor.style.top = "74px";
      }, 200);
    }
    else {
      headerCursorImg.style.transform = "rotateZ(180deg)";
      window.setTimeout(function() {
        header.style.marginTop = "-82px";
        if (!mq.matches) {
          headerCursor.style.top = "-9px";
        }
      }, 200);
    }
  });
}());
