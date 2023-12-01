function setup() {
    var canvas = createCanvas(800, 800);
    
canvas.parent("p5container");
background(220);
colorMode(HSB)

for(i = 0; i < 50; i++){
    circles()
}
}
function draw() {}

 function circles(){

var x=random(height);
var y=random(width);
var d=(5,150); 
var hue = random (120,255)
noStroke()
fill(hue, 255, 255,0.1);
    ellipse(x, y, d);
}
 