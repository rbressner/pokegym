callAxiosMinhal(function(Minhal) {
    console.log(Minhal.pokemon)
  })

  callAxiosRachel(function(Rachel) {
    console.log(Rachel.all)
  })





// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }
