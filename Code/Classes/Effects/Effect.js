class Effect{
    constructor(newPos, newTime){
        this.pos = newPos;
        this.timeLeft = newTime;
    }

    update(){
        this.timeLeft--;
    }

    display(){}

}