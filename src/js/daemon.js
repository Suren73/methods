import Character from './character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export function typeDaemon(name, type) {
  return new Daemon(name, type);
}
