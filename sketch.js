var backgroundimg, issimg,spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var spacecraft,iss;
var hasDocked = false;
function preload() {
  backgroundimg = loadImage("spacebg.jpg")
  issimg = loadImage("iss.png")
  spacecraft1 = loadImage("spacecraft1.png")
  spacecraft2 = loadImage("spacecraft2.png")
  spacecraft3 = loadImage("spacecraft3.png")
  spacecraft4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(1600,800);
 iss = createSprite(800, 300, 50, 50);
 iss.addImage(issimg);
 iss.scale = 1.1
 spacecraft = createSprite(300, 700, 50, 50);
 spacecraft.addImage(spacecraft1);
 spacecraft.scale = 0.3
}
var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: iss.x = 300
              break;
      case 2: iss.x = 700
              break;
      case 3: iss.x = 500
              break;
      case 4: iss.x = 900
              break;
      case 5: iss.x = 100
              break;
      case 6: iss.x = 1000
              break;
      default: break;
    }
function draw() {
  background(backgroundimg);  


  if(keyIsDown(UP_ARROW))
  {
    spacecraft.y = spacecraft.y-2;
    spacecraft.addImage(spacecraft2);
  }
  if(keyIsDown(LEFT_ARROW))
  {
    spacecraft.x = spacecraft.x-2;
    spacecraft.addImage(spacecraft4);
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    spacecraft.x = spacecraft.x+2;
    spacecraft.addImage(spacecraft3);
  }
  if(keyIsDown(DOWN_ARROW))
  {
     spacecraft.addImage(spacecraft1);
  }


  if(!hasDocked)
  {
    
  }
 
  drawSprites();
}