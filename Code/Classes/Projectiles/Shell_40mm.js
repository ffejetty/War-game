class Shell_40mm extends Shell{
    constructor(newPos, newDirection, newTeam){
        super(
            newPos,                                //pos
            newDirection.normalize().mult(10),     //vel
            5,                                    //damage
            5,                                     //size
            20,                                    //explosion radius
            newTeam                                //team
           );
    }
}