class RangedTroop extends Troop{
  constructor(newPos, newSize, newHealth, newDamage, newSpeed, newRange, newSight, newAttackTime, newPrice, newTroopCost, newIncome, newTeam){
    super(newPos, newSize, newHealth, newDamage, newSpeed, newRange, newSight, newAttackTime, newPrice, newTroopCost, newIncome, newTeam);
  }
  
  attack(){
    projectiles.push(this.getProjectile());
  }

  getProjectile(){
    return new Bullet_9mm(p5.Vector.mult(this.pos, 1), p5.Vector.sub(this.target.pos, this.pos), this.team) //default bullet 9mm
  }


}