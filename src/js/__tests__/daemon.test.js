import { typeDaemon } from '../daemon';

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  const result = typeDaemon('Andrei', 'Daemon');
  result.health = 10;
  result.levelUp();
  const received = result;
  expect(received).toEqual(expected);
});

test('testing metods', () => {
  expect(() => {
    const result = typeDaemon('Andrei', 'Daemon');
    result.health = 0;
    result.levelUp();
  }).toThrow();
});

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Daemon',
    health: 98.8,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = typeDaemon('Andrei', 'Daemon');
  result.damage(2);
  const received = result;
  expect(received).toEqual(expected);
});
