class Scout extends Troop{
    constructor(newPos, newTeam){
        super(
            newPos,  //pos
            8,      //size
            25,      //health
            5,       //damage
            1.5,       //speed
            5,       //range
            75,     //sight
            0.25 * 60,//attack time
            10,      //price
            1,       //cost
            1,       //income
            newTeam  //team
           );
    }
}