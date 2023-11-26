import sys
import os
import numpy as np
import mysql.connector



def main():
    path = sys.argv[1]
    fileDirs = get_file_list(path)
    print("Processing files: ")
    for fileDir in fileDirs:
        print(fileDir)



def get_file_list(directory):
    contents = os.listdir(directory)
    files = []
    for e in contents:
        if (os.path.isfile(os.path.join(directory, e))):
            files.append(e)
    return files


main()