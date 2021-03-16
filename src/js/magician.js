import Character from './character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export function typeMagician(name, type) {
  return new Magician(name, type);
}

typeMagician('Andrei', 'Magician');
