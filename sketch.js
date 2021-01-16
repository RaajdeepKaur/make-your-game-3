function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);

 circle1 = new Circle(350,400,150,"red");
 circle2 = new Circle(100,300,150,"green");
 circle3 = new Circle(880,250,150,"blue");
 circle4 = new Circle(700,150,150,"red");
 circle5 = new Circle(650,225,150,"black");
 circle6 = new Circle(750,400,150,"green");
 circle7 = new Circle(500,300,150,"brown");
 circle8 = new Circle(450,750,150,"blue");
 circle9 = new Circle(300,600,150,"yellow");
 circle10 = new Circle(750,700,150,"pink");
}

function draw() {
  background(255,255,255);  
  edges = createEdgeSprites();

  circle1.bubble.bounceOff(edges);
  circle2.bubble.bounceOff(edges);
  circle3.bubble.bounceOff(edges);
  circle4.bubble.bounceOff(edges);
  circle5.bubble.bounceOff(edges);
  circle6.bubble.bounceOff(edges);
  circle7.bubble.bounceOff(edges);
  circle8.bubble.bounceOff(edges);
  circle9.bubble.bounceOff(edges);
  circle10.bubble.bounceOff(edges);
 

  drawSprites();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
}