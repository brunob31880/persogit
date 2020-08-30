var tape = require("tape"),
    geometric = require("../");

tape("polygonCentroid(polygon) calculates the weighted centroid of a polygon", function(test) {
  var p0 = geometric.polygonCentroid([[0, 0], [1, 0], [1, 1], [0, 1]]);
  var p1 = geometric.polygonCentroid([[0, 0], [2, 0], [2, 2], [0, 2]]);
  var p2 = geometric.polygonCentroid([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]);
  var p3 = geometric.polygonCentroid([[0, 0], [2, 0], [2, 2], [0, 2], [0, 0]]);
  test.equal(p0[0], 0.5);
  test.equal(p0[1], 0.5);
  test.equal(p1[0], 1);
  test.equal(p1[1], 1);
  test.equal(p2[0], 0.5);
  test.equal(p2[1], 0.5);
  test.equal(p3[0], 1);
  test.equal(p3[1], 1);
  test.end();
});