class Sniper extends RangedTroop{ //uses lee-enfield
    constructor(newPos, newTeam){
        super(newPos,     //pos
              10,         //size
              20,         //health
              2,          //damage
              0.95,          //speed
              400,        //range
              500,        //sight
              0,          //accuracy  
              3 * 60,     //attack time
              50,         //price
              1,          //cost
              10,          //income
              newTeam     //team
             );
    }

    getProjectile(newPos, newDirection, newTeam){
        return new Bullet_303cal(newPos, newDirection, newTeam);
    }
}