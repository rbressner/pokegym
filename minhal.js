
class PokemonMinhal {
    constructor(name, hp, attack, defense, abilities = []) {
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
        this.name = name
    }

    addAbility(ability) {
        this.abilities.push(ability)
    }
}

class MingKinhal {
    constructor() {
        this.pokemon = []
    }

    all() {
        return this.pokemon
    }

    add(poke) {
        this.pokemon.push(poke)
    }

    get(name) {
        for (let i = 0; i < this.pokemon.length; i++) {
            if (name == this.pokemon[i].name) {
                return this.pokemon[i]
            }
        }
    }

}

let minhal = new MingKinhal()

function callAxiosMinhal(callback) {
    //https://pokeapi.co/api/v2/pokemon/65/
    let url1 = "https://raw.githubusercontent.com/mag166/personalPokedex/master/alakazamJSON.json"

    //https://pokeapi.co/api/v2/pokemon/493/
    let url2 = "https://raw.githubusercontent.com/mag166/personalPokedex/master/arceusJSON.json"

    //https://pokeapi.co/api/v2/pokemon/68/
    let url3 = "https://raw.githubusercontent.com/mag166/personalPokedex/master/machampJSON.json"
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3)
    ])
        .then(responses => {
            responses.forEach(response => {
                let data = response.data
                let pokemon = new PokemonMinhal(
                    data.name,
                    data.stats[5].base_stat,
                    data.stats[4].base_stat,
                    data.stats[3].base_stat,
                )
            
                data.abilities.forEach((item) => {
                    pokemon.addAbility(item.ability.name);
                  })
            
                minhal.add(pokemon)
            })
            callback(minhal)
        })
}

