const table = document.getElementById("table");

fetch("http://localhost:3000/service")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });

function displayData(data) {
  data = data.filter((item) => item.role === "WATERSUPPLY");
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.contactNum}</td>
        `;
    table.appendChild(row);
  });
}
