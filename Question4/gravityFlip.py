def gravityFlip(direction, arr):
    if (direction == 'L'):
        dir = 1
    if (direction == 'R'):
        dir = 0
    arr.sort(reverse=dir)
    return arr

if __name__ == '__main__':
    print(gravityFlip('L', [3, 2, 1, 2]))