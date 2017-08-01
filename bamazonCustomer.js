const mysql = require('mysql'); // mysql package to connect to and query the DB
const inquirer = require('inquirer'); // inquirer package for prompting the user
// Connection information to connect to the DB
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// Connect to the DB
connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId);
});
// Start running our program
start();

// Function for updating stock quantity after purchase
function updateStock(itemID, countChange) {
  connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [countChange, itemID], function(error) {
  if (error) throw error;
  console.log("Transaction Complete");
  });
};

// Function to show the available products and get the user purchase
function start() {
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Price: $" + res[i].price);
    }
  })
  inquirer.prompt([ // User inputs
      {
        type: "input",
        name: "customerSelect",
        message: "\nWelcome to BAMAZON.  Please enter the item id of the product you would like to purchase.\n"
      },
      {
        type: "input",
        name: "customerQuantity",
        message:  "How many of this item would you like to purchase?"
      }
    ]).then(function(answer){
      connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [answer.customerSelect], function(error, res) {
        if (error) throw error;
        console.log(res);
        if (res[0].stock_quantity >= parseInt(answer.customerQuantity)) {
          updateStock(answer.customerSelect, answer.customerQuantity);  // Updates stock to reflect purchase
          start(); // Restart app
        }
        else { // if insufficient stock, prevent the transaction and restart the prompt
          console.log("Insufficient Quantity");
          start();
        }
      });
    });
  };
