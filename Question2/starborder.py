def starborder(wordArray):
    maxLength = len(max(wordArray, key=len))
    output = '*'*(maxLength+4) + '\n'
    for word in wordArray:
        if (word == ''):
            break
        spaces = maxLength - len(word) + 1
        output = output + '* ' + word + ' '*spaces +'*' '\n'
    
    output = output + '*'*(maxLength + 4) + '\n'
    return output


if __name__ == '__main__':
    words = ['laptop', 'phone', '']
    print(starborder(words))