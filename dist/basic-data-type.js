"use strict";
// primitive type data
// 1. string data type
const myName = 'akram khan';
// 2. number data type
let myAge = 100;
myAge = 200;
// now this will throw error
// myAge ='akka'
// Because string type data is not assignable to number data type and similarly vice versa
// 3. boolean data type
const isMarried = false;
// 4. undefined data type 
const gfName = undefined;
// 5. null data type
const bow = null;
// Non primitive data type
// 6. array data type
// array of string data type
let hoby = ['world tour', 'interest in world history and world geopolitics', 'Islamic history and its golden age'];
// array of number data type
let febNumber = [7, 47, 1, 17];
// now can not assign string to the number array and number to the string array
// febNumber[2] = 'not allow to input string to number array type'
// hobe[0] = 1
// tuple data type
const ageSex = [100, 'male'];
// object data type
const carrerPriority = {
    index: 1,
    occupation: 'web devloper',
    target: 'work as a senior web devloper within next 3 years',
    path: ['hard working', 'giving 100% effort', 'dedication', 'regular time']
};
const carrerPriority2 = {
    index: 1,
    occupation: 'web devloper',
    target: 'work as a senior web devloper within next 3 years',
    path: ['hard working', 'giving 100% effort', 'dedication', 'regular time']
};
