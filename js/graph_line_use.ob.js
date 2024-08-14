var _$_85d1 = [
  "top",
  "center",
  "bold",
  "calibri",
  "dimGrey",
  "line",
  "Float",
  "f(x)",
  "Chart",
  "render",
];
function graphline(_0xD9B9, _0xD9A9, _0xD9C9, _0xD9D9) {
  var _0xD999 = new CanvasJS[_$_85d1[8]](_0xD9B9, {
    backgroundColor: "transparent",
    zoomEnabled: true,
    toolTip: { shared: false },
    legend: {
      verticalAlign: _$_85d1[0],
      horizontalAlign: _$_85d1[1],
      fontSize: 14,
      fontWeight: _$_85d1[2],
      fontFamily: _$_85d1[3],
      fontColor: _$_85d1[4],
    },
    axisY: {
      title: _0xD9D9,
      includeZero: false,
      interval: 1, // Ensures that only integer values are displayed on the Y-axis
      valueFormatString: "#0", // Formats the Y-axis labels as integers
    },
    axisX: {
      title: _0xD9C9,
      interval: 1, // Ensures that only integer values are displayed on the X-axis
      valueFormatString: "#0", // Formats the X-axis labels as integers
    },
    data: [
      {
        type: _$_85d1[5],
        xValueType: _$_85d1[6],
        showInLegend: true,
        name: _$_85d1[7],
        markerSize: 10, // Markers are hidden by default
        // toolTipContent: "{a<sub>n</sub>}: {n}", // Displays the tooltip with markers
        dataPoints: _0xD9A9,
        // mouseover: function (e) {
        //   e.dataSeries.markerSize = 5;
        //   e.chart.render();
        // }, // Show markers on hover
        // mouseout: function (e) {
        //   e.dataSeries.markerSize = 0;
        //   e.chart.render();
        // }, // Hide markers when not hovering
      },
    ],
  });
  _0xD999[_$_85d1[9]]();
}
