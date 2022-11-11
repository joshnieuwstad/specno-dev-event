def Xbonacci(signature,n):
    if n < len(signature):
        return signature[0:n]
    array = signature
    X = len(signature)
    current_sum = sum(array)
    for i in range(n-len(array)):
        array.append(current_sum)
        current_sum += array[-1]
        current_sum -= array[len(array)-X-1]
    return array

# So the immediate different here is that theres only one for loop right.
# Most people tend to use two. While using two is a perfectly valid solution
# it becomes problematic when our signature is very long. Imagine n=10^9 or some ridiculously
# large number and our length(signature)=10^6 or something. We then have two loops, one that is going to run 1 billion times
# and the inner loop is going to run over 1 million numbers. You can see why this is a problem xD 
# With this solution, all we are doing is looking at the beginning and end of our 'sliding window' and simply
# adding the latest value and subtracting the last value to calculate our next number in the sequence.  