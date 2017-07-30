DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT(10) NULL,
    PRIMARY KEY (item_id)
    );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Left Handed Smoke Shifter", "Camping", price, 2),
("Screen Doors for Submarines", "Transportation", price, 10),
("Dehydrated Water", "Camping", price, 100),
("Helicopter Ejection Seat", "Transportation", price, 15),
("Inflatable Dart Board", "Toys", price, 60),
("Pedal Powered Wheelchair", "Transportation", price, 3),
("Book on How to Read", "Books", price, 8),
("Dictionary Index", "Books", price, 7),
("Non-Stick Tape", "Office Supplies", price, 21),
("Highlighter Color:Black", "Office Supplies", price, 10),
("Double Sided Playing Cards", "Toys", price, 52);

SELECT * FROM products;