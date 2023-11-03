class herosheet{
    constructor(heroName, heroAge, heroClass){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroClass = heroClass
    }
    atacar(){
        let ataque = ""

        if(this.heroClass === "mago"){
            ataque = "magia"
        }else if(this.heroClass === "guerreiro"){
            ataque = "espada"
        }else if(this.heroClass === "monge"){
            ataque = "artes marciais"
        }else if(this.heroClass === "ninja"){
            ataque = "shuriken"
        }
        
        console.log(`O ${this.heroClass} atacou usando ${ataque}`)

    }
}

let hero = new herosheet("João", "26", "mago")

hero.atacar()