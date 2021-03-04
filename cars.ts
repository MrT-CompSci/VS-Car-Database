class Car {

    // fields  
      model: String;  
      doors: Number;  
      isElectric: Boolean;
      colour: String;
    
    constructor(model: String, doors: Number, isElectric: Boolean,colour: String) {  
        this.model = model;  
        this.doors = doors;  
        this.isElectric = isElectric;  
        this.colour = colour;
      }
    
    displayMake(): void {  
        console.log(`This car is ${this.model}`);  
      
      }
    
    displayDoors(): void{
        console.log(`The ${this.model} has ${this.doors} doors.`);
    }
    displayPower(): void{
      if(this.isElectric)
      {
        console.log(`The ${this.model} is an electric car.`)
      
      }
      else
      {
        console.log(`The ${this.model} is not an electric vehicle.`);
      }
    }
    
    displayColour(): void{
    console.log(`The ${this.model} is ${this.colour}`)
    }
    
    }
    const Prius = new Car('Prius',4,true,'Pink');
    const Banger = new Car('Banger',3,false,'Blue');
    const Clown = new Car('Sloppy',4,true,'Yellow');
    
    Prius.displayMake();
    Prius.displayDoors();
    Prius.displayPower();
    
    Banger.displayPower();
    Banger.displayDoors();
    Banger.displayColour();
    
    Clown.displayColour();
    Clown.displayDoors();
    
    let myArray = [Prius,Banger,Clown];
    
    for (var item of myArray) 
    {
      console.log(item.colour)
    }
    