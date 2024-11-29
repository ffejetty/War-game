class Troop{
  constructor(newPos, 
              newSize, 
              newHealth, 
              newDamage, 
              newSpeed, 
              newRange, 
              newSight, 
              newAttackTime, 
              newPrice, 
              newTroopCost, 
              newIncome, 
              newTeam){


    this.pos = newPos;
    this.size = newSize;
    this.health = newHealth;
    this.maxHealth = newHealth;
    this.damage = newDamage;
    this.speed = newSpeed;
    this.range = newRange; //attack range
    this.sight = newSight; //how far it can see other troop
    this.attackTime = newAttackTime;
    this.price = newPrice;
    this.troopCost = newTroopCost; //how many troops it takes up
    this.income = newIncome;
    this.team = newTeam; //1 for p1, 2 for p2
    this.target = null; //target troop object
    this.targetTimer = 120; //counter for how long target has been aimed at without attacking
    this.attackCountdown = 0; //cooldown for attacking

    this.isMedic = false;


  }
  
  display(){
    push();
    //fill(150, 50);
    //circle(this.pos.x, this.pos.y, (this.range+this.size)*2)
    if(this.team == 1){
      fill(10,10,200);
    }else{
      fill(200,10,10);
    }
    circle(this.pos.x, this.pos.y, this.size*2);
    if(showHealth){
      fill(0);
      textAlign(CENTER, CENTER)
      text(round(this.health), this.pos.x, this.pos.y);
    }
    pop();
  }
  
  update(){
    this.attackCountdown--;
    if (this.target == null){
      switch (this.team){
        case 1:
          this.moveToward(createVector(mapWidth-150, this.pos.y));
          break;
        case 2:
          this.moveToward(createVector(150, this.pos.y));
          break;
      }
      
      this.findTarget();
      
    }else if(distSq(this.pos, this.target.pos) > Math.pow(this.range + this.size + this.target.size, 2)){
      this.moveToward(this.target.pos)
      this.targetTimer --;
      if(this.targetTimer <= 0){
        this.findTarget();
      }
    }else if(distSq(this.pos, this.target.pos) <= Math.pow(this.range + this.size + this.target.size, 2)){
      //attack enemy
      this.targetTimer = 120;
      if (this.attackCountdown <= 0){
        this.attackCountdown = this.attackTime;
        this.attack();
      }
      
      if (this.target.health <= 0){
        this.target = null;
      }
    }
  }
  
  attack(){
    this.target.health -= this.damage + random();
  }
  
  findTarget(){
    if(this.team == 1){
      for(let i in bunker2.troops){
        if(this.target == null){
          if (distSq(this.pos, bunker2.troops[i].pos) < this.sight*this.sight){
            this.target = bunker2.troops[i];
          }
        }else if(distSq(this.pos, bunker2.troops[i].pos) < distSq(this.pos, this.target.pos)){
          this.target = bunker2.troops[i];
        }
      }
    }else{
      for(let i in bunker1.troops){
        if(this.target == null){
          if (distSq(this.pos, bunker1.troops[i].pos) < this.sight*this.sight){
            this.target = bunker1.troops[i];
          }
        }else if(distSq(this.pos, bunker1.troops[i].pos) < distSq(this.pos, this.target.pos)){
          this.target = bunker1.troops[i];
        }
      }
    }
    this.targetTimer = 120;
  }
  
  moveToward(gTarget){
    let target = p5.Vector.sub(gTarget, this.pos);
    target.normalize();
    target.mult(this.speed);
    
  
    let finalPos = p5.Vector.add(this.pos, target);
    if(!this.isColliding(finalPos) && inMap(this.pos)){
      this.pos.add(target);
      return true;
    }
    for(let a = 0.1; a < PI; a += 0.1){
      finalPos = p5.Vector.add(this.pos, p5.Vector.rotate(target, a));
      if(!this.isColliding(finalPos) && inMap(this.pos)){
        this.pos.add(p5.Vector.rotate(target, a));
        return true;
      }
      finalPos = p5.Vector.add(this.pos, p5.Vector.rotate(target, -a));
      if(!this.isColliding(finalPos) && inMap(this.pos)){
        this.pos.add(p5.Vector.rotate(target, -a));
        return true;
      }
    }
    return false;
  }
  
  isColliding(pos){
    for (let i in bunker1.troops){
      let fDistToTroop = pos.dist(bunker1.troops[i].pos)
      if(fDistToTroop < this.size + bunker1.troops[i].size && fDistToTroop < this.pos.dist(bunker1.troops[i].pos) && bunker1.troops[i] != this){
        return true;
      }
    }
    for (let i in bunker2.troops){
      let fDistToTroop = pos.dist(bunker2.troops[i].pos)
      if(pos.dist(bunker2.troops[i].pos) < this.size + bunker2.troops[i].size && fDistToTroop < this.pos.dist(bunker2.troops[i].pos) && bunker2.troops[i] != this){
        return true;
      }
    }
    return false;
  }
  
  
}