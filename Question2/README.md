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

["t"]

*****
* t *
*****

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

First I counted how many stars are there based on the length of the word. 
The spacing at the top and bottom is the length of the word + 4 stars

- The words in each line all start with star and a space
- The words are all filled with blank spaces at the end to the length of the longest word.
- The line is then ended with a space and a star

### First function

Here we need to determine the length of the longest word in the array

### Second function

- Call the first function to see the total length of the longest word
- Create a star string that is the length of the longest word plus 4 extra stars

Declare a new String textAreaFormatting - Add the stars string

Run a for loop for each of the words in the array
- Start the new word with star and space
- Add to the new word the word of the arrayString
- Add the number of spaces (calculated by longest word minus current word to get the amount of spaces)
- add space and star to the new word

Add this newly created word to textAreaFormatting String

Add the same star string created in the begining

Return the new textAreaFormatting String