import itertools

def write_combinations_to_file(filename, max_length):
    with open(filename, 'w') as file:
        for length in range(4, max_length + 1):
            for combination in itertools.product('1234567890', repeat=length):
                file.write(''.join(combination) + '\n')

write_combinations_to_file('combinations.txt', 8)
