function insert_Row() {
    //Write your code here
   // Get a reference to the table by its ID
  const table = document.getElementById("sampleTable");

  // Create a new row
  const newRow = table.insertRow(0); // Insert at the top (index 0)

  // Create two new cells for the new row
  const cell1 = newRow.insertCell(0); // Left cell
  const cell2 = newRow.insertCell(1); // Right cell

  // Set text for the new cells
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
  
}
