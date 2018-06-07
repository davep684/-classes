// exercise 1 

// function Automobile(){
//     this.wheels = wheels
//     this.setColor = (color)=> {
//         this.Color = color
//    }
//    this.getColor = ()=>{
//     return this.color
//  }
// }
// function Motorcycle (make,model,year){
// this.make = make 
// this.model = model 
// this = year 
// }

// Motorcycle.prototype = new Automobile(2)

// function Sedan(make,model,year){
//     this.make = make 
//     this.model = model 
//     this.year = year 
//     this.doors = 4 

// }
// Sedan.prototype = new Automobile(4)



// Camery.prototype = new Sedan("Toyota","camery",2002)

// var toyota = new camery()
// console.log(toyota.wheels)
// console.log(toyota.doors)
// toyota.year = 2010

// console.log (toyota.year)
class Automobile{
    constuctor(wheels){
        this.wheels = wheels
    }
    setColor(color){
        this.color = color 
    }
    getColor(color){
        return this.color
    }
}

class Motorcycle extends Automobile{
    constructor(make,model,year){
        super(2)
        this.make = make 
        this.model = model 
        this.year = year
    }
}