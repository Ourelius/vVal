
function setup() {
  createCanvas(
    c.settings.width,
    c.settings.height
  );

  // load background-image-overlay
  bgLayer = loadImage('assets/images/background.png');

  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  colorMode(HSL);

  if( h < 360 ){
    h = h + 0.4;
  } else {
    h = 0;
  }

  background( h, s, l );

  particles.push(new particle( h, s, l ));
  runPSystem();

  if ( !looping ) {
    var mouseText = "SM" // SoundeMode on
  } else {
    var mouseText = "VM" // VariableMode on
  }

  fill(0, 102, 153, 51);
//  text(mouseText, mouseX + 20, mouseY);

  // init background-image-overlay
  //image(bgLayer, 0, 0, width, height);
}



function mousePressed() {

  if( !looping ){
    saveCanvas("img","png");
    //noLoop();
    looping = 1;
  }else{
    //loop();
    looping = 0;
  }

}
