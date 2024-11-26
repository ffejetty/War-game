class Swordsman extends Troop{
  constructor(newPos, newTeam){
    super(
          newPos,  //pos
          10,      //size
          50,      //health
          2,       //damage
          1.1,       //speed
          5,       //range
          100,     //sight
          0.5 * 60,//attack time
          10,      //price
          1,       //cost
          2,       //income
          newTeam  //team
         );
  }
}