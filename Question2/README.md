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
l am thinking of creating a function then within that function,i am thinking of first determining the biggest word within a list then take note of the number of characters in that word.This number of characters will determine the top line of stars after adding four more characters (*), this will account for width of the box.The left height is easy i will hard code the star in the print statement.The only part i am left with is the right side of the box.I will iterate through the list that i have passed as a parameter
then print the list within the box.
