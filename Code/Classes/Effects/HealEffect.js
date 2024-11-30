class HealEffect extends Effect{
    constructor(newPos, newSize){
        super(newPos, newSize, 50);
    }

    display(){
        push();
        fill(50, 200, 50, 225 * (this.timeLeft/this.startTime));
        circle(this.pos.x, this.pos.y, this.size);
        pop();
    }

}