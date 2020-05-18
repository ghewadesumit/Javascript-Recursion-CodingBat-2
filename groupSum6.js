/**
 * 
Given an array of ints, is it possible to choose a group of some of the ints,
 beginning at the start index, such that the group sums to the given target? 
 However, with the additional constraint that all 6's must be chosen. (No loops needed.)

groupSum6(0, [5, 6, 2], 8) → true
groupSum6(0, [5, 6, 2], 9) → false
groupSum6(0, [5, 6, 2], 7) → false
 */

const groupSum6 = (i, num, tar) => {
	if (i >= num.length) return tar == 0;
	if (tar < 0) return false;

	// If current element is 6 then we choose it
	if (num[i] == 6) {
		if (groupSum6(i + 1, num, tar - num[i])) return true;
	}
	// If it is anything other than 6 then we either choose it or not.
	// Choosing the current element
	else {
		if (groupSum6(i + 1, num, tar - num[i])) return true;

		// Not choosing the current element
		if (groupSum6(i + 1, num, tar)) return true;
	}

	return false;
};

console.log(groupSum6(0, [5, 6, 2], 8));
console.log(groupSum6(0, [5, 6, 2], 9));
console.log(groupSum6(0, [5, 6, 2], 7));
