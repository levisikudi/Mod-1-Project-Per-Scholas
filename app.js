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

let enemyShips = new Fleet("Enemy Ships");
enemyShips.addShip("Ship 1")
enemyShips.addShip("Ship 2")
enemyShips.addShip("Ship 3")
enemyShips.addShip("Ship 4")
enemyShips.addShip("Ship 5")
enemyShips.addShip("Ship 6")

console.log(enemyShips);




