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


class PokemonAll {
  constructor() {
    this.all = []
  }

  add(pokemon){
    this.all.push(pokemon)
  }
}
  class Rachel {
    constructor(name, hp, attack, defense, abilities = []) {
        this.name = name.toString()
        this.hp = hp.toString()
        this.attack = attack.toString()
        this.defense = defense.toString()
        this.abilities = abilities
      }
  }



  let allPokemon = new PokemonAll()

    function callAxiosRachel(callback) {
      let url1 = "https://pokeapi.co/api/v2/pokemon/50/"
      let url2 = "https://pokeapi.co/api/v2/pokemon/132/"
      let url3 = "https://pokeapi.co/api/v2/pokemon/152/"

      axios.all([
          axios.get(url1),
          axios.get(url2),
          axios.get(url3)
      ])
          .then(responses => {
              responses.forEach(response => {
                  let data = response.data
                  let pokemon = new Rachel(
                      data.name,
                      data.stats[5].base_stat,
                      data.stats[4].base_stat,
                      data.stats[3].base_stat,
                  )

                  data.abilities.forEach((item) => {
                      pokemon.abilities.push(item.ability.name);
                    })

                  allPokemon.add(pokemon)
              })
              callback(allPokemon)
          })
  }
  



