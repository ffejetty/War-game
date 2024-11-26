class Bullet_9mm extends Projectile{
    constructor(newPos, newDirection, newTeam){
        super(
              newPos,                                //pos
              newDirection.normalize().mult(10),     //vel
              5,                                    //damage
              5,                                     //size
              newTeam                                //team
             );
    }
}