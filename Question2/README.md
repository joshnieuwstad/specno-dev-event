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
- Initially didn't look complicated but soon found that the borders needed to be in line. 
- So had to find the length of longest word in order to build the borders.
- Then I could generate the top and bottom borders based on the length of the longest word + 4 for the left and right border. The four comes from the * and space before and after the longets word.
- After I had the top and bottom borders, I can loop through the array and add `* word *` to the output.
- This presented the next challenge, how many spaces to add after the word.
- The number of spaces could then be calculated based on the max length of the word - the length of the current word + 1
- After that I can add tehe bottom border.