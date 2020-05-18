/**
 * 
Given an array of ints, is it possible to choose a group of some of the ints,
such that the group sums to the given target with this additional constraint: 
If a value in the array is chosen to be in the group, the value immediately 
following it in the array must not be chosen. (No loops needed.)

groupNoAdj(0, [2, 5, 10, 4], 12) → true
groupNoAdj(0, [2, 5, 10, 4], 14) → false
groupNoAdj(0, [2, 5, 10, 4], 7) → false
 */

const groupNoAdj = (i, num, tar) => {
	if (i >= num.length) return tar == 0;
	if (tar < 0) return false;

	/** So in this case we can either select the first element or move on */

	/** Suppose we Select the current element then we have to jump 2 spot */
	if (groupNoAdj(i + 2, num, tar - num[i])) return true;

	/** Now we have to choose not to select current element instead move on */
	if (groupNoAdj(i + 1, num, tar)) return true;

	return false;
};

console.log(groupNoAdj(0, [2, 5, 10, 4], 12));
console.log(groupNoAdj(0, [2, 5, 10, 4], 14));
console.log(groupNoAdj(0, [2, 5, 10, 4], 7));
