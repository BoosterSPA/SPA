-- Create the database
CREATE DATABASE spa;

-- Use the database
USE spa;

-- Create the category table
CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

-- Create the animal table
CREATE TABLE animal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT,
    sexe VARCHAR(50),
    activite VARCHAR(255),
    caractere VARCHAR(255),
    profile_image VARCHAR(255),
    image_desc VARCHAR(255),
    medical VARCHAR(255),
    id_category INT,
    FOREIGN KEY (id_category) REFERENCES category(id)
);

CREATE TABLE user (
	id INT PRIMARY KEY AUTO_INCREMENT,
    mail VARCHAR(255),
    password VARCHAR(55),
    statut INT,
    username VARCHAR(255)
)