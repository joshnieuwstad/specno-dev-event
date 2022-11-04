# Star Border

Given a string array, `words`, return a string where the list of words are
framed in a border made up of asterisks. The array will always contain at least
one word.

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

-  Loop through the given array

-  Creating an array for capturing the length of the longest string

-  Grab the length of the longest string within the array (this string only has
   a space and a star next to it while every other string has a star and a space
   on the left and spaces and a star on the right to match the longest length)

-  create a function that loops for the same number of times as the longest
   strings length and prints a star.

-  create a function where I grab the remaining space for strings that are not
   the largest.
