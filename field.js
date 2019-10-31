class Field {
  constructor(x, y,rows,columns) {
    this.center = new p5.Vector(x,y, rows, columns);
    this.rows = rows;
    this.columns = columns;
    this.width = 410;
    this.height = 820;
    this.matrix = new Array(this.rows);
    this.inicializeMatrix();
  }

  add(tetramino) {
    let i = Math.floor(this.columns/2);
    switch (tetramino.shape) {
      case 1:
        //I
        if(this.matrix[0][i] == '-' && this.matrix[1][i] == '-' && this.matrix[2][i] == '-' && this.matrix[3][i] == '-') {
          this.matrix[0][i] = 'I';
          this.matrix[1][i] = 'I';
          this.matrix[2][i] = 'I';
          this.matrix[3][i] = 'I';
          tetramino.position = [[0,i],[1,i],[2,i],[3,i]];
        }
      break;

      case 2:
        //O
        if(this.matrix[0][i] == '-' && this.matrix[0][i+1] == '-' && this.matrix[1][i] == '-' && this.matrix[1][i+1] == '-') {
          this.matrix[0][i] = 'O';
          this.matrix[0][i+1] = 'O';
          this.matrix[1][i] = 'O';
          this.matrix[1][i+1] = 'O';
          tetramino.position = [[0,i],[0,i+1],[1,i],[1,i+1]];
        }
      break;

      case 3:
        //T
        if(this.matrix[0][i] == '-' && this.matrix[0][i-1] == '-' && this.matrix[0][i+1] == '-' && this.matrix[1][i] == '-') {
          this.matrix[0][i] = 'T';
          this.matrix[0][i-1] = 'T';
          this.matrix[0][i+1] = 'T';
          this.matrix[1][i] = 'T';
          tetramino.position = [[0,i],[0,i-1],[0,i+1],[1,i]];
        }
      break;

      case 4:
        //J
        if(this.matrix[0][i] == '-' && this.matrix[1][i] == '-' && this.matrix[2][i] == '-' && this.matrix[2][i-1] == '-') {
          this.matrix[0][i] = 'J';
          this.matrix[1][i] = 'J';
          this.matrix[2][i] = 'J';
          this.matrix[2][i-1] = 'J';
          tetramino.position = [[0,i],[1,i],[2,i],[2,i-1]];
        }
      break;

      case 5:
        //L
        if(this.matrix[0][i] == '-' && this.matrix[1][i] == '-' && this.matrix[2][i] == '-' && this.matrix[2][i+1] == '-') {
          this.matrix[0][i] = 'L';
          this.matrix[1][i] = 'L';
          this.matrix[2][i] = 'L';
          this.matrix[2][i+1] = 'L';
          tetramino.position = [[0,i],[1,i],[2,i],[2,i+1]];
        }
      break;

      case 6:
        //S
        if(this.matrix[0][i] == '-' && this.matrix[1][i] == '-' && this.matrix[1][i+1] == '-' && this.matrix[2][i+1] == '-') {
          this.matrix[0][i] = 'S';
          this.matrix[1][i] = 'S';
          this.matrix[1][i+1] = 'S';
          this.matrix[2][i+1] = 'S';
          tetramino.position = [[0,i],[1,i],[1,i+1],[2,i+1]];
        }
      break;

      case 7:
        //Z
        if(this.matrix[0][i] == '-' && this.matrix[1][i] == '-' && this.matrix[1][i-1] == '-' && this.matrix[2][i-1] == '-') {
          this.matrix[0][i] = 'Z';
          this.matrix[1][i] = 'Z';
          this.matrix[1][i-1] = 'Z';
          this.matrix[2][i-1] = 'Z';
          tetramino.position = [[0,i],[1,i],[1,i-1],[2,i-1]];
        }
      break;
    }
  }

  inicializeMatrix() {
    for(let i=0;i<this.rows;i++) {
      this.matrix[i] = new Array(this.columns);
      for(let j=0;j<this.columns;j++) {
        this.matrix[i][j] = '-';
      }
    }
  }

  show() {
    rectMode(CORNER);
    strokeWeight(3);
    for(let i=0;i<this.columns;i++) {
      for(let j=0;j<this.rows;j++) {
        switch(this.matrix[j][i]) {
          case 'I':
              fill(255, 0, 207);
              stroke(112, 0, 91);
            rect(i*(this.width/this.columns) + this.center.x - this.width/2,j*(this.height/this.rows) + this.center.y - this.height/2, (this.width/this.columns), (this.height/this.rows));
          break;
          case 'O':
              fill(0, 14, 255);
              stroke(0, 6, 112);
            rect(i*(this.width/this.columns) + this.center.x - this.width/2,j*(this.height/this.rows) + this.center.y - this.height/2, (this.width/this.columns), (this.height/this.rows));
          break;
          case 'T':
              fill(7, 222, 0);
              stroke(0, 112, 11);
            rect(i*(this.width/this.columns) + this.center.x - this.width/2,j*(this.height/this.rows) + this.center.y - this.height/2, (this.width/this.columns), (this.height/this.rows));
          break;
          case 'J':
              fill(222, 0, 0);
              stroke(130, 0, 0);
            rect(i*(this.width/this.columns) + this.center.x - this.width/2,j*(this.height/this.rows) + this.center.y - this.height/2, (this.width/this.columns), (this.height/this.rows));
          break;
          case 'L':
              fill(234, 242, 0);
              stroke(126, 130, 0);
            rect(i*(this.width/this.columns) + this.center.x - this.width/2,j*(this.height/this.rows) + this.center.y - this.height/2, (this.width/this.columns), (this.height/this.rows));
          break;
          case 'S':
              fill(242, 133, 0);
              stroke(140, 77, 0);
            rect(i*(this.width/this.columns) + this.center.x - this.width/2,j*(this.height/this.rows) + this.center.y - this.height/2, (this.width/this.columns), (this.height/this.rows));
          break;
          case 'Z':
              fill(0, 232, 224);
              stroke(0, 122, 118);
            rect(i*(this.width/this.columns) + this.center.x - this.width/2,j*(this.height/this.rows) + this.center.y - this.height/2, (this.width/this.columns), (this.height/this.rows));
          break;
        }
      }
    }

    stroke(30, 201, 76);
    strokeWeight(3);
    noFill();
    rect(this.center.x - this.width/2,this.center.y - this.height/2,this.width,this.height);
  }
}
