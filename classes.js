/* class Dog {
    constructor (name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = Boolean("of course")
    }
    sit () {
        // stuff
    }
    fetch () {
        // stuff
    }
} */
class Traveler {
    constructor (name, HP){
        this.name = name
        this.food = 1
        //this.hitPoints = HP
        //this.isHungry = false
        this.isHealthy = true
    }
    hunt(){
        /*  if(Math.round(Math.random()*100) > 70){
            this.isHungry = true
            alert(this.name + " is hungry!")
        }
        this.damage()  */
        return this.food += 2
    }
    eat(){
        /* if(this.isHungry === false){
            return "No need to eat."
        } else */if(this.food <= 0){
            this.food = 0
            this.isHealthy = false
            //this.damage()
        } else { 
            this.food--
            this.isHealthy = true
            //this.isHungry = false
            //this.recover()
        }
        return this.name + " has eaten."      //this.name + ": " + this.isHungry
    }
    /* damage (){
        if(this.isHealthy === false){
            this.hitPoints--
            alert("You are slowly losing life! Eat something, quick!")
        }
    }
    recover (){
        if(this.hitPoints < 10){
            this.hitPoints++
        }
    } */
}
class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }
    join (traveler) {
        if (this.passengers.length == this.capacity){return "This wagon is too full!"}
        else{this.passengers.push(traveler)}
    }
    shouldQuarantine(){
        if(this.passengers.find(x => x.isHealthy === false)){
            return true
        }
        return false
    }
    totalFood(){
        let total = 0
        this.passengers.forEach(x => total += x.food)
        return total
    }
}