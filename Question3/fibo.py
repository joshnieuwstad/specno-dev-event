# ask the user for the n:number

number_terms = int(input("How many terms? "))

def fibo(num_terms):
    # first two terms
    n1, n2 = 0, 1
    count = 0

    # check if the number of terms is valid
    if num_terms <= 0:
        print("Please enter a positive integer")
    # if there is only one term, return n1
    elif num_terms == 1:
        print("Fibonacci sequence upto",num_terms,":")
        print(n1)
    # generate fibonacci sequence
    else:
        print("Fibonacci sequence:")
    while count < num_terms:
        print(n1)
        nth = n1 + n2
        # update values
        n1 = n2
        n2 = nth
        count += 2

fibo(number_terms)        