$(document).ready(function() {
    //Implementation to Set the grid and current color to #000
    let  theGrid = $("#pixelCanvas");
    let  currentColor = "#000";
    
    //Implementation to Build the grid
   function makeGrid() {
    //Set the grid dimensions;
    let  gridHeight = $("#inputHeight").val();
    let  gridWidth = $("#inputWidth").val();
   theGrid.empty(); //Empty the grid and start over
   
   //Implementation to  Create rows
    for (let  rows = 0; rows <= gridHeight - 1; rows++) {
      theGrid.append("<tr>"); //Start Row

      //Implementation to  Create columns for each row
      for (let  columns = 0; columns <= gridWidth - 1; columns++) {
        $("tr:eq(" + rows + ")").append("<td></td>");
      }
      theGrid.append("</tr>"); //End Row
    }
  }
  makeGrid();

    // Prevent default submit behavior and call makeGrid function
    $("#sizePicker").submit(function(e) {
      e.preventDefault();
      makeGrid();
    });
   
    //Change the currentColor to the selected one
    $("#colorPicker").change(function() {
      currentColor = $(this).val();
    });

   theGrid.on("click", "td", function(e) {
      $(this).css("background-color", currentColor); //added color to grid
    });

    theGrid.on("dblclick", "td", function(e) {
        $(this).css("background-color", ""); //remove colored grid on double-click
      });

   
});