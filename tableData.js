const table = document.getElementById("table");

fetch("http://localhost:3000/getData")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });

function displayData(data) {
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            
            <td>${item.OWNER_NAME}</td>
            <td>${item.ADDRESS}</td>
            <td>${item.MOBILE_NO}</td>
            
        `;
    table.appendChild(row);
  });
}
