import sys
import os
import numpy as np


def main():
    print("Starting formatting")
    path = sys.argv[1]
    new_dir = sys.argv[2]
    os.mkdir(new_dir)
    files = get_file_list(path)
    print("Processing files: ")
    for file in files:
        print(file)
        format_file(path, file, new_dir)


def get_file_list(directory):
    contents = os.listdir(directory)
    files = []
    for e in contents:
        if (os.path.isfile(os.path.join(directory, e))):
            files.append(e)
    return files


# I legitimately have no idea why there is an offset, but this seems to work
def read_from_dat_file(filepath, encoding=np.int16, offset=0x0000025C):
    return np.fromfile(filepath, dtype=encoding, offset=offset)


def format_file(old_dir, file, new_dir):
    data = read_from_dat_file(os.path.join(old_dir, file))
    new_file_name = file + "_formatted.csv"
    new_file_path = os.path.join(new_dir, new_file_name)
    np.savetxt(new_file_path, data, delimiter=',')


main()
