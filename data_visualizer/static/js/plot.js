function plot(rand_data){
	rand_data=rand_data[0]
	
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
	width = 460 - margin.left - margin.right,
	height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
	const svg = d3.select("#data_plot")
  .append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
	.attr("transform", `translate(${margin.left},${margin.top})`);


	var xScale = d3.scaleLinear().domain([0, rand_data.length]).range([0, width]);
	svg.append("g")
	  .attr("transform", "translate(0," + height + ")")
	  .call(d3.axisBottom(xScale));
	  
	var yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);
	svg.append("g")
	  .call(d3.axisLeft(yScale));
	
	
	svg.append("path")
	  .datum(rand_data)
	  .attr("fill", "none")
	  .attr("stroke", "steelblue")
	  .attr("stroke-width", 1.5)
	  .attr("d", d3.line()
		.x(function(d) { return xScale(d[1]) })
		.y(function(d) { return yScale(d[0]) })
		);
}

