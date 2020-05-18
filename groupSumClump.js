/**
 * 
Given an array of ints, is it possible to choose a group of some of the ints, 
such that the group sums to the given target, with this additional constraint: 
if there are numbers in the array that are adjacent and the identical value, they must either all be chosen, 
or none of them chosen. For example, with the array {1, 2, 2, 2, 5, 2}, 
either all three 2's in the middle must be chosen or not, all as a group.
 (one loop can be used to find the extent of the identical values).

 groupSumClump(0, [2, 4, 8], 10) → true
groupSumClump(0, [1, 2, 4, 8, 1], 14) → true
groupSumClump(0, [2, 4, 4, 8], 14) → false
 */

const groupSumClump = (i, a, tar) => {
	sameNum(a);
	if (i >= a.length) return tar == 0;
	if (groupSumClump(i + 1, a, tar)) return true;
	if (groupSumClump(i + 1, a, tar - a[i])) return true;
	return false;
};

const sameNum = (a) => {
	for (let i = 0; i < a.length; i++) {
		if (i > 0 && a[i] == a[i - 1]) {
			a[i - 1] += a[i];
			if (i + 1 < a.length && a[i] !== a[i + 1]) a[i] = 0;
			else if (i == a.length - 1) num[i] = 0;
		}
	}
};

console.log(groupSumClump(0, [2, 4, 8], 10));
console.log(groupSumClump(0, [1, 2, 4, 8, 1], 14));
console.log(groupSumClump(0, [2, 4, 4, 8], 14));
