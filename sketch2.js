

let y = [];
let fourierY;

let tempo = 0;
let onda = [];


function setup(){
    createCanvas(600,400);
    let angulo = 0;
    for (let i=0; i<100; i++){
        y[i] = 500*noise(angulo) - 250;
        angulo += 0.02;
    }
    fourierY = dft(y);
}

function draw(){
    background(0);
    translate(150,200);
    let x = 0;
    let y = 0;

    for (let i = 0; i<fourierY.length; i++){
        let prevx = x;
        let prevy = y;
        let freq = fourierY[i].freq;
        let raio = fourierY[i].amp;
        let fase = fourierY[i].fase;
        stroke(255, 100);
        noFill();
        ellipse(prevx,prevy,raio*2);
        x += raio*cos(freq*tempo + fase + HALF_PI);
        y += raio*sin(freq*tempo + fase + HALF_PI);

        stroke(255);
        line(prevx,prevy,x,y);
}
    onda.unshift(y);     
    translate(200,0);
    line(x-200,y,0,onda[0])   
    beginShape();
    noFill();
    for(let i=0; i< onda.length; i++){
        vertex(i,onda[i]);
    }
    endShape();

    const dt = TWO_PI/fourierY.length;
    tempo += dt;
    if (onda.length > 500){
        onda.pop();
    }

}