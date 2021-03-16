import Character from './character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export function typeZombie(name, type) {
  return new Zombie(name, type);
}

typeZombie('Andrei', 'Zombie');
