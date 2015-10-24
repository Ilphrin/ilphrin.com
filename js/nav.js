function contact_popup(nyah) {
  var plop = document.querySelector('body');
  var child = document.querySelector('.contact_pop');
  if (getComputedStyle(child).marginLeft === "-350px") {
    child.style.marginLeft = "0px";
  }
  else
  {
    child.style.marginLeft = "-350px";
  }
}
