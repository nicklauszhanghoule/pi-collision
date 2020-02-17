class block {
  constructor(canvas, x, y, size, mass, v) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.mass = mass;
    this.size = size;
    this.canvas = canvas;
    this.collisions = 0;
  }
  drawBlockOne(ctx) {
    ctx.fillStyle = "#1864ab";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.textAlign = "center";
    ctx.font = "18px Open Sans";
    ctx.fillStyle = "#f8f9fa";
    ctx.fillText(this.mass, this.x + this.size / 2, 180);
  }
  drawBlockTwo(ctx) {
    ctx.fillStyle = "#5f3dc4";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.textAlign = "center";
    ctx.font = "18px Open Sans";
    ctx.fillStyle = "#f8f9fa";
    ctx.fillText(this.mass, this.x + this.size / 2, 180);
  }
  update() {
    this.x += this.v;
  }
  reverse() {
    if (this.x < 0) {
      this.v *= -1;
      this.collisions++;
    }
  }
  collide(other) {
    if (this.x + this.size > other.x) {
      let v1 = this.bounce(other);
      let v2 = other.bounce(this);
      b1.v = v1;
      b2.v = v2;
      this.collisions++;
    }
  }
  bounce(other) {
    let totalMass = this.mass + other.mass;
    let v = ((this.mass - other.mass) / totalMass) * this.v + ((2 * other.mass) / totalMass) * other.v;
    return v;
  }
}
