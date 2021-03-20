import Character from '../character';

test('testing the player creation function', () => {
  expect(() => new Character('Andrei', 'Temp')).toThrow('Ошибка типа игрока');
});

test('testing metods', () => {
  const expected = {
    name: 'Andrei',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Character('Andrei', 'Bowman', 0, 1, 25, 25);
  result.damage(2);
  const received = result;
  expect(received).toEqual(expected);
});
