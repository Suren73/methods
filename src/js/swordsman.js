import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export function typeSwordsman(name, type) {
  return new Swordsman(name, type);
}

typeSwordsman('Andrei', 'Swordsman');
