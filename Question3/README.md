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
1) Store the signiture array in var called outputArray

2) initialize var called nextSum which will be the sum of all previous elements summed together to get the next value.

3) Create the outer forloop which will be used to populate the outputArray after finding the value.

4)In the inner for-loop finding the next value using this logic
    - from starting element i to  element( i + signiture.length)
    -sum all values in range(i,i+signiture.length).
    - if i===signiture.length
      add the summed value in the outputArray and break your inner array


- Challenges my output array had extra elements so if the signiture element is 4, we will have extra 4 elements. I don't  understand why yet, but to prevent it from happening I kept a condition to ensure the array doesn't exceed n.
if(outputArray.length===n)
