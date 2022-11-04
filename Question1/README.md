# FizzBuzz

Given an integer `n`, return a string array, `answer` (1-indexed) where:

- `answer[i] = FizzBuzz` if `i` is divisible by 3 and 5.
- `answer[i] = Fizz` if `i` is divisible by 3.
- `answer[i] = Buzz` if `i` is divisible by 5.
- `answer[i] = i` if none of the above conditions are true.

### **Example 1**

```
Input: n = 3
Output: ["1","2","Fizz"]
```

### **Example 2**

```
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

### **Example 3**

```
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

## Thoughts and Processes

### First though process

After reading through the project I have identified that I would need to create 2 functions because 2 different actions need to take place.

### Function 1

This function have to do the testing to determine the output, should it be FizzBuzz, Fizz, Buzz or should it be converted to a String.

### Function 2

- This function has to create a for loop that starts with 1 and end at the value given.
- Declare a value that will store the array above the for loop.
- Each of the values in the for loop will be calling on the first function to test each of the values in the for loop.
- This value will then be pushed to to the array.
- Once the for loop has run for all the values, the function will return the newly created array.

## Last part

Display to console the newly created array.