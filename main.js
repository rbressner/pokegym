callAxiosMinhal(function(Minhal) {
    console.log(Minhal.pokemon)
    //Alakazam
    let li1 = document.createElement("li")
    let alakazamPanel = document.getElementById("alakazam")
    let alakazam = Minhal.get("alakazam")
    li1.innerHTML = "<p>HP: " + alakazam.hp + "</p> <p>Attack: " + alakazam.attack +
    "</p> <p>Defense: " + alakazam.defense + "</p>"

    li1.innerHTML += "<p>Abilities:"
    alakazam.abilities.forEach(item => {

   li1.innerHTML += item + " / "
   })
    li1.innerHTML += "</p>"
    alakazamPanel.appendChild(li1)

    //Arceus
    let li2 = document.createElement("li")
    let arceusPanel = document.getElementById("arceus")
    let arceus = Minhal.get("arceus")
    li2.innerHTML = "<p>HP: " + arceus.hp + "</p> <p>Attack: " + arceus.attack +
    "</p> <p>Defense: " + arceus.defense + "</p>"
    
    li2.innerHTML += "<p>Abilities:"
    arceus.abilities.forEach(item => {

   li2.innerHTML += item + " / "
   })
    li2.innerHTML += "</p>"
    arceusPanel.appendChild(li1)

     //Machamp
     let li3 = document.createElement("li")
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
