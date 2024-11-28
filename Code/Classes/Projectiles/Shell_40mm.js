class Shell_40mm extends Shell{
    constructor(newPos, newDirection, newTeam){
        super(
            newPos,                                //pos
            newDirection.normalize().mult(9),     //vel
            5,                                    //damage
            6,                                     //size
            50,                                    //explosion radius
            newTeam                                //team
           );
    }
}