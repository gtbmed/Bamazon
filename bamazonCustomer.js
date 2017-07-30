const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Sc00t3rmysql",
  database: "bamazon"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId);
};

function start() {
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Price: $" + res[i].price);
    }
  }
  inquirer
    .prompt([
      {
        type: input,
        name: customerSelect,
        message: "Welcome to BAMAZON.  Please enter the item id of the product you would like to purchase."
      }
    ])
}

start();
