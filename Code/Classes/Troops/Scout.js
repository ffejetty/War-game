class Scout extends Troop{
    constructor(newPos, newTeam){
        super(
            newPos,  //pos
            9,      //size
            20,      //health
            1,       //damage
            1.5,       //speed
            5,       //range
            75,     //sight
            0.2 * 60,//attack time
            8,      //price
            1,       //cost
            1.6,       //income
            newTeam  //team
           );
    }
}