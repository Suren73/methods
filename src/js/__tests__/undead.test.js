import Undead from '../undead';

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const result = new Undead('Andrei');
  result.health = 10;
  result.levelUp();
  const received = result;
  expect(received).toEqual(expected);
});

test('testing metods', () => {
  expect(() => {
    const result = new Undead('Andrei');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  expect(() => {
    const result = new Undead('Andrei');
    result.health = -1;
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
  const result = new Undead('Andrei');
  result.damage(2);
  const received = result;
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Undead('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Undead('Andreiiiiii')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Undead(10)).toThrow();
});
