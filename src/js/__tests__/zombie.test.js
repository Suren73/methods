import Zombie from '../zombie';

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  const result = new Zombie('Andrei');
  result.health = 10;
  result.levelUp();
  const received = result;
  expect(received).toEqual(expected);
});

test('testing metods', () => {
  expect(() => {
    const result = new Zombie('Andrei');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  expect(() => {
    const result = new Zombie('Andrei');
    result.health = -1;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Zombie',
    health: 98.2,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Zombie('Andrei', 'Zombie');
  result.damage(2);
  const received = result;
  expect(received).toEqual(expected);
});
