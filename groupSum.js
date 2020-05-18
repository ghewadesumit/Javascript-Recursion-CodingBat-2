/**
 * 
Given an array of ints, is it possible to choose a group of some of the ints, 
such that the group sums to the given target? This is a classic backtracking 
recursion problem. Once you understand the recursive backtracking strategy in this problem, 
you can use the same pattern for many problems to search a space of choices. 
Rather than looking at the whole array, our convention is to consider the part of the array starting at index start 
and continuing to the end of the array. The caller can specify the whole array simply by passing start as 0. 
No loops are needed -- the recursive calls progress down the array.


groupSum(0, [2, 4, 8], 10) → true
groupSum(0, [2, 4, 8], 14) → true
groupSum(0, [2, 4, 8], 9) → false
 */

const groupSum = (i, num, tar) => {
	if (i >= num.length) return tar == 0;

	// The backtracking is about decisions that we make
	// decision we make leads to the solution
	// So, In this question we can either select a number or not.

	// If we select a number
	if (groupSum(i + 1, num, tar - num[i])) return true;

	//If we don't select a number
	if (groupSum(i + 1, num, tar)) return true;

	return false;
};

console.log(groupSum(0, [2, 4, 8], 10));
console.log(groupSum(0, [2, 4, 8], 14));
console.log(groupSum(0, [2, 4, 8], 9));
