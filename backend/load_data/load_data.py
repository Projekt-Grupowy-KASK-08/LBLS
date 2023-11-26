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
    for filePath in filePaths:
        print(path + "/" + filePath)
        insertFileToDatabase(connection, cursor, path + "/" + filePath)
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


def insertFileToDatabase(connection, cursor, filePath):
    with open(filePath, "rb") as file:
        fileData = file.read()
    query = "INSERT INTO mer_data (data) VALUES (%s)"
    cursor.execute(query, (fileData,))
    connection.commit()
    print( filePath + " inserted successfully!")


main()