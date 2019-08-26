export class Goggles {

	name: string = '';
	temperatureInside: number = 0;
	temperatureOutside: number = 0;
	humidity: number;

	constructor(name:string = 'Goggles') {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setTemperatureInside(temperature) {
		this.temperatureInside = temperature;
	}

	setTemperatureOutside(temperature) {
		this.temperatureInside = temperature;
	}

	setHumidity(humidity) {
		this.humidity = humidity;
	}

	getDewPoint() {
		return this.temperatureInside - 100 - this.humidity / 5;
	}

	isFogging() {
		return this.temperatureOutside < this.getDewPoint();
	}
}
