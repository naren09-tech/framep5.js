function preload(){
    image1=loadImage("download.jpeg");
}
function setup(){
    canvas = createCanvas(640 , 480);
    canvas.position(100, 250);
}
function draw(){
    image(image1, 100, 100, 300, 300);
    fill("orange");
    stroke("red"); 
    rect(100,100,10,300);
    rect(400,100,20,300);
    rect(100,400,300,20);
    rect(100,100,300,20);
    circle(100,400,50);
    circle(400,400,50);
    circle(400,100,50);
    circle(100,100,50);
    

}
