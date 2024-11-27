class Infantry extends RangedTroop{
    constructor(newPos, newTeam){
        super(newPos,     //pos
              10,         //size
              50,         //health
              2,          //damage
              1,          //speed
              150,        //range
              200,        //sight
              0,          //accuracy  
              1 * 60,     //attack time
              15,         //price
              1,          //cost
              3,          //income
              newTeam     //team
             );
    }
  }