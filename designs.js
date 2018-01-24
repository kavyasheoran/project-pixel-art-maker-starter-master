// selecting size input
const row_input = $("#input_height");
const col_input = $("#input_width");

//when size is submitted by the user, makeGrid() is called
$("#sizePicker").submit(function(event) {
	$("#pixel_canvas").empty();
	makeGrid();
	event.preventDefault();
});

// grid generation based on user input
function makeGrid() {
	let row_count = row_input.val();
	let col_count = col_input.val();

	let table=$("#pixel_canvas");
	for(let r=0; r<row_count; r++){
    	let tr = $("<tr>");
    	for(let c=0; c<col_count; c++)
        	tr.append("<td></td>");
    	table.append(tr);
	}

  	$("td").click(function(){
     	const color = $("#colorPicker").val();
    	$(this).css("background-color", color);
	});
}