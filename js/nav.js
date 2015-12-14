function contact_popup(nyah) {
  var plop = document.querySelector('body');
  var child = document.querySelector('.contact_pop');
  var width = child.children[0].offsetWidth;
  if (getComputedStyle(child).marginLeft === "-" + width + "px") {
    child.style.marginLeft = "0px";
  }
  else
  {
    child.style.marginLeft = "-" + width + "px";
  }
}
