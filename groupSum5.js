/**
 * 
Given an array of ints, is it possible to choose a group of some of the ints,
 such that the group sums to the given target with these additional constraints: 
 all multiples of 5 in the array must be included in the group. If the value immediately following a multiple of 5 is 1,
  it must not be chosen. (No loops needed.)

groupSum5(0, [2, 5, 10, 4], 19) → true
groupSum5(0, [2, 5, 10, 4], 17) → true
groupSum5(0, [2, 5, 10, 4], 12) → false
 */

const groupSum5 = (i, num, tar) => {
	if (i >= num.length) return tar == 0;
	if (num[i] % 5 == 0) return groupSum5(i + 1, num, tar - num[i]);
	else if (num[i] == 1 && num[i - 1] % 5 == 0)
		return groupSum5(i + 1, num, tar);
	else {
		if (groupSum5(i + 1, num, tar)) return true;
		if (groupSum5(i + 1, num, tar - num[i])) return true;
		return false;
	}
};

console.log(groupSum5(0, [2, 5, 10, 4], 19));
console.log(groupSum5(0, [2, 5, 10, 4], 17));
console.log(groupSum5(0, [2, 5, 10, 4], 12));
