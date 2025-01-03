class LightTank extends RangedTroop{
    constructor(newPos, newTeam){
        super(newPos,     //pos
              15,         //size
              150,         //health
              5,          //damage
              0.8,          //speed
              175,        //range
              200,        //sight
              0.01,          //accuracy  
              2.5 * 60,     //attack time
              100,         //price
              2,          //cost
              20,          //income
              newTeam     //team
             );
    }

    getProjectile(newPos, newDirection, newTeam){
        return new Shell_40mm(newPos, newDirection, newTeam);
    }

}