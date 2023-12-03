import sys
import os
import pandas as pd
import numpy as np

def main():
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    reduction_rate = int(sys.argv[3])


    filePaths = get_file_list(input_path)

    for i in range(0, len(filePaths), 2):
        fileName_ch1 = filePaths[i]
        fileName_ch2 = filePaths[i+1]
        filePath_ch1 = os.path.join(input_path, filePaths[i])
        filePath_ch2 = os.path.join(input_path, filePaths[i + 1]) if i + 1 < len(filePaths) else None
        if filePath_ch2 is None:
            break
        ch1 = pd.read_csv(filePath_ch1)
        ch2 = pd.read_csv(filePath_ch2)
        reduce_csv_file(ch1, reduction_rate).to_csv(os.path.join(output_path, fileName_ch1), index=False)
        reduce_csv_file(ch2, reduction_rate).to_csv(os.path.join(output_path, fileName_ch2), index=False)
        


def get_file_list(directory):
    contents = os.listdir(directory)
    files = [e for e in contents if os.path.isfile(os.path.join(directory, e))]
    return files

def reduce_csv_file(file, reduction_rate):
    reduced_file = file.iloc[::reduction_rate]
    return reduced_file


if __name__ == "__main__":
    main()