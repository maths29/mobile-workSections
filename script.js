
function myFunction() {
    // var y = document.getElementById("open");
    // if (y.className === "fa fa-bars") {
    //     y.className = "fa fa-close";
    //   }else{
    //     y.className = "fa fa-bars";
    //   }
  
      var x = document.getElementById("mobile-nav");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
  
     
  }
  function closeFun(){
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.style.display = "none";
    }