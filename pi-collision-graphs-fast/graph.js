function plotPhaseSpace() {
  var x = {
    x: [-1],
    y: [0],
    mode: "lines",
    type: "scatter",
    line: { color: "#1864ab" },
    name: "Block 1"
  };
  var data = [x];
  var layout = {
    title: {
      text: "Velocity Phase Space",
      font: {
        family: "Courier New, monospace",
        size: 24
      },
      xref: "paper",
      x: 0.05
    },
    xaxis: {
      title: {
        text: "Velocity 2",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f"
        }
      }
    },
    yaxis: {
      title: {
        text: "Velocity 1",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f"
        }
      }
    }
  };
  Plotly.newPlot("graph", data, layout);
}
plotPhaseSpace();

let m1 = 1;
let m2 = 100;
function getData() {
var Main = (function () {
    function Main() {
    }
    Main.main = function (args) {

        var b1 = new Block(0, m1);
        var b2 = new Block(-1, m2);
        while ((true)) {
            {
                if (b1.getVelocity() < 0) {
                    b1.Reverse();
                    Plotly.extendTraces(graph, { y: [[b1.getVelocity()]], x: [[b2.getVelocity()]] }, [0]);

                }
                if (b2.getVelocity() < b1.getVelocity()) {
                    b2.Collide(b1);
                    Plotly.extendTraces(graph, { y: [[b1.getVelocity()]], x: [[b2.getVelocity()]] }, [0]);
                }
                else {
                    b2.Collide(b1);
                    break;
                }
            }
        }
        ;
    };
    return Main;
}());
Main["__class"] = "Main";
var Block = (function () {
    function Block(velocity, mass) {
        if (this.velocity === undefined)
            this.velocity = 0;
        if (this.mass === undefined)
            this.mass = 0;
        this.velocity = velocity;
        this.mass = mass;
    }
    Block.prototype.getVelocity = function () {
        return this.velocity;
    };
    Block.prototype.setVelocity = function (velocity) {
        this.velocity = velocity;
    };
    Block.prototype.getMass = function () {
        return this.mass;
    };
    Block.prototype.setMass = function (mass) {
        this.mass = mass;
    };
    Block.prototype.Collide = function (other) {
        var v1 = other.velocity;
        var v2 = this.velocity;
        other.velocity = ((other.mass - this.mass) / (other.mass + this.mass)) * v1 + ((2 * this.mass) / (other.mass + this.mass)) * v2;
        this.velocity = ((2 * other.mass) / (other.mass + this.mass)) * v1 + ((this.mass - other.mass) / (other.mass + this.mass)) * v2;
    };
    Block.prototype.Reverse = function () {
        this.velocity *= -1;
    };
    return Block;
}());
Block["__class"] = "Block";
Main.main(null);
}

//m1 = x m2 = y
//reset graphs
getData();

function update() {
  plotPhaseSpace();
  getData();
}
