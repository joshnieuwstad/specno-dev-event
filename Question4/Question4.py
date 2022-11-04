
l = []
def Question4(s, arr):
    if s == 'R':
        l=sorted(arr)
    elif s == 'L':
        l=sorted(arr)
        l = l[::-1]
    return l

print(Question4('R', [3, 2, 1, 2]))
print(Question4('L', [1, 1, 5, 4, 3]))
