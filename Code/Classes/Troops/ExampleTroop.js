class ExampleTroop extends Troop{
  constructor(newPos, newTeam){
    super(
          newPos,  //pos
          20,      //size
          100,     //health
          5,       //damage
          0.5,     //speed
          10,      //range
          100,     //sight
          25,      //price
          1 * 60,  //attack time
          2,       //cost
          3,       //income
          newTeam  //team
         );
  }

  display(){
    //super.display();
    image(tank, this.pos.x - tank.width/2, this.pos.y - tank.height/2);
  }

}