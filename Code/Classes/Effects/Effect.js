class Effect{
    constructor(newPos, newSize, newTime){
        this.pos = newPos;
        this.size = newSize;
        this.timeLeft = newTime;
        this.startTime = newTime;
    }

    update(){
        this.timeLeft--;
    }

    display(){}

}