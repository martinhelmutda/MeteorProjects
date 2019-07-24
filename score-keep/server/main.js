import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players.js';

Meteor.startup(() => {

  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }

    getGreeting() {
      //Hola soy Martin.
      // return 'Hola soy' + this.name + '.';
      return `Hola soy ${this.name}.`;
    }
    getPersonDescription() {
      return `${this.name} tiene ${this.age} años de edad`
    }
  }

class Employee extends Person {
  constructor(name, age, title) {
    // Llamamos la estructura del padre "Person"
    super(name, age);
    this.title = title;
  }
  hasJob() {
    return !!this.title;
  }
  getGreeting() {
    //Sobreescribiendo el método
    if (this.title) {
      return `Hola soy ${this.name}. I work as ${this.title}`;
    } else {
      return super.getGreeting();
    }
  }
}

class Programmer extends Person {
  constructor(name, age, preferredLanguage = 'C++') {
    // Llamamos la estructura del padre "Person"
    super(name, age);
    this.preferredLanguage = preferredLanguage;
  }
  getGreeting() {
    if (this.preferredLanguage) {
      return `Hola soy ${this.name}. Soy un desarrollador de ${this.preferredLanguage}`;
    } else {
      return super.getGreeting();
    }
  }
}


  let me = new Employee('Martin', 34, 'Jefe');
  console.log(me.getGreeting());
  // console.log(me.getGreeting());

  let he = new Employee('Carlos');
  console.log(he.getPersonDescription());
  console.log(he.getGreeting());

  let pro = new Programmer('Juan', 34, 'Swift');
  console.log(pro.getGreeting());
});
