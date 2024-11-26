class Infantry extends RangedTroop{
    constructor(newPos, newTeam){
        super(newPos,     //pos
              10,         //size
              50,         //health
              2,          //damage
              1,          //speed
              100,          //range
              200,        //sight
              1 * 60,   //attack time
              10,         //price
              1,          //cost
              2,          //income
              newTeam     //team
             );
    }

    getProjectile(){
        return new Bullet_9mm(p5.Vector.mult(this.pos, 1), p5.Vector.sub(this.target.pos, this.pos), this.team)
    }

  }