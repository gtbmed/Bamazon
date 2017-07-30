const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: ""
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
};

function start() {
  connection.query("SELECT item_id, product_name, prices FROM products WHERE");
  inquirer
    .prompt([
      {
        type: input,
        name: customerSelect,
        message: "Welcome to BAMAZON.  Please enter the item id of the product you would like to purchase."
      }
    ])
}
