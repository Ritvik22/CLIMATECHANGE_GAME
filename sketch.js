var player, playerIdle1, playerWalk1, playerJump1, playerFall1, playerImg;
var platform1, platform1Img;
var platform2, platform2Img;
var platform3, platform3Img;
var background;
var platformGroup;
var isFlipped = false;
var score = 0;
var playB, playImg;
var homePage, homePageImg;
var playState = false;
var buddyOp, buddyOpImg;
/*var SteamGirlOp, SteamGirlOpImg;
var GraveRobberOp, GraveRobberOpImg;*/
var check, checkImg;
var avatarChoose = 1;
var homeButton, homeButtonImg;
var backButton, backButtonImg;
var yTemp;
var yBool = true;
var touch;
var player;
var solarC, solar1, solar2, solar3, solar4, solar5, solar6;

function preload(){

    playerImg = loadImage("Game_Elements/Characters/BobIdle.png")

    platform1Img = loadImage("Platform1.png");
    platform2Img = loadImage("Platform_1_1.png");

    platform3Img = loadImage("Platform3.png");
   
    playImg = loadImage("Play.png");
    homePageImg = loadImage("homePage.png");

    checkImg = loadImage("Check.png");
    playImg = loadImage("Play.png");
    homeButtonImg = loadImage("HomeButton.png");
    backButtonImg = loadImage("BackButton.png");

    //platform2Img = loadImage("Platform2.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    player = createSprite(width/2, height/2, 10, 10);    
    player.addImage("BobIdle", playerImg);
    player.scale = 0.5;   
    player.debug = true;
    player.setCollider("rectangle", -20, 0, 200, 200);

    
   
    platform3 = createSprite(width/2+290, height-100, 10, 10 );
    platform3.addImage("Lvl3", platform3Img);
    platform3.scale = 1.5;
    //platform3.debug = true;
    platform3.setCollider("rectangle", 3, 33, 655, 19);

    

    homePage = createSprite(width/2, height/2 , 10, 10);
    homePage.addImage("homePage", homePageImg);
    homePage.scale = width/1440;

   
   check = createSprite(5, 10, 10, 10);
    check.addImage("check", checkImg);
    check.scale = 0.3;

    playB = createSprite(width/2 * 1.5, height/2 * 1.35, 10, 10);
    playB.addImage("playButton", playImg);
    playB.scale = width/2880;

    homeButton = createSprite(width - 35, 35, 10, 10);
    homeButton.addImage("homeButton", homeButtonImg);
    homeButton.scale = 0.15;
    homeButton.visible = false;
    
    backButton = createSprite(35, 35, 10, 10);
    backButton.addImage("backButton", backButtonImg);
    backButton.scale = 0.15;
    backButton.visible = false;

   


    //platform2.debug = true;
   // platform2 = createSprite(width/2, height-20, width, 20 );

    platformGroup = new Group;  
    backGroup = new Group();

}

