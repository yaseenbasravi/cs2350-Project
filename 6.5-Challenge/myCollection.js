// Array of books
var books = [
    {title: 'The Design of EveryDay Things', author: 'Don Norman', alreadyRead: false},
    {title: 'The Most Human Human', author: 'Brian Christian', alreadyRead: true}
  ];
  
  // Function to create and append the table
  function createTable() {
    var table = document.createElement("table");
    var thead = table.createTHead();
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
  
    // Create table headers dynamically
    var headers = Object.keys(books[0]);
    headers.forEach(function(header) {
      var th = document.createElement("th");
      th.textContent = header;
      thead.appendChild(th);
    });
  
    // Populate table with book data
    books.forEach(function(book) {
      var tr = document.createElement("tr");
      Object.values(book).forEach(function(value) {
        var td = document.createElement("td");
        if (typeof value === "boolean") {
          var img = document.createElement("img");
          img.src = value ? "checked.png" : "unchecked.png";
          img.addEventListener("click", toggleRead);
          img.style.width = "20px"; // Set width to 20 pixels
          img.style.height = "20px"; // Set height to 20 pixels
          td.appendChild(img);
        } else {
          td.textContent = value;
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  
    // Append the table to the body
    document.body.appendChild(table);
  }
  
  // Function to toggle read/unread status
  function toggleRead() {
    var img = this;
    img.src = img.src.endsWith("checked.png") ? "unchecked.png" : "checked.png";
  }
  
  // Call function to create and append the table
  createTable();
  