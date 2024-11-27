class Shell extends Projectile{
    constructor(newPos, newVel, newDamage, newSize, newExplosionRadius, newTeam){
        super(newPos, newVel, newDamage, newSize, newTeam);
        this.explosionRadius = newExplosionRadius;
    }

    impact(victim){
        let explosionRadiusSq = this.explosionRadius * this.explosionRadius;

        victim.health -= this.damage;

        if (this.team == 1){
            for (let i in bunker2.troops){
                let distToTroopSq = distSq(this.pos, bunker2.troops[i].pos);
                if (distToTroopSq <= explosionRadiusSq){
                    bunker2.troops[i].health -= this.damage/distToTroopSq;  //damage drops off with square of the distance
                }
            }
        }else if (this.team == 2){
            for (let i in bunker1.troops){
                let distToTroopSq = distSq(this.pos, bunker1.troops[i].pos);
                if (distToTroopSq <= explosionRadiusSq){
                    bunker1.troops[i].health -= this.damage/distToTroopSq;
                }
            }
        }
    }

}