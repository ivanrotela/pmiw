function preload() {
  foto = loadImage('data/obra.jpeg');

  

}
function setup() {
createCanvas(800,400);
}


function draw() {
image(foto,0,0,400,0);
 for(i=0; i<6; i++){
 for(j=0; j<6; j++){
dibujarcuadrado(400+66*i,66*j);
ill(c);

}
}
}
