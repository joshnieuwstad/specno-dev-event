

def Question2(l):
    max_len = 0
    for word in l:
        if len(word) > max_len:
            max_len = len(word)
    print("*"*(max_len+4))
    for word in l:
        print("* ", end = "")
        #print("{1:<max_len}".format(word))
        print(word.ljust(max_len+1), end = "")
        print("*")
    print("*" * (max_len + 4))


print(Question2(['laptop', 'phone', 'charger']))
print(Question2(['word']))
print(Question2(['test', 't']))