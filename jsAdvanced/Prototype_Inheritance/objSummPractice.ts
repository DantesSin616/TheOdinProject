let myObj = {
	width: 200,
	height: 500,
	length: 1000,
	title: "My measures",
}

function multiplyNumeric(obj: any) {
	let key: any;
	for (key in obj) {
		if (typeof obj[key] == 'number') {
			console.log(obj[key] *= 2);
		}
	}
}

multiplyNumeric(myObj);
