/*
Suppose we're given an array of numbers like the following:
[4, 2, 4]

Could you find the majority element? A majority is defined as "the greater part, or more than half, of the total. It is a subset of a set consisting of more than half of the set's elements."

Let's assume that the array length is always at least one, and that there's always a majority element.

In the example above, the majority element would be 4.

Constraints:
- Length of the array <= 100000
- The array will always contain integer values between -1000000000 and
1000000000
- Expected time complexity : O(n) linear
- Expected space complexity : O(n) linear
So sometimes n is an actual number that's an input to our method, and other times n is the number of items in an input array (or an input map, or an input object, etc.).

SOLUTION: https://algodaily.com/challenges/majority-element
*/

// input: array of nums
// output: number that occurs most frequently in the input array

const majorityElement = (arr) => {
  // if array length is > 100000 or if empty, return undefined
  if (arr.length > 100000 || arr.length === 0) return undefined;
  // create cache object to keep track of count of element's occurrences
  const cache = {};
  // loop over input array and check if current element doesn't exist inside the cache as a key, create a key and set the prop to 1
  // else, increment the prop value by 1
  // we also want to keep track of which element is the majority as we're iterating and return this number out from the function when we're finished iterating over the arr
  // so if key already exists, and its valuewe assign 'majority' the value of arr[i]
  let majority = {};
  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      cache[arr[i]] = 1;
      majority = cache[arr[i]];
      console.log(majority);
    }
    else {
      cache[arr[i]] += 1;
      majority = arr[i];
    }
  }
  console.log(cache);
  // return the key with the largest prop value from the cache object
  return majority;
}

// const array = [2, 4, 2, 3, 2];
// console.log(majorityElement(array));
const array2 = [5, 5, 2, 5, 2];
console.log(majorityElement(array2));