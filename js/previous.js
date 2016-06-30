function see_previous() {
  var previous = document.querySelector(".previously");
  var previous_style = window.getComputedStyle(previous);
  if (previous_style.getPropertyValue("display") == "none") {
    previous.style.display = "block";
  }
  else {
    previous.style.display = "none";
  }
}
