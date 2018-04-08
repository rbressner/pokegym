
class Pokemon{
    constructor(name,hp,attack,defense,abilities=[]){
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
        this.name = name
    }

    addAbility(ability){
        this.abilities.push(ability)
    }
}

class MingKinhal{
    constructor(){
        this.pokemon = []
    }

    all(){
        return this.pokemon
    }

    add(poke){
        this.pokemon.push(poke)
    }

    get(name){
        for(let i = 0; i < this.pokemon.length; i++){
            if(name == this.pokemon[i].name){
                return this.pokemon[i]
            }
        }
    }

}

let minhal = new MingKinhal()
//https://pokeapi.co/api/v2/pokemon/65/
axios.get("https://raw.githubusercontent.com/mag166/personalPokedex/master/alakazamJSON.json")
.then((response) => {


    let alakazam = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
        alakazam.addAbility(item.ability.name)
        
        abilities.innerHTML += item.ability.name +"<br>"
    })

    minhal.add(alakazam)


}).catch((error) => {
    console.log(error)
  })
//https://pokeapi.co/api/v2/pokemon/493/
  axios.get("https://raw.githubusercontent.com/mag166/personalPokedex/master/arceusJSON.json")
.then((response) => {


    let arceus = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
        arceus.addAbility(item.ability.name)
        abilities.innerHTML += item.ability.name +"<br>"
    })


    minhal.add(arceus)


}).catch((error) => {
    console.log(error)
  })

//https://pokeapi.co/api/v2/pokemon/68/
  axios.get("https://raw.githubusercontent.com/mag166/personalPokedex/master/machampJSON.json")
  .then((response) => {
      let data = response.data
      let hp = document.getElementById("machamp-hp")
      let attack = document.getElementById("machamp-attack")
      let defense = document.getElementById("machamp-defense")
      let abilities = document.getElementById("machamp-abilities")


      let machamp = new Pokemon(
          data.name,
          data.stats[5].base_stat,
          data.stats[4].base_stat,
          data.stats[3].base_stat,
      )

      data.abilities.forEach((item) => {
          machamp.addAbility(item.ability.name)
          abilities.innerHTML += item.ability.name +"<br>"
      })


      minhal.add(machamp)
      hp.innerHTML = machamp.hp
      attack.innerHTML = machamp.attack
      defense.innerHTML = machamp.defense

      console.log(minhal.get("machamp"))


  }).catch((error) => {
      console.log(error)
    })

    console.log(minhal.get("machamp"))




   