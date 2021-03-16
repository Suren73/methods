import Character from './character';

export default class Bowerman extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 25;
		this.defence = 25;
	}
}

export function typeBowerman(name, type) {
	return new Bowerman(name, type);
}
