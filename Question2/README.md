# Star Border

Given a string array, `words`, return a string where the list of words are framed in a border made up of asterisks. The array will always contain at least one word.

### **Example 1**

```
Input: ['laptop', 'phone', 'charger']
Output:
***********
* laptop  *
* phone   *
* charger *
***********

```

### **Example 2**

```
Input: ['word']
Output:
********
* word *
********

```

### **Example 3**

```
Input: ['test', 't']
Output:
********
* test *
* t    *
********

```

## Thoughts and Processes
 //get the longest string in the array
            //create variable of the length of the longest array
            //apply same technique to workout the border length
            //add the border
            //loop through the array 
                //work out the length of each string instance "i"
                //calculate the difference in length between the longest and each instance
                //store difference as a variable and new string as a space
                //print concatenated line of resultspace with instance
            //print border
 
           
