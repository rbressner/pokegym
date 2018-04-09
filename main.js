callAxiosMinhal(function(Minhal) {
    console.log(Minhal.pokemon)
    //Alakazam
    let li = document.createElement("li")
    let alakazamPanel = document.getElementById("alakazam")
    let alakazam = Minhal.get("alakazam")
    li.innerHTML = "<p>HP: " + alakazam.hp + "</p> <p>Attack: " + alakazam.attack +
    "</p> <p>Defense: " + alakazam.defense + "</p>"
    
    li.innerHTML += "<p>Abilities:"
    alakazam.abilities.forEach(item => {

   li.innerHTML += item + "/ "
   })
    li.innerHTML += "</p>"
    alakazamPanel.appendChild(li)

    //Arceus
    let li = document.createElement("li")
    let arceusPanel = document.getElementById("arceus")
    let arceus = Minhal.get("arceus")

     //Machamp
     let li = document.createElement("li")
     let machampPanel = document.getElementById("machamp")
     let machamp = Minhal.get("machamp")


 


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
