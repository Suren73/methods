export default class Character {
  constructor(name, type) {
    const playerType = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Ошибка имени');
    }
    if (playerType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка типа игрока');
    }
    this.health = 100;
    this.level = 1;
    this.attack = Number();
    this.defence = Number();
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
