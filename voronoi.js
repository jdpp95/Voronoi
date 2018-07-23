/*console.log("Running...");

h1 = document.getElementById("h01");
h1.style.color = "blue";
*/

function draw()
{
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        sites = d3.range(100).map(function(d) {
          return [Math.random() * width, Math.random() * height];}),
        voronoi = d3.voronoi().extent([[0, 0],[width, height]]),
        //relaxedSites = voronoi(sites).polygons().map(d3.polygonCentroid),
        diagram = voronoi(sites),
        polygons = diagram.polygons(),
        color = d3.scaleSequential(d3.interpolateSpectral);

    polygons.map(function(i, d) {
      svg.append("path").attr("d", "M" + i.join("L") + "Z").attr("fill",color(d/1000));
    });
}