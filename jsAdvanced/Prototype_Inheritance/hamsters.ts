let hamster = {
	stomach: [],

	eat(food: any) {
		this.stomach = [food];
	}
};

let speedy = {
	__proto__: hamster,
	stomach: [],
};

let lazy = {
	__proto__: hamster,
	stomach: [],
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // <nothing>

/* 
We have two hamsters: speedy and lazy inheriting from the general hamster object.
When we feed one of them, the other one is also full. Why? How can we fix it? 
*/




