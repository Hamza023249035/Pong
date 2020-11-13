var playerPaddle, computerPaddle;



function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
  // computer paddle
  computerPaddle = new Paddle();
}

function draw() {
  //set background to white
  background("white");
  
  computerPaddle.yPosition = 165;
  computerPaddle.display();
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
}