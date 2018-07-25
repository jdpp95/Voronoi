/*console.log("Running...");

h1 = document.getElementById("h01");
h1.style.color = "blue";
*/

var width = 1000, height = 1000;

function draw()
{
    var svg = d3.select("svg"),
        sites = d3.range(1000).map(function(d) {
          return [Math.random() * width, Math.random() * height];}),
        voronoi = d3.voronoi().extent([[0, 0],[width, height]]),
        //relaxedSites = voronoi(sites).polygons().map(d3.polygonCentroid),
        diagram = voronoi(sites),
        polygons = diagram.polygons(),
        color = d3.scaleSequential(d3.interpolateSpectral);


    polygons.map(function(i, d) {
      //console.log("d = "+d);
      r = Math.round(Math.random()*256 - 0.5);
      g = Math.round(Math.random()*256 - 0.5);
      b = Math.round(Math.random()*256 - 0.5);
      //r = 5, g = 55, b = 201;
      //console.log("rgb(" + r + "," + g + "," + b + ")");
      svg.append("path")
      .attr("d", "M" + i.join("L") + "Z")
      .attr("fill","rgb(" + r + "," + g + "," + b + ")")
      .attr("style","stroke:black;");
    });
}

function toPNG(){
    var mySVG= document.getElementById('voronoi'),      // Inline SVG element
        tgtImage = document.getElementById('vor-img'),      // Where to draw the result
        can      = document.createElement('canvas'), // Not shown on page
        ctx      = can.getContext('2d'),
        loader   = new Image;                        // Not shown on page

    loader.width  = can.width  = tgtImage.width = width;
    loader.height = can.height = tgtImage.height = height;
    //console.log("Dimensions: ", loader.width, loader.height);
    loader.onload = function(){
    ctx.drawImage( loader, 0, 0, loader.width, loader.height );
      tgtImage.src = can.toDataURL();
    };
    console.log(tgtImage.src);
    var svgAsXML = (new XMLSerializer).serializeToString( mySVG );
    loader.src = 'data:image/svg+xml,' + encodeURIComponent( svgAsXML );
}