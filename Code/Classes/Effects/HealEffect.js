class HealEffect extends Effect{
    constructor(newPos, newTime){
        super(newPos, newTime);
    }

    display(){
        push();
        fill(50, 200, 50, 255 * (1 - this.timeLeft/this.startTime));
        circle(this.target.pos.x, this.target.pos.y, this.target.size * 2 + 3);
        pop();
    }

}