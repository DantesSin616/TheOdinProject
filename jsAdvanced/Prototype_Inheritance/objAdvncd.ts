
const myObjct = {}


function Player(name: string, marker: string) {

	if (!new.target) {
		throw Error("You must yada yada");
	}
	this.name = name;
	this.marker = marker;
	this.sayName = function() {
		console.log(this.name);
	}
}

const player1 = new Player("Steve", 'X');
const player2 = new Player("also Steve", 'O');
const player3 = new Player("Not Steve", 'Y');

player1.sayName();
player2.sayName();
console.log(player3.name);

