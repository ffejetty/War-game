class RangedTroop extends Troop{
  constructor(newPos, 
              newSize, 
              newHealth, 
              newDamage, 
              newSpeed, 
              newRange, 
              newSight, 
              newAccuracy,    //accuracy as %deviation (0-1) of bullet path, so most accurate = 0 deviation, least accurate = 1
              newAttackTime,  
              newPrice, 
              newTroopCost, 
              newIncome, 
              newTeam){

    super(newPos, newSize, newHealth, newDamage, newSpeed, newRange, newSight, newAttackTime, newPrice, newTroopCost, newIncome, newTeam);
    this.accuracy = newAccuracy;

  }
  
  attack(){
    projectiles.push(this.getProjectile(p5.Vector.mult(this.pos, 1), p5.Vector.sub(this.target.pos, this.pos).rotate(random(-PI*this.accuracy, PI*this.accuracy)), this.team));
  }

  getProjectile(newPos, newDirection, newTeam){
    return new Bullet_9mm(newPos, newDirection, newTeam); //default bullet 9mm
  }


}