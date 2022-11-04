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
i have created 2 array that i will store the list 
then i ask the user for input from there i have created a loop that iterates throught the range of provided number .
From there i then append array 1 with the range of numbers
i have a second for loop that in it i have conditional statements that evaluate if within then range numbers they are divisible by 3 and 5 .Then it will raplce that element with fizz or buzz.