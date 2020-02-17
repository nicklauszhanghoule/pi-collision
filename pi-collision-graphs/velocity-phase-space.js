function plotVelocityPhaseSpace() {
    var x = {
      x: [-1],
      y: [0],
      mode: "lines",
      type: "scatter",
      line: { color: "#1864ab" },
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
    Plotly.newPlot("velocityPhaseSpace", data, layout);
  }
  plotVelocityPhaseSpace();