
class Cat {
	constructor(name, fluffiness) {
		this.name=name;
		this.fluffiness=fluffiness;
	}
	getFluffiness() {
		return this.fluffiness;
	}
}
let cat=new Cat("Princess Fluffy", 10);
console.log(newCat.getFluffiness());


function makeClass(...args) {
	return class Cat {
		constructor() {
			this.name=args[0];
			this.fluffiness=args[1];
		}
		getFluffiness() {
			console.log(this.fluffiness);
		}
	}
}
let cat2 = makeClass("Princess Fluffy", 10);
new cat2().getFluffiness();
