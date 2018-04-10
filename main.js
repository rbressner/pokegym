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
    arceusPanel.appendChild(li2)

     //Machamp
     let li3 = document.createElement("li")
     let machampPanel = document.getElementById("machamp")
     let machamp = Minhal.get("machamp")
    li3.innerHTML = "<p>HP: " + machamp.hp + "</p> <p>Attack: " + machamp.attack +
    "</p> <p>Defense: " + machamp.defense + "</p>"

    li3.innerHTML += "<p>Abilities:"
    machamp.abilities.forEach(item => {

   li3.innerHTML += item + " / "
   })
    li3.innerHTML += "</p>"
    machampPanel.appendChild(li3)





  })

     callAxiosRachel(function(Rachel) {
      console.log(Rachel.all)
           //Diglett
           let li4 = document.createElement("li")
           let diglettPanel = document.getElementById("diglett")
           let diglett = Rachel.get("diglett")
          li4.innerHTML = "<p>HP: " + diglett.hp + "</p> <p>Attack: " + diglett.attack +
          "</p> <p>Defense: " + diglett.defense + "</p>"
  
          li4.innerHTML += "<p>Abilities:"
          diglett.abilities.forEach(item => {
  
         li4.innerHTML += item + " / "
         })
          li4.innerHTML += "</p>"
          diglettPanel.appendChild(li4)
  
           //Ditto
           let li5 = document.createElement("li")
           let dittoPanel = document.getElementById("ditto")
           let ditto = Rachel.get("ditto")
          li5.innerHTML = "<p>HP: " + ditto.hp + "</p> <p>Attack: " + ditto.attack +
          "</p> <p>Defense: " + ditto.defense + "</p>"

          li5.innerHTML += "<p>Abilities:"
          ditto.abilities.forEach(item => {

         li5.innerHTML += item + " / "
         })
          li5.innerHTML += "</p>"
          dittoPanel.appendChild(li5)

           //Chikorita
           let li6 = document.createElement("li")
           let chikoritaPanel = document.getElementById("chikorita")
           let chikorita = Rachel.get("chikorita")
          li6.innerHTML = "<p>HP: " + chikorita.hp + "</p> <p>Attack: " + chikorita.attack +
          "</p> <p>Defense: " + chikorita.defense + "</p>"

          li6.innerHTML += "<p>Abilities:"
          chikorita.abilities.forEach(item => {

         li6.innerHTML += item + " / "
         })
          li6.innerHTML += "</p>"
          chikoritaPanel.appendChild(li6)
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
