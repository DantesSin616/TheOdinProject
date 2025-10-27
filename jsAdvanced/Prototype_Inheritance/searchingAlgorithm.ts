let head = {
	glasses: 1,
}

let table = {
	pen: 3,
	__proto__: head,
}

let bed = {
	pillow: 1,
	sheets: 2,
	__proto__: table,
}

let pockets = {
	money: 2000,
	__proto__: bed,
}

// Searching Algorithm 
// path to be followed [ pockets -> bed -> table -> head ]

console.log(pockets.pillow);
console.log(pockets.pen);
console.log(bed.glasses);
