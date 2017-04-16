console.log('env is', process.env.NODE_ENV);

class Person {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    console.log('My name is', this.name);
  }
}


const joe = new Person('joe');

joe.sayHi();
