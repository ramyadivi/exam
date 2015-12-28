function addColumn() {    

 var tblHeadObj = document.getElementById('my_table').tHead; //table head
 for (var h=0; h< tblHeadObj.rows.length; h++) {
  var newTH = document.createElement('th');
  tblHeadObj.rows[h].appendChild(newTH); //append ne th to table
  newTH.innerHTML = 'Column '+ (tblHeadObj.rows[h].cells.length); //append th content to th
 }

 var tblBodyObj = document.getElementById('my_table').tBodies[0]; //table body
 for (var i=0; i< tblBodyObj.rows.length; i++) {
  var newCell = tblBodyObj.rows[i].insertCell(-1); //create new cell
  newCell.innerHTML = 'cell '+ (tblBodyObj.rows[i].cells.length); //append data to cell
 }
}
function deleteColumn() {    
 var allRows = document.getElementById('my_table').rows;
 for (var i=0; i< allRows.length; i++) {
  if (allRows[i].cells.length > 3) {
   allRows[i].deleteCell(-1); //delete the cell
  } else {
   alert("You can't delete more columns.");
   return;
  }
 }
}

