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
                if(distSq(this.pos, bunker2.troops[i].pos) < Math.pow(this.size + bunker2.troops[i].size, 2)){
                    this.impact(bunker2.troops[i]);
                }
            }
        }else if (this.team == 2){
            for(let i in bunker1.troops){
                if(distSq(this.pos, bunker1.troops[i].pos) < Math.pow(this.size + bunker1.troops[i].size, 2)){
                    this.impact(bunker1.troops[i]);
                }
            }
        }
    }

    impact(victim){
        if (this.team == 1){
            victim.health -= this.damage;
            this.damage = 0;
            this.size = 0;
        }else{
            victim.health -= this.damage;
            this.damage = 0;
            this.size = 0;
        }

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