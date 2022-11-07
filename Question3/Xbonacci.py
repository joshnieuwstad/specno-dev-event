def xbonacci(sig, n):
    sig = sig[:n]
    for j in range(n - len(sig)):
        sig.append(sum(sig[j:len(sig) + j]))

    return sig

if __name__ == '__main__':
    print(xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20))
    print(xbonacci([0, 1, 1, 0, 4], 2))
    print(xbonacci([0, 1], 10))