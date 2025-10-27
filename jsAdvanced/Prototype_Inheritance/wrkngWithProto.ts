
let animal = {
	jumps: null,
};


let rabbit = {
	__proto__: animal,
	jumps: true,
	display: function() {
		console.log(`Does it jump? --${rabbit.jumps}`)
	}
};

rabbit.display();

delete rabbit.jumps;

rabbit.display();

delete animal.jumps;

rabbit.display();
