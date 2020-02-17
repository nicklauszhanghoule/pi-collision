function plotPositionPhaseSpace() {
  var x = {
    x: [null],
    y: [null],
    mode: "lines",
    type: "scatter",
    name: "Position of Block 1 & Block 2",
    line: { color: "#1864ab" }
  };
  var data = [x];
  var layout = {
    title: {
      text: "Position Phase Space",
      font: {
        family: "Courier New, monospace",
        size: 24
      },
      xref: "paper",
      x: 0.05
    },
    xaxis: {
      title: {
        text: "Position of Block 2",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f"
        }
      }
    },
    yaxis: {
      title: {
        text: "Position of Block 1",
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f"
        }
      }
    }
  };
  Plotly.newPlot("positionPhaseSpace", data, layout);
}
plotPositionPhaseSpace();
