import { Goggles } from './goggles';
import { expect } from 'chai';
import 'mocha';

describe('Goggles', () => {

	let goggles;

	beforeEach(() => {
		goggles = new Goggles();
	});

	it('should have a default name', () => {
		const result = goggles.getName();
		expect(result).to.equal('Goggles');
	});

	it('should save my name when creating with constructor', () => {
		var goggles = new Goggles('My Goggles');
		const result = goggles.getName();
		expect(result).to.equal('My Goggles');
	});

	it('should save my name when set', () => {
		goggles.setName('Ski Goggles');
		const result = goggles.getName();
		expect(result).to.equal('Ski Goggles');
	});

	it('should calculate dew point @ 50%', () => {
		goggles.setTemperatureInside(0);
		goggles.setHumidity(50);
		var result = goggles.getDewPoint();
		expect(result).to.equal(-10);
	});

	it('should calculate dew point @ 10%', () => {
		goggles.setTemperatureInside(0);
		goggles.setHumidity(10);
		const result = goggles.getDewPoint();
		expect(result).to.equal(-18);
	});

	it('should calculate dew point @ 5%', () => {
		goggles.setTemperatureInside(0);
		goggles.setHumidity(5);
		const result = goggles.getDewPoint();
		expect(result).to.equal(-19);
	});

	it('should not be fogging', () => {
		goggles.setTemperatureInside(0);
		goggles.setTemperatureOutside(-18);
		goggles.setHumidity(5);
		const result = goggles.isFogging();
		expect(result).to.be.false;
	});

	it('should be fogging', () => {
		goggles.setTemperatureInside(0);
		goggles.setTemperatureOutside(-20);
		goggles.setHumidity(5);
		const result = goggles.isFogging();
		expect(result).to.be.true;
	});
});
