BEGIN;

 DROP TABLE IF EXISTS products ,category CASCADE;
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    price integer NOT NULL,
    model integer not null,
    category_id integer FOREIGN KEY REFERENCES category(id)
);
CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
);

INSERT INTO products(name, price ,model,category_id) VALUES('BMW_M4',20000,2015,1),('Golf Gti',25000,2015,2),('BMW_X6',36000,2018,3),('Awde_A6',56000,2020,4),('Mercedes Maybach',45000,2022),('Mercedes G-class',90000,2021);
INSERT INTO category(name) VALUES('BMW'),('VW'),('BMW'),('Awde'),('Mercedes'),('Mercedes');

COMMIT;