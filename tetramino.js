class Tetramino {
  constructor() {
    this.shape = int(random(1, 7));
  }


  show() {
    strokeWeight(3);

    console.log(this.shape);

    switch (this.shape) {
      case 1:
        //I
        fill(255, 0, 207);
        stroke(112, 0, 91);
        rectMode(CENTER);
        rect(100, 150, 40, 160);
      break;

      case 2:
        //O
        fill(0, 14, 255);
        stroke(0, 6, 112);
        rect(250, 150, 80, 80);
      break;

      case 3:
        //T
        fill(7, 222, 0);
        stroke(0, 112, 11);
        rect(400, 150, 40, 120);
        rect(440, 150, 40, 40);
      break;

      case 4:
        //J
        fill(222, 0, 0);
        stroke(130, 0, 0);
        rect(100, 350, 120, 40);
        rect(140, 390, 40, 40);
      break;

      case 5:
        //L
        fill(234, 242, 0);
        stroke(126, 130, 0);
        rect(400, 350, 120, 40);
        rect(360, 390, 40, 40);
      break;

      case 6:
        //S
        fill(242, 133, 0);
        stroke(140, 77, 0);
        rect(100, 500, 80, 40);
        rect(60, 540, 80, 40);
      break;

      case 7:
        //Z
        fill(0, 232, 224);
        stroke(0, 122, 118);
        rect(360, 500, 80, 40);
        rect(400, 540, 80, 40);
      break;
    }
  }
}
