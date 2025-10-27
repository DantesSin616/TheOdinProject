
let Car = {
	brand: "Honda",
	getBrand: function() {
		return this.brand;
	},
};


let bike = {
	brand: "Harley Davidson",
};


let brand = Car.getBrand.bind(bike);


console.log(brand()); // check for the brand of bike 


function Car_other() {
	this.speed = 120;
};

Car_other.prototype.getSpeed = () => { // arrow functions explicitely do not posses a `this` object, --> 
	return this.speed; // so they borrow it from the code around them.
};

var car = new Car_other()
console.log(car.getSpeed());


