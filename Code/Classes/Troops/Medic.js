class Medic extends Troop{
    constructor(newPos, newTeam){
        super(newPos,     //pos
              10,         //size
              60,         //health
              -3,          //damage
              1,          //speed
              100,        //range
              200,        //sight 
              3 * 60,     //attack time
              40,         //price
              1,          //cost
              8,          //income
              newTeam     //team
             );
        this.isMedic = true;
    }

    update(){
        this.attackCountdown--;
        if (this.target == null){
          switch (this.team){
            case 1:
              this.moveToward(createVector(mapWidth-150, this.pos.y));
              break;
            case 2:
              this.moveToward(createVector(150, this.pos.y));
              break;
          }
          
          this.findTarget();
          
        }else if(distSq(this.pos, this.target.pos) > Math.pow(this.range + this.size + this.target.size, 2)){
          this.moveToward(this.target.pos)
          this.targetTimer --;
          if(this.targetTimer <= 0){
            this.findTarget();
          }
        }else if(distSq(this.pos, this.target.pos) <= Math.pow(this.range + this.size + this.target.size, 2)){
          if (this.target.health <= 0){
            this.target = null;
            return;
          }
          //attack enemy
          this.targetTimer = 120;
          if (this.attackCountdown <= 0){
            this.attackCountdown = this.attackTime;
            this.attack();
          }

          if(this.target.target == null){
            switch (this.team){
                case 1:
                  this.moveToward(createVector(mapWidth-150, this.pos.y));
                  break;
                case 2:
                  this.moveToward(createVector(150, this.pos.y));
                  break;
            }
          }
        }
    }

    findTarget(){  //inversed to search through own team
        if(this.team == 1){
          for(let i in bunker1.troops){
            if(bunker1.troops[i] == this){
                continue;
            }
            if(this.target == null){
              if (distSq(this.pos, bunker1.troops[i].pos) < this.sight*this.sight){
                this.target = bunker1.troops[i];
              }
            }else if(bunker1.troops[i].pos.x > this.target.pos.x){
              this.target = bunker1.troops[i];
            }
          }
        }else{
          for(let i in bunker2.troops){
            if(bunker2.troops[i] == this){
                continue;
            }
            if(this.target == null){
              if (distSq(this.pos, bunker2.troops[i].pos) < this.sight*this.sight &&
                 !bunker2.troops[i].isMedic
                 ){

                this.target = bunker2.troops[i];
              }
            }else if(bunker2.troops[i].pos.x < this.target.pos.x &&
                    !bunker2.troops[i].isMedic
                    ){
              this.target = bunker2.troops[i];
            }
          }
        }
        this.targetTimer = 120;
    }

    attack(){
        if(this.target.health >= this.target.maxHealth){
          return;
        }
        this.target.health -= this.damage - random();
        if(this.target.health > this.target.maxHealth){
            this.target.health = this.target.maxHealth;
        }
        effects.push(new HealEffect(this.target.pos, this.target.size * 2 + 3));
    }
}