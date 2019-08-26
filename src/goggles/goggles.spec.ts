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
});
