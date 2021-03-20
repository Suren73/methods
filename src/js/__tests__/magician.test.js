import Magician from '../magician';

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  const result = new Magician('Andrei');
  result.health = 10;
  result.levelUp();
  const received = result;
  expect(received).toEqual(expected);
});

test('testing metods', () => {
  expect(() => {
    const result = new Magician('Andrei');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  expect(() => {
    const result = new Magician('Andrei');
    result.health = -1;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Magician',
    health: 98.8,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Magician('Andrei');
  result.damage(2);
  const received = result;
  expect(received).toEqual(expected);
});
