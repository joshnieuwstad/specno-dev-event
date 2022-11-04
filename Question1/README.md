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

Step 1: check for divisibility by 3 AND 5.
Step 2: check for divisibility by either 3 OR 5.
Step 3: else append to the output array as a string.
