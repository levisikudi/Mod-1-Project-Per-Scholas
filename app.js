//make a class that creates ships
let startButton = document.querySelector(".start-button")
let everything = document.querySelector(".everything")
let reset = document.querySelector(".reset")
let resultMessage = document.getElementById('result-message')

const updateStat = () =>{
    myhull.textContent = "Hull: " + myShip.hull;
    myfire.textContent = "Firepower: " + myShip.firepower;
    myAccuracy.textContent = "Accuracy: " + myShip.accuracy;

    
    enemyShips.ships.forEach((ship,i) => {
        enemyhull[i].textContent = "Hull: " + ship.hull
        enemyfire[i].textContent = "Firepower: " + ship.firepower
        enemyaccuracy[i].textContent = "Accuracy: " + ship.accuracy
    });
    
    
}





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
            //update stats
            updateStat()
            console.log(this.name + " HAS BEEN HIT");
            console.log(this.hull + " is the hull of " + this.name);
            
        } else if ((Math.random() * 0.2 + 0.6).toFixed(1) < this.accuracy){
            //subtract points from my hull
            myShip.hull -= this.firepower
            this.accuracy -= 0.025
            // update stats
            updateStat()
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

const startGame = () =>{
    startButton.classList.add("hidden")
    everything.classList.remove("hidden")
    updateStat()
    setTimeout(() => {
        let value = prompt("Press any lettered key to start")
    if(!value ==""){
        battle()
    } else (
        alert("invalid text")
    )
    }, 2000);

    


 }

 const reload = () =>{
    location.reload()
 }

const gameReset = () =>{
    reset.classList.remove('hidden')
    everything.classList.add('hidden')
    everything.classList.remove('everything')
    
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
let enemyhull = document.querySelectorAll('.hull')
let enemyfire = document.querySelectorAll('.fire')
let enemyaccuracy = document.querySelectorAll('.accuracy')

let myhull = document.getElementById('myHull')
let myfire = document.getElementById('myfire')
let myAccuracy = document.getElementById('myAccuracy')



console.log(enemyhull);

let eachEnShip = enemyShips.ships
const timer = ms => new Promise(res => setTimeout(res, ms))
const battle =  async () => {
    // set each ship's properties
    let lose = 0
    let eachEnShip = enemyShips.ships

    for (let i = 0; 0 < eachEnShip.length; i++) {
        

       
            while (eachEnShip[i].hull >= 0) {
                if (myShip.hull <= 0) {
                  console.log(" THE USS HAS BEEN COMPLETELY AND UTTERLY DESTROYED")
                  lose += 1
                  break
                }
                
                  eachEnShip[i].attackShip()
                 
                  console.log(eachEnShip[i])
                  
              }
       
              await timer(3000);
        

    }





    // enemyShips.ships.forEach( (ship) => {
        
        
        
    //   })
    //   if(lose > 0){
    //     resultMessage.textContent= "YOU LOST"
    //     gameReset()
    //     console.log("you lost");
    //   } else{
    //     resultMessage.textContent= "YOU WON"
    //     gameReset()
    //     console.log("you won");
    //   }
}












// if (win){
//     gameReset()
// } else{
//     gameReset()
//     resultMessage.textContent = "YOU WIN!"

// }




