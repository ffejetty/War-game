class Shell extends Projectile{
    constructor(newPos, newVel, newDamage, newSize, newExplosionRadius, newTeam){
        super(newPos, newVel, newDamage, newSize, newTeam);
        this.explosionRadius = newExplosionRadius;
    }

    impact(victim){
        let explosionRadiusSq = this.explosionRadius * this.explosionRadius;
        if (this.team == 1){
            for (let i in bunker2.troops){
                let distToTroopSq = distSq(this.pos, bunker2.troops[i].pos);
                if (distToTroopSq <= explosionRadiusSq){
                    bunker2.troops[i].health -= this.damage;
                }
            }
        }
    }

}