import Character from './character';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export function typeUndead(name, type) {
  return new Undead(name, type);
}

typeUndead('Andrei', 'Undead');
