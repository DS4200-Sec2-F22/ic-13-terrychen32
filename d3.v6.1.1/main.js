// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 50, left: 70}

// vis dimensions
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.left - MARGINS.right;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.top - MARGINS.bottom; 

const FRAME1 = d3.select("#vis1")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame")
                    .append('g')
		.attr('transform', 'translate(' + MARGINS.left + ',' + MARGINS.top + ')');