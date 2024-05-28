let c = [];
let cantidad = 10;

function setup() {
  createCanvas( windowWidth, windowHeight );
  for( let i=0 ; i<cantidad ; i++ ){
    c[i] = new caminante (0, random(0,windowHeight), );
    }
 //this.rectangulo= new objeto();
  background(255);
  fill(0);
}

function draw() {
  //this.rectangulo.dibujar(100,100);
  push();
  noStroke();
  fill(0,0,10,5);
  rect(0,0,width,height);
  pop();

  for( let i=0 ; i < cantidad ; i++ ){
    c[i].mover(9);
    c[i].actualizar(9);
    c[i].dibujar();
  }
}

function keyPressed() {////
  save("p5shot.png");/////// <--- (ESTAS LINEAS DE CODIGO NO FORMAN PARTE DEL TRABAJO ORIGINAL)
}////