class Tank extends RangedTroop{
    constructor(newPos, newTeam){
        super(newPos,     //pos
              20,         //size
              200,         //health
              5,          //damage
              0.75,          //speed
              200,        //range
              225,        //sight
              0.01,          //accuracy  
              5 * 60,     //attack time
              120,         //price
              2,          //cost
              24,          //income
              newTeam     //team
             );
    }

    getProjectile(newPos, newDirection, newTeam){
        return new Shell_50mm(newPos, newDirection, newTeam);
    }

}