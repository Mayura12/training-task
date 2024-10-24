const tableViewIcon = document.getElementById("table-view");
const cardViewIcon = document.getElementById("card-view");
const productCardBody = document.getElementById("product-card-body");
const productTable = document.getElementById("product-table");

// Set default view: table view is active
tableViewIcon.classList.add("active-tab");
productCardBody.classList.add("hidden");
productTable.classList.remove("hidden");

tableViewIcon.addEventListener("click", () => {
  productCardBody.classList.add("hidden");
  productTable.classList.remove("hidden");

  // Add 'active-tab' to the table view icon and remove it from the card view icon
  tableViewIcon.classList.add("active-tab");
  cardViewIcon.classList.remove("active-tab");
});

cardViewIcon.addEventListener("click", () => {
  productTable.classList.add("hidden");
  productCardBody.classList.remove("hidden");

  // Add 'active-tab' to the card view icon and remove it from the table view icon
  cardViewIcon.classList.add("active-tab");
  tableViewIcon.classList.remove("active-tab");
});

// Sample data array for products
const products = [
  {
    id: "01",
    name: "Bluetooth Speaker",
    date: "22/07/2024",
    status: "✔️",
    color: "Red, Blue",
    price: 4500,
    quantity: 3,
    amount: 13500,
  },
  {
    id: "02",
    name: "Wireless Earbuds",
    date: "22/07/2024",
    status: "✖",
    color: "White, Blue",
    price: 8000,
    quantity: 1,
    amount: 854000,
  },
  {
    id: "03",
    name: "Wireless Earbuds",
    date: "22/07/2024",
    status: "✖",
    color: "White, Blue",
    price: 8000,
    quantity: 1,
    amount: 843000,
  },
  {
    id: "04",
    name: "Wireless Earbuds",
    date: "22/07/2024",
    status: "✖",
    color: "White, Blue",
    price: 8000,
    quantity: 1,
    amount: 802200,
  },
];

// Function to populate product cards
function populateProductCards() {
  const productCardBody = document.getElementById("product-card-body");
  productCardBody.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
        <div class="product-header">
          <div class="card-title">
            ${product.name} <div class="tooltip"><img src="./error.svg" alt="icon" /> <span class="tooltiptext"><div class="tootip-title">Product Description</div><br/>Portable speaker with powerful sound and long battery life.</span> </div>

          </div>
          <div class="actions">
            <button class="edit-btn">
              <img src="./edit.svg" alt="edit" />
            </button>
            <button class="delete-btn">
              <img src="./Combined Shape.svg" alt="delete" />
            </button>
          </div>
        </div>
        <div class="product-details">
          <div class="left-side">
            <div>
              <span class="title-cards-details">ID</span>
              <span class="data-cards-details">${product.id}</span>
            </div>
            <div>
              <span class="title-cards-details">Status</span>
              <span class="status">${product.status}</span>
            </div>
            <div>
              <span class="title-cards-details">Quantity</span>
              <span class="data-cards-details">${product.quantity}</span>
            </div>
            <div>
              <span class="title-cards-details">Amount</span>
              <span class="data-cards-details">${product.amount}</span>
            </div>
          </div>
          <div class="right-side">
            <div>
              <span class="title-cards-details">Product Date</span>
              <span class="data-cards-details">${product.date}</span>
            </div>
            <div>
              <span class="title-cards-details">Color Option</span>
              <span class="data-cards-details">${product.color}</span>
            </div>
            <div>
              <span class="title-cards-details">Price</span>
              <span class="data-cards-details">${product.price}</span>
            </div>
          </div>
        </div>
      `;

    productCardBody.appendChild(productCard);
  });
}

// Function to populate product table
function populateProductTable() {
  const productTableBody = document.querySelector("#product-table tbody");
  productTableBody.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
        <td>${product.id}</td>
        <td>${
          product.name
        } <div class="tooltip"><img src="./error.svg" alt="icon" /> <span class="tooltiptext"><div class="tootip-title">Product Description</div><br/>Portable speaker with powerful sound and long battery life.</span> </div></td>
        <td>${product.date}</td>
        <td><span class="status ${
          product.status === "✔️" ? "success" : "fail"
        }">${product.status}</span></td>
        <td>${product.color}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.amount}</td>
        <td>
          <button class="action-btn edit">
            <img src="./edit.svg" alt="edit" />
          </button>
          <button class="action-btn delete">
            <img src="./Combined Shape.svg" alt="delete" />
          </button>
        </td>
      `;

    productTableBody.appendChild(tableRow);
  });
}

// Call functions to populate data
populateProductCards();
populateProductTable();

const addRecordButton = document.querySelector(".add-button");
const formContainer = document.getElementById("form-container");
const cancelButton = document.querySelector(".cancel-btn");

// Add click event to the button
addRecordButton.addEventListener("click", () => {
  formContainer.classList.add("visible"); // Toggle the 'visible' class
});

cancelButton.addEventListener("click", () => {
  formContainer.classList.toggle("visible"); // Add the hidden class to hide the form
});

// Calculate and update the amount field based on quantity and price inputs
const updateAmount = () => {
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(docuxment.getElementById("quantity").value);
  const amount = price * quantity;
  document.getElementById("amount").value = amount;
};

// Add event listeners to automatically update amount when quantity or price changes
document.getElementById("quantity").addEventListener("input", updateAmount);
document.getElementById("price").addEventListener("input", updateAmount);
// Function to add new product to the array and update UI
addRecordButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission if it's a standard form

  // Collect form data
  const id = document.getElementById("id").value;
  const name = document.getElementById("product-name").value;
  const description = document.getElementById("product-description").value;
  const date = document.getElementById("date").value;

  // Determine status symbol based on selected status
  const statusValue = document.querySelector(
    'input[name="status"]:checked'
  ).value;
  const status = statusValue === "available" ? "✔️" : "✖";

  // Get selected colors
  const colorElements = document.querySelectorAll(
    'input[name="color"]:checked'
  );
  const colors = Array.from(colorElements).map((el) => el.value);

  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const amount = parseFloat(document.getElementById("amount").value);

  // Create a new product object
  const newProduct = {
    id: id,
    name: name,
    date: date,
    status: status, // Use the status symbol
    colors: colors.join(", "), // Convert array to string
    price: price,
    quantity: quantity,
    amount: amount,
  };

  // Add the new product to the products array
  products.push(newProduct);

  // Update the product cards and table
  populateProductCards();
  populateProductTable();

  // Clear the form fields and reset default values
  document.querySelector(".add-record-form").reset();

  // Hide the form container
  formContainer.classList.add("hidden");
});
