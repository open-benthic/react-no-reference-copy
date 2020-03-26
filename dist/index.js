"use strict";

// const a = () => {};
const a = b => b;

const double = [1, 2, 3].map(num => num * 2);
const doubleCopy = [...double]; // [2,4,6]

console.log(doubleCopy);
const bob = {
  _name: 'Bob',
  _friends: ['Sally', 'Tom'],

  printFriends() {
    this._friends.forEach(f => console.log(this._name + ' knows ' + f));
  }

};
console.log(`Hi! bob is friend with ${bob.printFriends()}`);