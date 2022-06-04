let tableRef =  document.querySelector('#myTable > tbody');


for (let rowNumber = 1 ; rowNumber <= 100; rowNumber++) {
  let newRow = tableRef.insertRow();
  newRow.insertCell().textContent = rowNumber;         // serial
  newRow.insertCell().textContent = rowNumber * 2 - 1; // odd
  newRow.insertCell().textContent = rowNumber * 2;     // even
 
}

