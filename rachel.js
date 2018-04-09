// diglett https://pokeapi.co/api/v2/pokemon/50/
// ditto https://pokeapi.co/api/v2/pokemon/132/
// chikorita https://pokeapi.co/api/v2/pokemon/152/



class PokemonAll {
  constructor() {
    this.all = []
  }

  add(pokemon){
    this.all.push(pokemon)
  }

  get(name) {
    for (let i = 0; i < this.all.length; i++) {
        if (name == this.all[i].name) {
            return this.all[i]
        }
    }
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
