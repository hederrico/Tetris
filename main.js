let canvas;
let field;
let tetramino;

function setup() {
  canvas =   createCanvas(1640, 900);
  field = new Field(width/2, height/2, 20, 10);

  tetramino = new Tetramino();
  field.add(tetramino);
}

function draw() {
  // createCanvas(400, 800);
  // canvas.position(605, 60);
  background(25);
  //console.log(mouseX,mouseY);

  field.show();

  //for (var i = 0; i < tetraminoes.length; i++) {
  //  tetraminoes[i].show();
  //}
}
