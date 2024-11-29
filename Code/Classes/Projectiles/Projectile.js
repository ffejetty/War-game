class Projectile{
    constructor(newPos, newVel, newDamage, newSize, newTeam){
        this.pos = newPos;
        this.vel = newVel;
        this.damage = newDamage;
        this.size = newSize;
        this.team = newTeam;
    }

    update(){
        this.pos.add(this.vel);
        if (this.team == 1){
            for(let i in bunker2.troops){
                if(checkImpact(bunker2.troops[i])){
                    this.impact(bunker2.troops[i]);
                    this.damage = 0;
                    this.size = 0;
                }
            }
        }else if (this.team == 2){
            for(let i in bunker1.troops){
                if(checkImpact(bunker1.troops[i])){
                    this.impact(bunker1.troops[i]);
                    this.damage = 0;
                    this.size = 0;
                }
            }
        }
    }

    checkImpact(victim){
        return distSq(this.pos, victim.pos) < Math.pow(this.size + victim.size, 2);
    }

    impact(victim){
        victim.health -= this.damage;
    }

    display(){
        push();
        if(this.team == 1){
            fill(10, 10, 200);
        }else{
            fill(200, 10, 10);
        }
        circle(this.pos.x, this.pos.y, this.size*2);
        pop()
    }

}