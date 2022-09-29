class User {
	constructor(firstName, lastName, thirdName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.thirdName = thirdName;
	}
	get firstMethod() {
		console.log(this.firstName);
	}
	secondMethod() {
		console.log(this.lastName);
	}
	thirdMethod() {
		console.log(this.thirdName);
	}
	addValue(value) {
		let result = 0;
		for (let i = 0; i < value; i++) {
			result = i;
		}
		console.log(result);
	}
}

const firstUser = new User("Kingsley", "Onyebuchi", "Omerenma");
firstUser.addValue(5);
