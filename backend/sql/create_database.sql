CREATE DATABASE IF NOT EXISTS LBLS;
USE LBLS;

-- Create the MERData table
CREATE TABLE IF NOT EXISTS mer_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data LONGBLOB
);

-- Create the Label table
CREATE TABLE IF NOT EXISTS label (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mer_data_id INT,
    label VARCHAR(255),
    label_start INT,
    label_end INT,
    FOREIGN KEY (mer_data_id) REFERENCES mer_data(id)
);