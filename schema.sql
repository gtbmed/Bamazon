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
("Left Handed Smoke Shifter", "Camping", 1000, 2),
("Screen Doors for Submarines", "Transportation", 5000, 10),
("Dehydrated Water", "Camping", 33, 100),
("Helicopter Ejection Seat", "Transportation", 62, 15),
("Inflatable Dart Board", "Toys", 5, 60),
("Pedal Powered Wheelchair", "Transportation",650, 3),
("Book on How to Read", "Books", 19, 8),
("Dictionary Index", "Books", 15, 7),
("Non-Stick Tape", "Office Supplies", 5, 21),
("Highlighter Color:Black", "Office Supplies", 1, 10),
("Double Sided Playing Cards", "Toys", 3, 52);

SELECT * FROM products;
