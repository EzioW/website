/* eslint-disable max-classes-per-file */
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Cat extends Animal {
  constructor() {
    super('cat');
  }
}

export default Cat;
