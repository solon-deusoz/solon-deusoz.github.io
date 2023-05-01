let ballX = 50
let sky;



function setup() {
  createCanvas(400, 400); //creating an HTML element with 400px high by 400px wide
  sky = color(127,224,255);
  
}

function draw() {
  background (sky);
  fill(255,255,0); // Yellow for sun
  ellipse(350,50,75,75);
  stroke(127,224,255);
  noStroke()
  fill(0,0,224); //Yellow color for Sand
   rect(0,400,500,20);
  fill(245,245,200); //Beige color for sand
  ellipse(0,350,1600,150);
  fill(0,0,255); //Blue color for sea
  rect(0,150,400,140); //the shape of the sea
  fill(30,50,20); //the green color for the towel
  rect(100,300,200,100);
  fill(255,229,180); // the color of the person
  ellipse (100,350,50,49);
  rect(121,328,100,50);
  fill(0,0,128); //Swimsuit color
  rect (219,359,80,20);
  rect (219,330,80,20);
  fill(255,229,180);
  rect(297,365,20,10);
  rect(297,335,20,10);
  rect(123,323,65,10); //his right arm
  rect(123,373,65,10); //his left arm
  ellipse (320,370,20,10);
  ellipse(320,340,20,10);
  fill(255,255,255);
  ellipse(ballX,300,50,50);
  ballX++
}

function mousePressed() {
  
  if (mouseX <200){
    sky = color(128,128,128)
    
  }
}
  
function mouseReleased(){
   sky = color(127,224,255);
  
}

  
  
  
  
  
  

