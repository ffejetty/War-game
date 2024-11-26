class RangedTroop extends Troop{
  constructor(newPos, newSize, newHealth, newDamage, newSpeed, newRange, newSight, newProjectile, newPrice, newTroopCost, newIncome, newTeam){
    super(newPos, newSize, newHealth, newDamage, newSpeed, newRange, newSight, newPrice, newTroopCost, newIncome, newTeam);
    this.projectile = newProjectile;
  }
  
  update(){
    
  }
  
  
  attack(){
    
  }
  
}