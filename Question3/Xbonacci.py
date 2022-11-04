def xbonacci(sig, n):
    sigLength = len(sig)
    if (n < sigLength):
        sig = sig[:len(sig) - (sigLength - n)]
    
    for j in range(n - sigLength):
            nextDigit = 0
            for i in range(j, sigLength + j):
                nextDigit += sig[i]
            sig.append(nextDigit)

    return sig

if __name__ == '__main__':
    print(xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20))