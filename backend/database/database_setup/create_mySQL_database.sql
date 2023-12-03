CREATE DATABASE IF NOT EXISTS LBLS;
USE LBLS;

-- Create the MERData table
CREATE TABLE IF NOT EXISTS mer_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_ch1 LONGBLOB,
    data_ch2 LONGBLOB,
    path_ch1 VARCHAR(255),
    path_ch2 VARCHAR(255)
);

-- Create the Label table
CREATE TABLE IF NOT EXISTS label (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mer_data_id INT,
    label VARCHAR(255),
    label_start INT,
    label_end INT,
    channel TINYINT NOT NULL CHECK (channel IN (1, 2)),
    FOREIGN KEY (mer_data_id) REFERENCES mer_data(id)
);