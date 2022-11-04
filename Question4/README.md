# Gravity Flip

You are bored during your physics lessons so you've built yourself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The `i-th` column contains `a_i` cubes. At first, the gravity in the box is pulling the cubes downwards. When you switch the gravity, it begins to pull all the cubes to a certain side of the box, `d`, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

```
+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
```

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the `n` columns after you switch the gravity.

The function should look as follows:

```
function(direction: string, arr: number[]) {

}
```

### **Example 1**

```
Input: 'R', [3, 2, 1, 2]
Output: [1, 2, 2, 3]
```

### **Example 2**

```
Input: 'L', [1, 1, 5, 4, 3]
Output: [5, 4, 3, 1, 1]
```

## Thoughts and Processes

Fancy way to ask someone to sort an array in either ascending or descending order!
