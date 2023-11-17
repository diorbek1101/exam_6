class Car {
	constructor(public nameCar: string) {}

	run() {
		console.log(`${this.nameCar} is run`);
	}
}

class ElectroCar extends Car {}
class PetrolCar extends Car {}
class HybridCar extends Car {}

class BYDsong extends ElectroCar {}
class jetourx7 extends PetrolCar {}
class monza extends HybridCar {}

interface Capacity {
	electroCar: number;
	petrolCar: number;
	hybridCar: number;
}

interface Pricing {
	electroCarPricePerMinute: number;
	petrolCarPricePerMinute: number;
	hybridCarPricePerMinute: number;
}

const capacityParking: Capacity = {
	electroCar: 3,
	petrolCar: 5,
	hybridCar: 10,
};

const pricingParking: Pricing = {
	electroCarPricePerMinute: 20,
	petrolCarPricePerMinute: 5,
	hybridCarPricePerMinute: 15,
};
let sum: number;
class Parking<T extends Car> {
	public car: T[] = [];
	constructor(public nameParking: string, public capacity: Capacity, public pricing: Pricing) {}

	enterCar(car: T) {
		if (this.car.length < this.capacity.electroCar) {
			this.car.push(car);
			console.log(`${car.nameCar} Parkofkaga kirdi.`);
		} else {
			console.log(`${this.nameParking} is full by => ${car.constructor.name}s.`);
		}
	}

	logoutCar(car: T) {
		const index = this.car.indexOf(car);
		if (index !== -1) {
			this.car.splice(index, 1);
			console.log(`${car.nameCar} Parkofkadan chiqdi.`);
		}
	}

	calculateTotalPricePerCar(car: T) {

	}

	calculateMinutes() {}

	calculateTotalProfit() {}
}

const parking1 = new Parking<ElectroCar>("chorsu", capacityParking, pricingParking);
const parking2 = new Parking<PetrolCar>("yakkasaroy", capacityParking, pricingParking);
const parking3 = new Parking<HybridCar>("sergili", capacityParking, pricingParking);
console.log(parking1);
console.log(parking2);
console.log(parking3);

console.log("<<Automobil 🚙>>");

const car1 = new BYDsong("BYD SONG PLUS", );
const car2 = new jetourx7("jetourX7");
const car3 = new monza("monza");

console.log(car1);
console.log(car2);
console.log(car3);

console.log("<<🅿️ => Parkofkaga kirish >>");

parking1.enterCar(car1);
parking2.enterCar(car2);
parking3.enterCar(car3);

parking1.logoutCar(car1);
parking2.logoutCar(car2);
parking3.logoutCar(car3);

class Parkofka {
	 enterTime: Date;

	constructor() {
		this.enterTime = new Date();
	}

	getEnterTime(): Date {
		return this.enterTime;
	}

	calculateTimeElapsed(): number {
		const currentTime = new Date();
		const timeDiff = currentTime.getTime() - this.enterTime.getTime();
		return Math.floor(timeDiff / 1000);
	}
}

function main() {
	const parking = new Parkofka();


	console.log("<<Parkofkadan chiqish 🅿️=> >>");

	console.log(`Car name: ${car2.nameCar}`);
	console.log(`Enter time: ${parking.getEnterTime()}`);
	setTimeout(() => {
		const timeElapsed = parking.calculateTimeElapsed();
		console.log(`Time elapsed (seconds): ${timeElapsed}`);
		console.log(`Time pricing ${timeElapsed * 5}$`);
	}, 5000);
	console.log(`Car name: ${car1.nameCar}`);
	console.log(`Enter time: ${parking.getEnterTime()}`);
	setTimeout(() => {
		const timeElapsed = parking.calculateTimeElapsed();
		console.log(`Time elapsed (seconds): ${timeElapsed}`);
		console.log(`Time pricing ${timeElapsed * 2}$`);
	}, 5000);
	console.log(`Car name: ${car3.nameCar}`);
	console.log(`Enter time: ${parking.getEnterTime()}`);
	setTimeout(() => {
		const timeElapsed = parking.calculateTimeElapsed();
		console.log(`${car3}Time  (seconds): ${timeElapsed}`);
		console.log(`Time pricing ${timeElapsed * 10}$`);
	}, 5000);

main();
const result = main();
console.log(result);
}




