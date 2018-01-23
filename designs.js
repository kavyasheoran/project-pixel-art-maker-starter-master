$("#sizePicker").submit(function(event) {
	$("#pixel_canvas").empty();
	makeGrid();
	event.preventDefault();
});

function makeGrid() {
	const width=$("#input_width").val();
	const height=$("#input_height").val();

	let table=$("#pixel_canvas");
	for(let r=0; r<height; r++){
    	let tr = $("<tr>");
    	for(let c=0; c<width; c++)
        	tr.append("<td></td>");
    	table.append(tr);
	}

	const color=$("#colorPicker").val();
  	$("td").click(function() {
    	$(this).css("background",color);
  	});
}