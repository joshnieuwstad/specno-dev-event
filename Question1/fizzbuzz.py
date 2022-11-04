def fizzbuzz(n):
    output = ['']*(n-1)
    for i in range(1, n):
        if (i % 3 == 0 and i % 5 == 0):
            x = 'FizzBuzz'
        elif (i % 3 == 0):
            x ='Fizz'
        elif (i % 5 == 0):
            x = 'Buzz'
        else:
            x = str(i)
        output[i-1] = x
    return output

if __name__ == '__main__':
    print(fizzbuzz(15))

