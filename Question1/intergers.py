number = int(input("Enter an integer:"))
array1=[]
array2=[]

for i in range(1,number+1):
    array1.append(i)
for m in array1:
    
    if m%3==0 and m%5==0:  
        
        array2.append("FizzBuzz")
    elif m%5==0:
        array2.append("Buzz")
    elif m%3==0:
        array2.append("Fizz") 
          
    else:
        array2.append(m)     
print(array2)
       

"""
def insert_elemnt_nth(list, element, index):
    result = []
    
    for i in range(0, len(list), index):
        if number%3==0:
            result.extend(list[i:i+index])
            result.append(element)
    result.pop()    
    return result      


word1= "Fizz"
word2="Buzz"
index1=3
index2=5

number=[1,2,3,4,5,6,7,8,9]
print(number[3] = 'Fizz') 
print(insert_elemnt_nth(number,word1,index1))
"""