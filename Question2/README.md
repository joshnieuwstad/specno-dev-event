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
Input:
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
- My first thought was how are we going to find 
the number of the top and the bottom astriks.
I saw that the largest character in the array is 4 character length less than the top and bottom astrieks. So created the bottom and top array that is 4 characters more.

Started by printing the first left side of the word with ,
for instance console logged "* test". when I have this we can find how much space is availble in front of the character.

to find the remaining the remaining space we did this  
remainingSpace=MaxAstrieks.length - "*|one-space|word".length

and then used emptyString.repeat(remainingSpace-1) create the remaining space.
then added the astrikes

