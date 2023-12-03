import sys
import os
import psycopg2

def main():
    path = sys.argv[1]
    filePaths = get_file_list(path)
    

    db_params = {
        'host': 'dpg-clj14qfjc5ks739c93g0-a.frankfurt-postgres.render.com',
        'database': 'lbls',
        'user': 'root',
        'password': 'laHppF8JhJxKvVuaLVQMcyXp25qwS2OW',
        'port': '5432', 
        'sslmode': 'require'
    }

    connection = psycopg2.connect(**db_params)
    cursor = connection.cursor()

    for i in range(0, len(filePaths), 2):
        filePath_ch1 = os.path.join(path, filePaths[i])
        filePath_ch2 = os.path.join(path, filePaths[i + 1]) if i + 1 < len(filePaths) else None
        if filePath_ch2 is None:
            break
        insert_file_to_database(connection, cursor, filePath_ch1, filePath_ch2)
    
    if cursor:
            cursor.close()

    if connection:
        connection.close()
        

def get_file_list(directory):
    contents = os.listdir(directory)
    files = [e for e in contents if os.path.isfile(os.path.join(directory, e))]
    return files


def insert_file_to_database(connection, cursor, filePath_ch1, filePath_ch2):
    try:
        # Read data from file 1
        with open(filePath_ch1, 'r') as file_ch1:
            data_ch1 = file_ch1.read()

        # Read data from file 2
        with open(filePath_ch2, 'r') as file_ch2:
            data_ch2 = file_ch2.read()

        # Insert data into the database
        insert_query = "INSERT INTO mer_data (data_ch1, data_ch2, path_ch1, path_ch2) VALUES (%s, %s, %s, %s)"
        cursor.execute(insert_query, (data_ch1, data_ch2, filePath_ch1, filePath_ch2))

        # Commit the transaction
        connection.commit()

        print("Files inserted into the database successfully!")

    except psycopg2.Error as err:
        print(f"Error: {err}")


if __name__ == "__main__":
    main()