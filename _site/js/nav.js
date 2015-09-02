function contact_popup(nyah) {
  var plop = document.querySelector('body');
  var child = document.querySelector('.contact');
  if (getComputedStyle(child).right === "-500px") {
    child.style.right = "0px";
  }
  else
  {
    child.style.right = "-500px";
  }
}
