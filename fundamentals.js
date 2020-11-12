const { isArray } = require('underscore');
/* eslint-disable require-jsdoc */
// eslint-disable-next-line require-jsdoc
const _ = require('underscore');

class Test {
  constructor(name) {
    this.name = name;
  }
  applyName() {
    this.name = String(this.name).replace('oooo', 'e');
  }
}


const hola = new Test('Whooooa!');

hola.applyName();

console.log(hola.name);

const helloList = ['Hello1', 'Hello2', 'Hello3', 'Hello4', 'Hello5'];

helloList.forEach(function (value, index, array) {
  value += 'Dupa';
  console.log(`indeks ${index} ` + value + ` Cuda na kiju:` + array[3]);
});

const sayHello = (elem) => {
  console.log(elem);
};

_.each(helloList, (element) => {
  console.log(element);
});

_.each(helloList, sayHello);


const createTuple = (...arguments) => {
  console.log(arguments);
};

createTuple('It', 'be', 'could', 'anyone', 'no one');

const add = (a, b) => {
  b = b || 2; // it's return 2 if b doesn't exists :) 
  return a + b;
}

add(3); //5


function Wizard(wizardName) {
  this.wizardName = wizardName;
}

Wizard.prototype.throwSpell = function (spell) {
  console.log(`You throw ${spell}`);
}


const constructorArray = function () {
  const arr = Array.from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};
var wasit = constructorArray('was', 'it', 'in'); //was it in the billiards room?
console.log(wasit); //

var callback = function (val) {
  console.log(`We are calling ${val}`)
  return function holdYourValue() {
    console.log(`This is now ${val}`)
  };
};

var callCallback = (value) => value('callback!');
callCallback(callback); //We are calling callback

var closure = callback('closure!'); //
closure(); //It's remember a value passed a line above, result: We are calling closure!
           //                                                   This is now closure!

const multiArgs = function(arg1, ...args) {
  console.log(`Call multi args function ${arg1} \n`);
  console.log(isArray(args));
  for (val of args) {
    console.log(val);
  }
};

multiArgs('one', 'two', 'extra three', 'extra four');


