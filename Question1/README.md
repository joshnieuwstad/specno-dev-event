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
- First approach was to loop through array of size n and just print the index.
- Realised I need to make an empty array of size n.
- Then need to check if the index is a multiple of 3 and/or 5 by calculating the mod of 3 or 5 being equal to 0
- If it is then we can decide on the output to be `Fizz`, `Buzz` or `FizzBuzz` by appending the output to the array. Otherwise just append the index to the array.
- Finally return the array.
