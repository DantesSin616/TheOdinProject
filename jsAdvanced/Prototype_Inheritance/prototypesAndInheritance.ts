
let x = {}; // this is an object 
let y = new Object(); // this is also an object 

Object.getPrototypeOf(y); // this is a way to get [[Prototype]] of objects using both
// declarations, so as in 'x', and in 'y'


// there is also '.__proto__;' but it's a legacy feature and should not be use in 
// production. Besides, it's not present in every modern browser

x.__proto__; // should return a similar output as in '.getPrototypeOf()'


/* we can also get arrays to work as objetcs 
 * and it will actually have some Array.prototype built in
 * due to the fact that any array you create has access to the 
 * properties and methos from Array.prototype
 */

let myArray = new Array();

myArray.__proto__.__proto__; // and this will actually work 
Object.getPrototypeOf(Object.getPrototypeOf(myArray)); // this should also work 


myArray instanceof Array; // instanceof is an operator 
// this is used to check wheter the prototype property of a constructor appears anywhere within an object’s prototype chain.


// -----------------------------------------------------------------------------------------------------------------------------


function Hero(name: string, level: number) {
	this.name = name;
	this.level = level;
}

function Warrior(name: string, level: number, weapon: string) {
	Hero.call(this, name, level);
	this.weapon = weapon;
}

function Sourcerer(name: string, level: number, spell: string) {
	Hero.call(this, name, level);
	this.spell = spell;
}


Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Sourcerer.prototype, Hero.prototype);

Hero.prototype.greet = function() {
	return `${this.name} says "Hi!"`;
}

Warrior.prototype.attack = function() {
	return `${this.name} attacks with ${this.weapon}.`;
}

Sourcerer.prototype.cast = function() {
	return `${this.name} casts ${this.spell}.`;
}

let hero1 = new Warrior("Steve", 10, "Sword");
let hero2 = new Sourcerer("also Steve", 20, "fire-ball");
