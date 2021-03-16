import { typeSwordsman } from '../swordsman';

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  const result = typeSwordsman('Andrei', 'Swordsman');
  result.health = 10;
  result.levelUp();
  const received = result;
  expect(received).toEqual(expected);
});

test('testing metods', () => {
  expect(() => {
    const result = typeSwordsman('Andrei', 'Swordsman');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Swordsman',
    health: 98.2,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = typeSwordsman('Andrei', 'Swordsman');
  result.damage(2);
  const received = result;
  expect(received).toEqual(expected);
});
