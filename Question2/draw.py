array=["numbersgame","dots","people"]


def draw (list):
    max_element = -1
    for max in array:
        if len(max)>max_element:
            max_element=len(max)

            
    #print ("**"+ max_element +"**")
    star = "*"*max_element+"****"   
    print (star)
    for i in array:
        
        print("* " + i + " *")   
    print (star)    
        
            
draw(array)