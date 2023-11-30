
-- Create the MERData table
CREATE TABLE mer_data (
    id SERIAL PRIMARY KEY,
    data_ch1 BYTEA,
    data_ch2 BYTEA,
    path_ch1 VARCHAR(255),
    path_ch2 VARCHAR(255)
);

-- Create the Label table
CREATE TABLE label (
    id SERIAL PRIMARY KEY,
    mer_data_id INT,
    label VARCHAR(255),
    label_start INT,
    label_end INT,
    channel SMALLINT NOT NULL CHECK (channel IN (1, 2)),
    FOREIGN KEY (mer_data_id) REFERENCES mer_data(id)
);