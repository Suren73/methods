import { typeBowerman } from '../bowerman';

test('testing metods', () => {
	const expected = {
		name: 'Andrei',
		type: 'Bowman',
		health: 100,
		level: 2,
		attack: 30,
		defence: 30,
	};
	const result = typeBowerman('Andrei', 'Bowman');
	result.health = 10;
	result.levelUp();
	const received = result;
	expect(received).toEqual(expected);
});

test('testing metods', () => {
	expect(() => {
		const result = typeBowerman('Andrei', 'Bowman');
		result.health = 0;
		result.levelUp();
	}).toThrow();
});

test('testing metods', () => {
	const expected = {
		name: 'Andrei',
		type: 'Bowman',
		health: 98.5,
		level: 1,
		attack: 25,
		defence: 25,
	};
	const result = typeBowerman('Andrei', 'Bowman');
	result.damage(2);
	const received = result;
	expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
	expect(() => {
		typeBowerman('A', 'Bowman');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeBowerman('Andreiiiiii', 'Bowman');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeBowerman('Andrei', 'Bowman1');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeBowerman(10, 'Bowman');
	}).toThrow();
});

test('testing the player creation function', () => {
	expect(() => {
		typeBowerman('Andrei', 10);
	}).toThrow();
});
