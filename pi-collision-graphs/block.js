class block {
  constructor(x, size, mass, v) {
    this.x = x;
    this.v = v;
    this.mass = mass;
    this.size = size;
  }
  update() {
    this.x += this.v;
  }
  reverse() {
    if (this.x < 0) {
      this.v *= -1;
      Plotly.extendTraces(velocityPhaseSpace, { y: [[b1.v]], x: [[b2.v]] }, [0]);
      Plotly.extendTraces(positionPhaseSpace, { y: [[b1.x]], x: [[b2.x]] }, [0]);
    }
  }
  collide(other) {
    if (this.x + this.size > other.x) {
      let v1 = this.bounce(other);
      let v2 = other.bounce(this);
      b1.v = v1;
      b2.v = v2;
      Plotly.extendTraces(velocityPhaseSpace, { y: [[b1.v]], x: [[b2.v]] }, [0]);
      Plotly.extendTraces(positionPhaseSpace, { y: [[b1.x]], x: [[b2.x]] }, [0]);
    }
  }
  bounce(other) {
    let totalMass = this.mass + other.mass;
    let v = ((this.mass - other.mass) / totalMass) * this.v + ((2 * other.mass) / totalMass) * other.v;
    return v;
  }
}
