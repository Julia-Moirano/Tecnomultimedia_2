class caminante{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.t = 15;
        push();
        colorMode( HSB , 360 , 100 , 100 , 100 );
        this.elColor = color( random(210,270) ,100 , 100 );
        pop();
    }

    dibujar(){
        push();
        fill(this.elColor);
        noStroke();
        ellipse( this.x , this.y , this.t , this.t );
        pop();
    }

    mover(vel){
      this.x += vel;
      if(this.x > width){
        this.x = 0;
        this.y = random(0,windowHeight);
   }
  }

  actualizar(vel){
    if (frameCount > 90){
      this.y = random(0,windowHeight);
    }
  }

}