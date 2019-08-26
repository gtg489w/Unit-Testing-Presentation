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
});
