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

Step 1: found the length of the longest word and added 4 to it.
Step 2: used this length to repeat asterisks to create the top and bottom border of the output.
Step 3: used a for loop and the function padEnd() to format the strings.

There are some edge cases though: such as if the input array is empty or if one of the strings in the array is empty.
