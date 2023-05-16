function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}
