# Xbonacci

Before tacking the `Xbonacci` sequence, first understand where it is derived from: The Fibonacci sequence. Recall that a Fibonacci sequence of numbers is where the next number in the sequence is the sum of the previous two numbers. Ie,

```
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)
```

Using this formula, the first 9 numbers in the sequence are

```
0, 1, 1, 2, 3, 5, 8, 13, 21
```

The `Xbonacci` sequence simply extends that idea by not taking the previous two numbers but rather the previous `X` numbers in the sequence.

You have to build a `Xbonacci` function that takes a **signature** of `X` elements - and remember each next element is the sum of the last `X` elements - and returns the first `n` elements of the so seeded sequence.

The function should look as follows:

```
function(signature: number[], n: number) {

}
```

### Example 1

```
Input: [1,1,1,1] 10
Output: [1,1,1,1,4,7,13,25,49,94]
```

#### Explanation

The length of the signature is 4. Therefore, we need to find the sum of the previous 4 elements to calculate the next digit. `1+1+1+1=4`, hence the next digit is 4. To find the next digit we repeat the process except with the updated previous 4 numbers. In this case, `1+1+1+4=7`. This pattern continues until the 10th digit is calculated.

### Example 2

```
Input: [0, 1] 10
Output: [0,1,1,2,3,5,8,13,21,34]
```

### Example 3

```
Input: [0, 1, 1, 0, 4] 2
Output: [0, 1]
```

### Example 4

```
Input: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20
Output: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16 ,32, 64, 128, 256]
```

### Example 5

```
Input: [1], 5
Output: [1, 1, 1, 1, 1]
```

## Thoughts and Processes

This question took me some time to understand what was required then when i figured out what was required converting that to code was a drag.So here is what i will do ,get an input from user this will be the nth:number.I will have to initiate 2 variables which will be the start of the sequence first variable with value of zero then second variable with a value of 1,i will then use a conditional statement to validate the input from the user if its an integer .
In the else block i will have to check if nth:number is bigger than the count variable then for the next number in sequence i will add the two variables that i have initialised and store the result in nth.Then i will update the n1 with n2 and n2 with nth then increace the count by 2.I am trying to figure out how to use the signature 