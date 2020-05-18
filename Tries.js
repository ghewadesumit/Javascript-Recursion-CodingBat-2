const Trie = function () {
	this.keys = new Map();
	this.isEndNode = false;
};

//Tries Insert
Trie.prototype.insert = function (word) {
	let current = this;
	for (let i = 0; i < word.length; i++) {
		let node = current.keys.get(word[i]);
		if (!node) {
			node = new Trie();
			current.keys.set(word[i], node);
		}
		current = node;
	}
	current.isEndNode = true;
};

// Tries Insert Recursive
Trie.prototype.recurInsert = function (word) {
	let current = this;
	const insert = (i, current) => {
		if (i == word.length) return (current.isEndNode = true);
		let node = current.keys.get(word[i]);
		if (!node) {
			node = new Trie();
			current.keys.set(word[i], node);
		}
		current = node;
		return insert(i + 1, current);
	};
	insert(0, current);
};

//Tries Search for word
Trie.prototype.search = function (word) {
	let current = this;
	for (let i = 0; i < word.length; i++) {
		console.log(
			`word is ${word[i]} and is it present ${current.keys.has(word[i])}`
		);
		if (!current.keys.has(word[i])) return false;
		let node = current.keys.get(word[i]);
		if (!node) return false;
		current = node;
	}
	return current.isEndNode;
};

//Tries Search for prefix
Trie.prototype.startsWith = function (word) {
	let current = this;
	for (let i = 0; i < word.length; i++) {
		if (!current.keys.has(word[i])) return false;
		let node = current.keys.get(word[i]);
		if (!node) return false;
		current = node;
	}
	return true;
};

// Your Trie object will be instantiated and called as such:
var obj = new Trie();
const word = 'there';
obj.recurInsert(word);
// console.log('object is', obj);
var param_2 = obj.search('there');
console.log(param_2);
const prefix = 'oh';
var param_3 = obj.startsWith(prefix);
console.log(param_3);
