/**
 * 
Given an array of ints, is it possible to divide the ints into two groups,
so that the sum of the two groups is the same, with these constraints: all 
the values that are multiple of 5 must be in one group, and all the values that
are a multiple of 3 (and not a multiple of 5) must be in the other. (No loops needed.)

split53([1, 1]) → true
split53([1, 1, 1]) → false
split53([2, 4, 2]) → true
 */

const split53 = (i, arr) => {
	if (i >= arr.length) return false;
	if (helper(arr.slice(0, i), arr.slice(i, arr.length))) return true;
	else return split53(i + 1, arr);
};

const helper = (arr1, arr2) => {
	const sum1 = arr1.reduce((acc, i) => acc + i);
	const sum2 = arr2.reduce((acc, i) => acc + i);
	if (sum1 % 5 == 0 && sum2 % 3 == 0 && sum2 % 5 !== 0) return true;
	else if (sum2 % 5 == 0 && sum1 % 3 == 0 && sum1 % 5 !== 0) return true;
	else return false;
};

console.log(split53(1, [10, 9]));
console.log(split53(1, [1, 1, 1]));
console.log(split53(1, [20, 40, 9]));
