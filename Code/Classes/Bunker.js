class Bunker{
  constructor(newPos, newTeam){
    this.pos = newPos;
    this.health = 10000;
    this.troops = [];
    this.team = newTeam;
    this.money = 0;
    this.moneyPerRound = 100;
    this.troopsAvailable = troopLimit;
  }
  
  buyTroop(troop){
    if(this.money >= troop.price && this.troopsAvailable >= troop.troopCost){
      this.money -= troop.price;
      this.moneyPerRound += troop.income;
      this.troopsAvailable -= troop.troopCost;
      this.troops.push(troop);
    }
  }
  
  getArmySize(){
    let size = 0;
    for (let i in this.troops){
      size += this.troops[i].troopCost;
    }
    return size;
  }
  
  update(){
    if(frameCount % (60*0.1) == 0){
      //let nextTroop = new Swordsman(createVector(this.pos.x, random(-75,75) + this.pos.y), this.team);
      let nextTroop = new Infantry(createVector(this.pos.x, random(-75,75) + this.pos.y), this.team);
      this.buyTroop(nextTroop);
    }
    
    for(let i in this.troops){
      this.troops[i].update();
      if(this.troops[i].health <= 0){
        
        for (let j = 0; j < mapWidth; j += bgRes){
          for (let k = 0; k < mapHeight; k += bgRes){
            if(this.troops[i].pos.dist(createVector(j + bgRes/2, k + bgRes/2)) < this.troops[i].size + 25){
              let randBrown = [random(80, 130), random(60, 100), random(20, 60)];
              for(let l in randBrown){
                randColours[j/bgRes][k/bgRes][l] *= 9;
                randColours[j/bgRes][k/bgRes][l] += randBrown[l];
                randColours[j/bgRes][k/bgRes][l] *= 0.1;
              }
              
            }
          }
        }
        
        this.troops.splice(i, 1);
        i--;
      }
    }
  }
  
  display(){
    push();
    
    for(let i in this.troops){
      this.troops[i].display();
    }
    
    fill(10,50,0);
    rect(this.pos.x - 100, this.pos.y - 100, 200, 200);
    
    
    pop();
  }
  
}