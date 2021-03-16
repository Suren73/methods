import { typeUndead } from '../undead';

test('testing metods', () => {
	const expected = {
		name: 'Andrei',
		type: 'Undead',
		health: 100,
		level: 2,
		attack: 30,
		defence: 30,
	};
	const result = typeUndead('Andrei', 'Undead');
	result.health = 10;
	result.levelUp();
	const received = result;
	expect(received).toEqual(expected);
});

test('testing metods', () => {
	expect(() => {
		const result = typeUndead('Andrei', 'Undead');
		result.health = 0;
		result.levelUp();
	}).toThrow();
});

test('testing metods', () => {
	const expected = {
		name: 'Andrei',
		type: 'Undead',
		health: 98.5,
		level: 1,
		attack: 25,
		defence: 25,
	};
	const result = typeUndead('Andrei', 'Undead');
	result.damage(2);
	const received = result;
	expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
	expect(() => {
		typeUndead('A', 'Undead');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeUndead('Andreiiiiii', 'Undead');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeUndead('Andrei', 'Undead1');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeUndead(10, 'Undead');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeUndead('Andrei', 10);
	}).toThrow();
});
