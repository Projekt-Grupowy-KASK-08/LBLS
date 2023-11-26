import sys
import os
import numpy as np
import mysql.connector


def main():
    path = sys.argv[1]
    filePaths = get_file_list(path)
    connection = mysql.connector.connect(
            host="127.0.0.1",
            user="root",
            password="password",
            database="lbls"
        )
    
    cursor = connection.cursor()

    for i in range(0, len(filePaths), 2):
        filePath_ch1 = path + "/" + filePaths[i]
        filePath_ch2 = path + "/" + filePaths[i + 1] if i + 1 < len(filePaths) else None
        if filePath_ch2 == None:
            break
        insertFileToDatabase(connection, cursor, filePath_ch1, filePath_ch2)

    if cursor:
        cursor.close()

    if connection.is_connected():
        connection.close()



def get_file_list(directory):
    contents = os.listdir(directory)
    files = []
    for e in contents:
        if (os.path.isfile(os.path.join(directory, e))):
            files.append(e)
    return files


def insertFileToDatabase(connection, cursor, filePath_ch1, filePath_ch2):
    try:
        # Read data from file 1
        with open(filePath_ch1, 'rb') as file_ch1:
            data_ch1 = file_ch1.read()

        # Read data from file 2
        with open(filePath_ch2, 'rb') as file_ch2:
            data_ch2 = file_ch2.read()

        # Insert data into the database
        insert_query = "INSERT INTO mer_data (data_ch1, data_ch2, path_ch1, path_ch2) VALUES (%s, %s, %s, %s)"
        cursor.execute(insert_query, (data_ch1, data_ch2, filePath_ch1, filePath_ch2))

        # Commit the transaction
        connection.commit()

        print("Files inserted into the database successfully!")

    except mysql.connector.Error as err:
        print(f"Error: {err}")


main()