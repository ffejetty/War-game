class Explosion extends Effect{
    constructor(newPos, newSize, newStrength){
        super(newPos, newSize, 12);
        this.strength = newStrength;
    }

    display(){
        push();
        let alpha = 200 * (this.timeLeft/this.startTime);
        fill(186, 172, 147, alpha);
        circle(this.pos.x, this.pos.y, this.size);
        fill(247, 164, 10, alpha);
        circle(this.pos.x, this.pos.y, this.size/2);
        fill(245, 122, 0, alpha);
        circle(this.pos.x, this.pos.y, this.size/4);
        pop();
    }

    update(){
        super.update();
        this.size+=this.strength*1/this.startTime;
    }

}