
let tempo = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    translate(200,200);
    let raio = 100;
    stroke(255);
    noFill();
    ellipse(0,0,raio*2);

    tempo += 0.01;
}