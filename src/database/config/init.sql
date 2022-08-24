BEGIN;

 DROP TABLE IF EXISTS products ,category CASCADE;
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    price integer NOT NULL,
    
    category_id integer FOREIGN KEY REFERENCES category(id)
);
CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
);

INSERT INTO products(name, price ,model,category_id) VALUES(),(),(),(),(),();
INSERT INTO category(name) VALUES('BMW'),('VW'),('BMW'),('Awde'),('Mercedes'),('Mercedes');

COMMIT;