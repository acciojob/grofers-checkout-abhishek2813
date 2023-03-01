const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	var table = document.getElementById("myTable"),
  sumVal = 0;
for (var i = 1; i < table.rows.length; i++) {
  sumVal = sumVal + parseFloat(table.rows[i].cells[1].innerHTML);
}
  let row = table.insertRow(-1); // We are adding at the end
   
      // Create table cells
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      
   
      // Add data to c1 and c2
      c1.innerText = "total price"
      c2.innerText = sumVal

};

getSumBtn.addEventListener("click", getSum);

