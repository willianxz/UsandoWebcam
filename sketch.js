var capture;

function setup() {
 createCanvas(windowWidth, windowHeight);
 capture = createCapture(VIDEO); //Se não tiver especificado, irá ser video/som
 capture.hide(); 
}

function draw(){
  background(200);
  image(capture,10, 60);
  filter('INVERT');
  image(capture,width/2 + 20, 60); 
}

function mousePressed(){
 saveCanvas('minhaFoto', 'jpg'); 
}
