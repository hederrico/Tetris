class Field {
  constructor(x, y) {
    this.center = new p5.Vector(x, y);
  }



  show() {
    stroke(30, 201, 76);
    strokeWeight(3);

    line(this.center.x - 205, this.center.y - 405, this.center.x - 205, this.center.y + 405);
    line(this.center.x + 205, this.center.y - 405, this.center.x + 205, this.center.y + 405);
    line(this.center.x - 205, this.center.y - 405, this.center.x + 205, this.center.y - 405);
    line(this.center.x - 205, this.center.y + 405, this.center.x + 205, this.center.y + 405);

  }
}
