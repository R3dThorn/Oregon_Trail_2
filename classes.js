class Traveler {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt(){
        return this.food += 2
    }
    eat(){
        if(this.food <= 0){
            this.food = 0
            this.isHealthy = false
        } else { 
            this.food--
            this.isHealthy = true
        }
        return this.name + " has eaten."
    }
}

class Doctor extends Traveler{
    constructor (name, food, isHealthy){
        super(name, food, isHealthy)
    }
    heal(traveler){
        return traveler.isHealthy = true
    }
}
class Hunter extends Traveler{
    constructor(name, isHealthy, food = 2){
        super(name, isHealthy)
        this.food = food
    }
    hunt(){
        return this.food += 5
    }
    eat(){
        if(this.food < 2){
            this.food = 0
            this.isHealthy = false
        } else {
        this.food -= 2
        }
        return this.food
    }
    giveFood(traveler, numOfFoodUnits){
        if(this.food - numOfFoodUnits > 0){
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        } else {
            return "Not enough food to transfer."
        }
    }
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