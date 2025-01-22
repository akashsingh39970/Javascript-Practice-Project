// extracting the Dom elements
const btn = document.getElementById('btn');
const csv = document.getElementById('csv');
const table = document.getElementById('table');


// File Upload and Content Reading
csv.addEventListener('change', (event) =>{
//   console.log(event.target.files[0]); 
  const file = event.target.files[0];


  if(file.type !== 'text/csv'){
    alert('Please upload a CSV file');
    csv.value = '';
    return;
  }
    
    const reader = new FileReader();

    // Reading the Content
    reader.onload = (e) => {
    const content = (e.target.result);

    // Splitting the Content and Converting
    const rows = content.split('\n').map(row => row.split(','));
    // console.log(rows);
   
    // Displaying the Content in the Table
    table.innerHTML = '';
    for (let i = 0 ; i < rows.length; i++){
      let tr = document.createElement('tr');
      for(let j = 0; j< rows[i].length; j++){
        let td = document.createElement('td');
        td.textContent = rows[i][j];
        tr.appendChild(td);
      }
        table.appendChild(tr);
    }
  }
    // Error Handling
    reader.onerror = (e) => {
        alert('Error reading file:', e);
      };

      // Read the file as text
    reader.readAsText(file);
})

// Exporting the Content


btn.addEventListener('click', () =>{
  const rows = document.querySelectorAll('#table tr');
  let csvContent = '';
  console.log(rows.length);
  for(let i = 0; i< rows.length; i++){
    let row = rows[i];
    let cols = row.querySelectorAll('td');
    let rowContent = '';
  for(let j = 0; j < cols.length; j++)
  {
    let col = cols[j];
    rowContent += col.textContent + ',';
    
  }
  csvContent += rowContent.slice(0, -1) + '\n';
  }

  // Creating a Blob
  const blob = new Blob([csvContent], {type: 'text/csv'})
  // createing a teamperorly URL
  const url = window.URL.createObjectURL(blob);
  // Creating a link
  const a = document.createElement('a');
  a.href = url;
  a.download = 'exported_data.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  

})