function draw() {
background("black");

console.log(avatarChoose);

if (playState === false) {

    homePage.visible = 1;
    check.visible = 1;
    playB.visible = 1;

    platformGroup.setVelocityXEach(0);
  



    if (mousePressedOver(backButton)) {

        playState = true;

    }
    
  /*  if (mousePressedOver(WoodCutterOp)) {

        check.x = WoodCutterOp.x;
        avatarChoose = 1;
        player.setCollider("rectangle", 0, 4, 25, 33);
        

    } else if (mousePressedOver(SteamGirlOp)){

        check.x = SteamGirlOp.x; 
        avatarChoose = 2;
        player.setCollider("rectangle", 0, 4, 20, 37);
        

    } else if (mousePressedOver(GraveRobberOp)){

        check.x = GraveRobberOp.x; 

    }*/

    if (mousePressedOver(playB)) {

        playState = true;

    }

    if (mousePressedOver(backButton)){

        playState = true;
        backButton.visible = false;
        homeButton.visible = true;
        platformGroup.setVelocityXEach(-4);
        backGroup.setVelocityXEach(-4);
    
    } 

    backButton.depth = homePage.depth+1;
    /*WoodCutterOp.depth = homePage.depth+1;
    SteamGirlOp.depth = homePage.depth+1;
    GraveRobberOp.depth = homePage.depth+1;*/
    check.depth = homePage.depth+1;

}

if (playState === true){

// jump when the space key is pressed

homeButton.visible = true;
homePage.visible = false;
check.visible = false;
//WoodCutterOp.visible = false;
//SteamGirlOp.visible = false;
//GraveRobberOp.visible = false;
playB.visible = false;

if (mousePressedOver(homeButton)){

    playState = false;
    backButton.visible = true;
    homeButton.visible = false;
    platformGroup.setVelocityXEach(0);
    backGroup.setVelocityXEach(0);

} 


console.log(player.y +  ", " + (height-100));


  
if (platform3.x > -500) {
if(keyDown("right")){

    if(isFlipped === true){
        player.mirrorX(-player.mirrorX());
        isFlipped = false;  
    }

   /* if (avatarChoose === 1) {*/
    player.changeAnimation("Walk1", playerWalk1);
    
    /*} else if (avatarChoose === 2) {
        player.changeAnimation("Walk2", playerWalk2);
    }*/

    platform3.x-=4;
   

    platformGroup.setVelocityXEach(-4);
    backGroup.setVelocityXEach(-4);
    
} else if (keyDown("left")){

    if (isFlipped === false) {
        player.mirrorX(-player.mirrorX());
        isFlipped = true;
    }
    
   //if (avatarChoose === 1) {
    player.changeAnimation("Walk1", playerWalk1);
   /* } else if (avatarChoose === 2) {
        player.changeAnimation("Walk2", playerWalk2);
    }*/

    platformGroup.setVelocityXEach(4);
    backGroup.setVelocityXEach(4);
    platform3.x +=4;
    

    
} else {

   //if (avatarChoose === 1) {

    if ((player.y < (yTemp + 0.801)) && (player.y > (yTemp-0.801))) {
    
        touch = 1;
        
     } else {
    
        touch = 0;
    
     }
    
     if (touch === 0) {
    
        player.changeAnimation("Jump1", playerJump1); 
        player.changeAnimation("Fall1", playerFall1);
    
     } else {

        player.changeAnimation("Idle1", playerIdle1);


     }

    /*} else if (avatarChoose === 2) {
        player.changeAnimation("Idle2", playerIdle2);
    }*/
    platformGroup.setVelocityXEach(0);
    backGroup.setVelocityXEach(0);


}

if ( keyDown("space") && touches.length === 0 && player.y == yTemp) {
    
    
     yBool = false;
    console.log("HEARYSIAUHD");
    player.changeAnimation("Jump1", playerJump1); 
   // ((player.y >= height-150 && player.y <= height-100) || (player.y >= height-250 && player.y <= height-200))
    player.velocityY = -19;
    
    
   // touches = [];
}

if ((player.y < (yTemp + 0.801)) && (player.y > (yTemp-0.801))) {
    
    touch = 1;
    
 } else {

    touch = 0;

 }

 if (touch === 0) {

    player.changeAnimation("Jump1", playerJump1); 
    player.changeAnimation("Fall1", playerFall1);

 }


 console.log("TOUCH: " + touch);

} else {

    platformGroup.setVelocityXEach(0);
    player.velocityX = 0;
    platformGroup.setVelocityXEach(-4);
   

    if ( keyDown("space") && touches.length === 0 && player.y == yTemp) {
    
    
        yBool = false;
       console.log("HEARYSIAUHD");
       player.changeAnimation("Jump1", playerJump1); 
      // ((player.y >= height-150 && player.y <= height-100) || (player.y >= height-250 && player.y <= height-200))
       player.velocityY = -19;
       
       
      // touches = [];
   }
   
   if ((player.y < (yTemp + 0.801)) && (player.y > (yTemp-0.801))) {
       
       touch = 1;
       
    } else {
   
       touch = 0;
   
    }
   
    if (touch === 0) {
   
       player.changeAnimation("Jump1", playerJump1); 
       player.changeAnimation("Fall1", playerFall1);
   
    } else {

        player.changeAnimation("Walk1", playerWalk1);

    }

   
    

}

spawnObstacles();
spawnSkyRise();
player.velocityY += 0.8;

//player.collide(platform2);

//text( platform3.x, 300, 20);
text("Antibodies: "+score, (width/2)-20, 20);


}


player.collide(platformGroup);
player.collide(platform3);

if (yBool === true) {

yTemp = player.y;

}

yBool = true;

drawSprites(); 
}


function spawnObstacles() {

    if (frameCount%63 === 0) {

        platform1 = createSprite(width+100, height-25, 10, 10 );
       // platform1.debug = true;
        platform1.addImage("Lvl1", platform1Img);
        platform1.scale = 0.5;
        platform1.setCollider("rectangle", 76, -10, 506, 130)
        homePage.depth = platform1.depth+1;
        platformGroup.add(platform1);

    }
  
}

function spawnSkyRise() {

    if (frameCount%200 === 0) {

        platform2 = createSprite(width+100, height-215, 10, 10 );
        
        platform2.debug = true;
        platform2.addImage("SkyRise1", platform2Img);
        
        platform2.scale = 0.5;
        
        platform2.setCollider("rectangle", 0, -10, 400, 100)
        homePage.depth = platform2.depth+1;
        platformGroup.add(platform2);
       

    }

}

/*function spawnMediSups(){

    if (frameCount%170 === 0) {

        var choose = Math.round(random(1, 9));
        mediSup = createSprite(width+150, height-100, 10, 10);
        //mediSup.debug = true;

        switch (choose) {

            case 1:
                mediSup.addImage("mask", maskImg);
                mediSup.scale = 0.2;
                mediSup.velocityX = -4;
                break;
            case 2:
                mediSup.addImage("mask", maskImg);
                mediSup.scale = 0.2;
                mediSup.velocityX = -4;
                break;
            case 3:
                mediSup.addImage("mask", maskImg);
                mediSup.scale = 0.2;
                mediSup.velocityX = -4;
                break;
            case 4:
                mediSup.addImage("washHands", whImg);
                mediSup.scale = 0.1;
                mediSup.velocityX = -4;
                break;
            case 5:
                mediSup.addImage("washHands", whImg);
                mediSup.scale = 0.1;
                mediSup.velocityX = -4;
                break;
            case 6:
                mediSup.addImage("washHands", whImg);
                mediSup.scale = 0.1;
                mediSup.velocityX = -4;
                break;
            case 7:
                mediSup.addImage("dose1", dose1Img);
                mediSup.scale = 1.5;
                mediSup.velocityX = -4;
                break;
            case 8:
                mediSup.addImage("dose1", dose1Img);
                mediSup.scale = 1.5;
                mediSup.velocityX = -4;
                break;
            case 9:
                mediSup.addImage("dose2", dose2Img);
                mediSup.scale = 1.5;
                mediSup.velocityX = -4;
                break;
            default:
                break;

        }

    }

}*/
