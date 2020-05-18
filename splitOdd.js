/**
 * 

Given an array of ints, is it possible to divide the ints into two groups, 
so that the sum of one group is a multiple of 10, and the sum of the other group is odd.
Every int must be in one group or the other. Write a recursive helper method that takes 
whatever arguments you like, and make the initial call to your recursive helper from splitOdd10(). (No loops needed.)


splitOdd10([5, 5, 5]) → true
splitOdd10([5, 5, 6]) → false
splitOdd10([5, 5, 6, 1]) → true
 */
const splitOdd10 = (i, arr) => {
	if (i >= arr.length) return false;
	if (helper(arr.slice(0, i), arr.slice(i, arr.length))) return true;
	else return splitOdd10(i + 1, arr);
};

const helper = (arr1, arr2) => {
	const sum1 = arr1.reduce((acc, i) => acc + i);
	const sum2 = arr2.reduce((acc, i) => acc + i);
	if (sum1 % 10 == 0 && sum2 % 2 !== 0) return true;
	else if (sum2 % 10 == 0 && sum1 % 2 !== 0) return true;
	else return false;
};

console.log(splitOdd10(1, [5, 5, 5]));
console.log(splitOdd10(1, [5, 5, 6]));
console.log(splitOdd10(1, [5, 5, 6, 1]));
