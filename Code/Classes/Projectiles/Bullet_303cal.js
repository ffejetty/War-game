class Bullet_303cal extends Projectile{
    constructor(newPos, newDirection, newTeam){
        super(
              newPos,                                //pos
              newDirection.normalize().mult(20),     //vel
              15,                                    //damage
              2,                                     //size
              newTeam                                //team
             );
    }
}