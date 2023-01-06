//make a class that creates ships
class Ship{
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
//make an attack method    
    attackShip(){
        
        if(myShip.accuracy >= this.accuracy){
            console.log(myShip);
            // subtract points from alienship
            this.hull -= myShip.firepower
            console.log(this.name + " HAS BEEN HIT");
            console.log(this.hull + " is the hull of " + this.name);
            
        } else if ((Math.random() * 0.2 + 0.6).toFixed(1) < this.accuracy){
            //subtract points from my hull
            myShip.hull -= this.firepower
            this.accuracy -= 0.025
            console.log("USS HAS BEEN HIT");
            console.log(myShip);
            
            console.log(this.hull + " is the hull of " + this.name);
        }  
    }
}



let myShip = new Ship("USS HelloWorld", 20, 5,0.7)
console.log(myShip);

//make a factory which holds alien ships
class Fleet{
    constructor(className){
        this.className = className;
        this.ships = [];
    }
// make a method that has the ability to add ships within the factory array
    addShip(name){
        let hull = Math.floor(Math.random()*4 + 3)
        let firepower = Math.floor(Math.random()*3 + 2)
        let accuracy = (Math.random()*0.2 + 0.6).toFixed(1)

        let newShip = new Ship(name, hull, firepower, accuracy)
        this.ships.push(newShip);
    }
}

// make a retreat function


let enemyShips = new Fleet("Enemy Ships");
enemyShips.addShip("Ship 1")
enemyShips.addShip("Ship 2")
enemyShips.addShip("Ship 3")
enemyShips.addShip("Ship 4")
enemyShips.addShip("Ship 5")
enemyShips.addShip("Ship 6")

console.log(enemyShips);

// make a start game function 
const battle = () =>{

    

    
    // set each ship's properties
    


    enemyShips.ships.forEach(ship => {
        while (ship.hull >= 0) {
            let i = 0;
          if (myShip.hull <= 0) {
            console.log(" THE USS HAS BEEN COMPLETELY AND UTTERLY DESTROYED")
            
            break
          }
          ship.attackShip()
          console.log(ship)
          if (ship.hull <= 0) { break }
          //update ship[i]'s stats
        }
      })


}

const reset = () =>{
    //create an array that holds each hull attribute. Set to 0
    let arr = []


    // for each hull, update its value to its correspondin js number
    

    let alienhull3 = document.getElementById("hull3")
    alienhull3.textContent = enemyShips.ships[2].hull
}
reset()

   

//make a new game function







  
    // set a variable that keeps count of my hitpoints
    // create a while loop that iterates over the alien ships as long as my hitpoints are above 0. If they go below zero, break and make it game over
    // create a for each loop
    // attack each ship until the hitpoints are 0
    // update the hitpoint variable
  