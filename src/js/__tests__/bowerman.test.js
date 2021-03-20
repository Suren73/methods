import Bowerman from '../bowerman';

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const result = new Bowerman('Andrei');
  result.health = 10;
  result.levelUp();
  const received = result;
  expect(received).toEqual(expected);
});

test('testing metods', () => {
  expect(() => {
    const result = new Bowerman('Andrei', 'Bowman');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  expect(() => {
    const result = new Bowerman('Andrei', 'Bowman');
    result.health = -1;
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
  const result = new Bowerman('Andrei');
  result.damage(2);
  const received = result;
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Bowerman('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Bowerman('Andreiiiiii')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Bowerman(10, 'Bowman')).toThrow();
});
