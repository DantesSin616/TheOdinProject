
function Book(title: string, author: string, pages: number, read: boolean): void {
	if (!new.target) {
		console.log(Error("You must use the 'new' operator to call the constructor."));
	}
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages. ${this.isRead()}.`
	}
	this.isRead = function() {
		if (read === true) {
			return "Yes, been read";
		} else {
			return "No, I haven't read it"
		}
	}
}

// Book.prototype.getsummary = function() {
// 	return `${this.title} by ${this.author}, ${this.pages} pages. ${this.isRead()}`;
// }

Book.prototype.isItALongRead = function() {
	return this.pages > 500;
}

const book1 = new Book("The Hobbit", "JRR Tolkie", 295, false);

// console.log(book1.info());



function Player(name: string, marker: string) {
	this.name = name;
	this.marker = marker;
	this.sayName = function() {
		return `Hi, I'm ${this.name} and my marker is ${this.marker}.`;
	}
}

const player1 = new Player("steve", 'X');
