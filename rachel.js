// diglett https://pokeapi.co/api/v2/pokemon/50/
// ditto https://pokeapi.co/api/v2/pokemon/132/
// chikorita https://pokeapi.co/api/v2/pokemon/152/

// Cards Entering via Pokeball Button + Pokeball/Title disappearing
let cards = document.getElementById("cardsinfo")
let ball = document.getElementById("pokeball")
let head = document.getElementById("header")
function showCards() {
  if (cards.style.visibility === "visible") {
    cards.style.visibility = "hidden"
    ball.style.visibility = "visible"
    head.style.visibility = "visible"
  } else {
    cards.style.visibility = "visible"
    ball.style.visibility = "hidden"
    head.style.visibility = "hidden"
  }
}
window.addEventListener('click', (clickEvent) => {
  cards.classList.add("show")
})

let cardback = document.getElementById("card1")
let cardback1 = document.getElementById("card2")
let cardback2 = document.getElementById("card3")
function cardflip() {
  window.addEventListener('click', (clickEvent) => {
    cardback.classList.add("flip")

  })
}
  function cardflip1() {
  window.addEventListener('click', (clickEvent) => {
    cardback1.classList.add("flip1")

  })
}
  function cardflip2() {
  window.addEventListener('click', (clickEvent) => {
    cardback2.classList.add("flip2")

  })
}




// class to define singular pokemon (individual class)
class PokemonAll {
  constructor() {
    this.all = []
  }

  class Rachel {
    constructor(hp, attack, defense, abilities) {
        this.hp = hp.toString()
        this.attack = attack.toString()
        this.defense = defense.toString()
        this.abilities = abilities
      }
  }

}


// Diglett
axios.get("https://pokeapi.co/api/v2/pokemon/50/")
.then((response) => {
  let data = response.data
    let ul = document.getElementById("diggletstuff")
      let li = document.createElement("li")

      li.setAttribute("id", "diglettnames")


      let diglett = new Rachel(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities
      )

      console.log(diglett.hp)

      li.innerHTML = "<div class='hp'><p><strong>HP</strong>: " + diglett.hp + "/255</p></div>" +
      "<p class='diname'><strong>Diglett</strong></p>" +
      "<p><strong>Attack</strong>: " + diglett.attack + "/255</p>" +
      "<p><strong>Defense</strong>: " + diglett.defense + "/255</p>"
       + "<p><strong>Abilities</strong>:</p>"
      data.abilities.forEach(item => {


     li.innerHTML += " " + item.ability.name + "/ "

     ul.appendChild(li)
   })

})
.catch((error) => {
  console.log(error)
})

// Ditto
axios.get("https://pokeapi.co/api/v2/pokemon/132/")
.then((response) => {
  let data = response.data
    let ul = document.getElementById("dittostuff")
      let li = document.createElement("li")

      li.setAttribute("id", "dittonames")


      let ditto = new Rachel(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities
      )

      li.innerHTML = "<div class='hp'><p><strong>HP</strong>: " + ditto.hp + "/255</p></div>" +
      "<p class='diname'><strong>Ditto</strong></p>" +
      "<p><strong>Attack</strong>: " + ditto.attack + "/255</p>" +
      "<p><strong>Defense</strong>: " + ditto.defense + "/255</p>"
       + "<p><strong>Abilities</strong>:</p>"
      data.abilities.forEach(item => {

     li.innerHTML += item.ability.name + "/ "

     ul.appendChild(li)
   })

})
.catch((error) => {
  console.log(error)
})

// Chikorita
axios.get("https://pokeapi.co/api/v2/pokemon/152/")
.then((response) => {
  let data = response.data
    let ul = document.getElementById("chikoritastuff")
      let li = document.createElement("li")

      li.setAttribute("id", "chikoritanames")


      let chikorita = new Rachel(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities
      )

      li.innerHTML = "<div class='hp'><p><strong>HP</strong>: " + chikorita.hp + "/255</p></div>" +
      "<p class='diname'><strong>Chikorita</strong></p>" +
      "<p><strong>Attack</strong>: " + chikorita.attack + "/255</p>" +
      "<p><strong>Defense</strong>: " + chikorita.defense + "/255</p>"
       + "<p><strong>Abilities</strong>:</p>"
      data.abilities.forEach(item => {

     li.innerHTML += item.ability.name + "/ "

     ul.appendChild(li)
   })

})
.catch((error) => {
  console.log(error)
})
