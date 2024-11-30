class SMG extends RangedTroop{ //shoots an MP40
    constructor(newPos, newTeam){
        super(newPos,     //pos
            10,         //size
            20,         //health
            2,          //damage
            0.9,        //speed
            80,        //range
            150,        //sight
            0.1,        //accuracy
            0.2 * 60,   //attack time
            30,         //price
            2,          //troop cost
            6,          //income
            newTeam     //team
           );
    }
}