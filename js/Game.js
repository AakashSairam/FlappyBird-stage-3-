class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  
    bird1 = createSprite(150,displayHeight/2,20,20);
    bird2 = createSprite(150,displayHeight/2,20,20);
    bird1.addImage("player1",birdImg);
    bird2.addImage("player2",birdImg);
    bird = [bird1,bird2];
  bg = createSprite(displayWidth/2,displayHeight/2-50,displayWidth,displayHeight-170);
  bg.velocityX = 4;
  bg.addImage("background",bgImg);
  bg.x = bg.width/2;
  bg.scale= 4;
    
   
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //image(bg,0,0,displayWidth,displayHeight-170);
    //bg.resize(displayWidth,displayHeight-100);
    if (bg.x<1700){
   //   bg.x = bg.Width/2; 
    }
    console.log(bg.x)
    if(allPlayers !== undefined){
      
    }

    if(player.score > 10){
      gameState = 2;
    }
    if (frameCount%40 === 0){  
   
      pipe = createSprite(580,175,20,5);
      var randompipe = Math.round(random(1,4));
      // switch is used randomize many images 
        switch(randompipe){
          case 1:pipe.addImage(pipe1Img);
         break;
         case 2:pipe.addImage(pipe2Img);
            break;
            case 3:pipe.addImage(pipe3Img);
            break;
            case 4:pipe.addImage(pipe4Img);
            break;
        }
        pipe.lifetime = 100;
        pipe.scale = 0.8;
    // tree.setCollider("rectangle",0,0,300,150);
    //   tree.debug = true;
        pipe.velocityX = -9;
        pipe_group.add(pipe);
      }
    drawSprites();
  }
  

  end(){
    console.log("Game Ended");
  }
}
