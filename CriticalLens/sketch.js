let img;
let song;

function preload(){
  img = loadImage('Movietheater.jpg');
  song= loadSound("criticallens.mp3")
}

function setup() {
  createCanvas(540,500);
}

function draw() {
  background(60,29,190);
 textSize(70);
  fill(222,0,0);
  text('Critical Lens', 60, 58);
  fill(78,56,87);
image(img, 70,100,400,300);
  textSize(40);
  fill(186,228,248)
  text("Episode 1: Introductions", 75,450)
}

  function mousePressed(){
  if (song.isPlaying()){
    song.stop();
    background(255,0,0);
  }
    else{
    song.play();
    background(0,255,0);
  }
    
  }
    
  
  
    
  
  

  

  
 
       
  
  
  

