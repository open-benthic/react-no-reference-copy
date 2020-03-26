"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noReferenceMultiply = void 0;

// const nums = [1, 2, 3];
const noReferenceMultiply = ar => {
  return [...ar.map(el => el * 2)];
}; // console.log(noReferenceMultiply(nums));
// const bob = {
//   _name: 'Bob',
//   _friends: ['Sally', 'Tom'],
//   printFriends() {
//     this._friends.forEach(f => console.log(this._name + ' knows ' + f));
//   }
// };
// console.log(`Hi! bob is friend with ${bob.printFriends()}`);
// const double = [1, 2, 3].map(num => num * 2);
// const doubleCopy = [...double]; // [2,4,6]
// console.log(doubleCopy);


exports.noReferenceMultiply = noReferenceMultiply;