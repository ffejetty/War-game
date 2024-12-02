class Shell_50mm extends Shell{
    constructor(newPos, newDirection, newTeam){
        super(
            newPos,                                //pos
            newDirection.normalize().mult(9),     //vel
            8,                                    //damage
            8,                                     //size
            60,                                    //explosion radius
            newTeam                                //team
           );
    }
}