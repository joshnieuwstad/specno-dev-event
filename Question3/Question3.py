
l = []
def Fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return Fibonacci(n-1) + Fibonacci(n-2)

#def Xibonnacci(s,n):
#    a = []
#    if n < len(s):
#        return (s[:n])
#    if len(s) == 0 or len(s) == 1:
#        for i in range(n):
#            a.append(s[0])
#        return a

#def Xibonnaci(s,n):
#    num = 0
#    if n in s:
#        print("ok")
#        return n
#    else:
#        for j in range(len(s)):
#            num += Xibonnaci(s,n-1-j)
#        return num

def Xibonnaci(s):
    sum  = 0
    for i in range(len(s)):
        sum += s[i]
    return sum

def answer(s,n):
    sum = 0
    z = len(s)
    l = []
    if n > z:
        for k in s:
            l.append(k)
        for j in range(n-len(s)):
            for i in range(z):
                sum += s[len(s)-1-i]
            s.append(sum)
            sum = 0
        return s
    else:
        return s[:n]
print(answer([1], 5))
