//make a class that creates ships
let startButton = document.querySelector(".start-button")
let everything = document.querySelector(".everything")
let reset = document.querySelector(".reset")
let resultMessage = document.getElementById('result-message')
let reReset = document.getElementById('re-reset')

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
            updateStat()
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
    reReset.classList.remove('hidden')
    reReset.style.margin = "0 auto"
    reReset.style.padding = "auto"
    
    setTimeout(() => {
        let value = prompt("Press any lettered key to start")
    if(!value ==""){
        
        battle()
    } else (
        alert("Invalid text. Kindly Reset")
    )
    }, 2000);
    updateStat()
 }

 const reload = () =>{
    location.reload()
 }

const gameReset = () =>{
    reset.classList.remove('hidden')
    everything.classList.add('hidden')
    everything.classList.remove
    ('everything')
    reReset.classList.add('hidden')
    
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

let enemyShipImg = document.querySelectorAll('.enemy_img')



console.log(enemyhull);


const timer = ms => new Promise(res => setTimeout(res, ms))

const battle =  async () => {
    // set each ship's properties
    let lose = 0
    let eachEnShip = enemyShips.ships
    
    

    for (let i = 0; 0 < eachEnShip.length - 1; i++) {
        
        console.log("LOSE : "+lose)
        counter = 0;
        if(!lose){
            let value = prompt("Do you wish to battle the next ship?","Press 'y' to continue and any other key to abort")
            if(!value.toLowerCase == "y" ){
                reload()
            }
            counter++
          }
         
        
        while(eachEnShip[i].hull > 0){
            if (enemyShips.ships[5] < 0){
                gameReset()
                resultMessage.textContent = "YOU WIN!"
            }
                if (myShip.hull <= 0) {
                  console.log(" THE USS HAS BEEN COMPLETELY AND UTTERLY DESTROYED")
                  lose += 1
                  gameReset()
                console.log("you lost");
                  break;
                } 
                    // attack ship
                  eachEnShip[i].attackShip()
                  console.log(eachEnShip[i])


                  // change enemy ship image
                  if(myShip.hull <= 0){break}
                  enemyShipImg[i].src = "./images/enemy_ship_dead.png"
                  if (enemyShips.ships[5] < 0){
                    gameReset()
                    resultMessage.textContent = "YOU WIN!"
                }
                  
              }

              

              
              await timer(2000);
        
    }
}














// if (win){
//    
// } else{
//     gameReset()
//     resultMessage.textContent = "YOU WIN!"

// }




