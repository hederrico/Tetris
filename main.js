let canvas;
let field;
let tetraminoes = [];

function setup() {
  canvas =   createCanvas(1640, 900);

  field = new Field(800, 450);

  for (var i = 0; i < 7; i++) {
    tetraminoes.push(new Tetramino());
  }

}

function draw() {
  // createCanvas(400, 800);
  // canvas.position(605, 60);
  background(25);


  field.show();

  for (var i = 0; i < tetraminoes.length; i++) {
    tetraminoes[i].show();
  }
}
