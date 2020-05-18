/**
 * 
Given an array of ints, is it possible to divide the ints into two groups, 
so that the sums of the two groups are the same. Every int must be in one group or the other.
 Write a recursive helper method that takes whatever arguments you like, and make the initial 
 call to your recursive helper from splitArray(). (No loops needed.)


splitArray([2, 2]) → true
splitArray([2, 3]) → false
splitArray([5, 2, 3]) → true
 */
let i = 1;
const splitArray = (i, arr) => {
	if (i >= arr.length) return false;
	if (helper(arr.slice(0, i), arr.slice(i, arr.length))) return true;
	else return splitArray(i + 1, arr);
};

const helper = (arr1, arr2) => {
	const sum1 = arr1.reduce((acc, i) => acc + i);
	const sum2 = arr2.reduce((acc, i) => acc + i);
	return sum1 == sum2;
};

console.log(splitArray(1, [2, 2]));
console.log(splitArray(1, [2, 3]));
console.log(splitArray(1, [5, 2, 3]));
