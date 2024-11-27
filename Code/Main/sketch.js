let camPos; //camera position
let randColours; //array of rand for grass
let bgRes = 50; //background resolution (size of each square)
let troopBarSize = 150;

const mapHeight = 750;
const mapWidth = 3000;

let bunker1; //p1 bunker object
let bunker2; //p2 bunker object

let troopLimit = 60; //how many troops an be spawned each round

let projectiles = [];//projectiles currently in the level

let showHealth = true;
let roundLength = 30 * 60; //length of each round (in frames)

let tank;

function preload(){
  tank = loadImage("Assets/Blue Sprites/tank3.gif");
}

function setup() {
  createCanvas(windowWidth - 10, 500 + troopBarSize);
  
  camPos = createVector(mapWidth/2, mapHeight/2);
  
  randColours = [];
  
  
  for (let i = 0; i <= mapWidth; i += bgRes){ //creating each background square
    randColours.push([[100, 50 + random(50,100), 20]]);
    for (let j = bgRes; j < mapHeight; j += bgRes){
      randColours[i/bgRes].push([100, 50 + random(50,100), 20]);
    }
  }
  
  bunker1 = new Bunker(createVector(150, mapHeight/2), 1);
  bunker2 = new Bunker(createVector(mapWidth - 150, mapHeight/2), 2);

  nextRound();
  
}

function draw() {
  background(220);
  
  //camera movement
  if(keyIsDown(LEFT_ARROW) && camPos.x - width/2 > 0){ //move camera left
    camPos.x -= 5;
  }else if(keyIsDown(RIGHT_ARROW) && camPos.x + width/2 < mapWidth){ //move camera left
    camPos.x += 5;
  }
  
  if(keyIsDown(UP_ARROW) && camPos.y - (height - troopBarSize)/2 > 0){ //move camera up
    camPos.y -= 5;
  }else if(keyIsDown(DOWN_ARROW) && camPos.y + (height - troopBarSize)/2 < mapHeight){ //move camera down
    camPos.y += 5;
  }
  
  translate(width/2 - camPos.x, (height - troopBarSize)/2 - camPos.y); //move canvas to camera
  
  push();
  fill(150);
  rect(0,0, mapWidth, mapHeight); //background
  
  //draw grass
  strokeWeight(0);
  for (let i = 0; i < mapWidth; i += bgRes){
    for (let j = 0; j < mapHeight; j += bgRes){
      let colour = randColours[i/bgRes][j/bgRes]
      
      fill(colour[0], colour[1], colour[2]);
      rect(i, j, bgRes, bgRes);
    }
  }

  for(let i in projectiles){
    projectiles[i].display();
    projectiles[i].update();
    if(!inMap(projectiles[i].pos)){
      projectiles.splice(i, 1);
      i--;
    }
  }
  
  bunker1.display();
  bunker1.update();
  
  bunker2.display();
  bunker2.update();
  
  fill(100, 100);
  circle(camPos.x, camPos.y, 10); //camera pointer
  
  circle(camPos.x, camPos.y - (height - troopBarSize)/2 + 25, 50); //countdown background
  
  rect(camPos.x - width/2, camPos.y - (height - troopBarSize)/2, 100, 100); //p1 info background
  rect(camPos.x + width/2 - 100, camPos.y - (height - troopBarSize)/2, 100, 100); //p2 info background
  
  fill(0);
  textAlign(CENTER, CENTER)
  //countdown
  text("" + round(roundLength/60 - (frameCount % (roundLength))/60), camPos.x, camPos.y - (height - troopBarSize)/2 + 25);
  textAlign(LEFT, CENTER)
  text("money: " + bunker1.money, camPos.x - width/2 + 10, camPos.y - (height - troopBarSize)/2 + 25)
  text("money: " + bunker2.money, camPos.x + width/2 -100 + 10, camPos.y - (height - troopBarSize)/2 + 25)
  
  text("income: " + bunker1.moneyPerRound, camPos.x - width/2 + 10, camPos.y - (height - troopBarSize)/2 + 40)
  text("income: " + bunker2.moneyPerRound, camPos.x + width/2 -100 + 10, camPos.y - (height - troopBarSize)/2 + 40)
  
  text("troops: " + bunker1.troopsAvailable, camPos.x - width/2 + 10, camPos.y - (height - troopBarSize)/2 + 55)
  text("troops: " + bunker2.troopsAvailable, camPos.x + width/2 -100 + 10, camPos.y - (height - troopBarSize)/2 + 55)
  
  text("deployed: " + bunker1.getArmySize(), camPos.x - width/2 + 10, camPos.y - (height - troopBarSize)/2 + 70)
  text("deployed: " + bunker2.getArmySize(), camPos.x + width/2 -100 + 10, camPos.y - (height - troopBarSize)/2 + 70)

  fill(0)
  rect(camPos.x - width/2, camPos.y + (height - troopBarSize)/2, width, troopBarSize);

  
  pop();
  
  if(frameCount % (roundLength) == 0){ //when new round (every roundLength/60 secs)
    nextRound();
  }
}

function nextRound(){
  bunker1.money += bunker1.moneyPerRound;
  bunker2.money += bunker2.moneyPerRound;
    
  bunker1.troopsAvailable = troopLimit;
  bunker2.troopsAvailable = troopLimit;
}

function magSq(vect){ //returns square of the magnitude to save sqr root computation
  return vect.x*vect.x + vect.y*vect.y;
}

function distSq(vect1, vect2){
  return magSq(p5.Vector.sub(vect2, vect1));
}

function inMap(pos){ //returns t/f that the point given is in the map
  return (pos.x >= 0 && pos.x <= mapWidth && pos.y >= 0 && pos.y <= mapHeight)
}

function getNewTroop(className, newPos, newTeam){
    switch (className){
      case "Swordsman":
        return new Swordsman(newPos, newTeam);
      case "Scout":
        return new Scout(newPos, newTeam);
      case "Infantry":
        return new Infantry(newPos, newTeam);
      case "SMG":
        return new SMG(newPos, newTeam);
      default:
        return new Swordsman(newPos, newTeam);
    }
}

function keyPressed(){
  if(key == "1"){
    bunker1.buyTroop(getNewTroop("Infantry", createVector(200, random(-75,75) + mapHeight/2), 1));
  }else if(key == "2"){
    bunker2.buyTroop(getNewTroop("Infantry", createVector(mapWidth - 200, random(-75,75) + mapHeight/2), 2));
  }else if(key == "3"){
    bunker1.buyTroop(getNewTroop("SMG", createVector(200, random(-75,75) + mapHeight/2), 1));
  }else if(key == "f"){
    fullscreen(!fullscreen());
  }
}
