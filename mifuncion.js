function dibujarcuadrado(posicionX,posicionY){
 for(i=7; i>1; i--){

   strokeWeight(2);
 if(mousePressed){
  fill(ColorAleatorio());
  }
  rect(posicionX,posicionY ,i*11 ,i*11 );
  cosole.log(i);
  }
}
color ColorAleatorio(){
  return color(random(255),random(55*3),random(20*7));

}
}
