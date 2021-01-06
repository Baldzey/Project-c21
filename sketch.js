var canvas;
var music;

var b1, b2, b3, b4;
var b;
var iRoof, lRoof, rRoof;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    b = createSprite(300, 300, 40,40)
    b.velocityY = 5
    b.velocityX = 5;
    b.shapeColor = "white";
    b.debug = true;
    

    b1 = createSprite(65,590, 200, 30)
    b1.shapeColor = "green"

    b2 = createSprite(280,590, 200, 30)
    b2.shapeColor = "red"

    b3 = createSprite(490,590, 200, 30)
    b3.shapeColor = "aqua"
    
    b4 = createSprite(705,590, 200, 30)
    b4.shapeColor = "orange"

    iRoof = createSprite(400, 2, 800, 10)
    lRoof = createSprite(2, 300, 10, 600)
    lRoof.debug = true;
    rRoof = createSprite(798, 300, 10, 600)
    
    
    



    

}

function draw() {
    background(rgb(169,169,169));

    createEdgeSprites();
   bounceOff(b, b1);
  
   b.bounceOff(iRoof);
   b.bounceOff(lRoof);
   b.bounceOff(rRoof);
   
  
    





if(b.isTouching(b1)){

    b.shapeColor = "green"
    b.velocityX = 0;
    b.velocityY = 0;
    music.stop();
}
if(b.isTouching(b2)){
    music.play();
    b.shapeColor = "red"
}
if(b.isTouching(b3)){

    b.shapeColor = "aqua"
}   

if(b.isTouching(b4)){

    b.shapeColor = "orange"
}

drawSprites();
}
