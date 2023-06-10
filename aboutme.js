'use strict';
let userPoints = 0;

function tulsa() {
  let person = prompt('Do I like Tulsa Oklahoma?').toUpperCase();
  if (person === 'YES' || person === 'Y') {
    userPoints++;
    alert('You are correct.');
  } else {
    alert('You are incorrect');
  }
}
tulsa();
// Jon completed 4-13 as the driver;

function red() {
  let color = prompt('Do I like the color Red?').toUpperCase();
  if (color === 'YES' || color === 'Y') {
    userPoints++;
    alert('You are correct');
  } else {
    alert('You are incorrect');
  }
}
red();
// Jon completed line 16-22 as the driver;

function school() {
  let education = prompt(
    'Did I graduate from Middle Tennesee State University?'
  ).toUpperCase();
  if (education === 'YES' || education === 'Y') {
    userPoints++;
    alert('You are correct');
  } else {
    alert('You are incorrect');
  }
}
school();
// Jon completed lines 28 - 37 as the driver;

function city() {
  let peace = prompt('Do I like Nashville?').toUpperCase();
  if (peace === 'YES' || peace === 'Y') {
    userPoints++;
    alert('You are correct');
  } else if (peace === 'NO' || peace === 'N') {
    alert('You are incorrect');
  } else if (peace === 'MAYBE') {
    alert('You need to be sure of yourself');
  } else {
    alert('What is wrong with you?');
  }
}
city();
// Jon completed lines 40-53 as the driver;

let people = prompt('Do I like Animals?');
people = people.toUpperCase();
// console.log(person)
if (people === 'NO') {
  //console.log ("No. I do not");
  alert('You are wrong');
} else if (people === 'YES' || people === 'Y') {
  //console.log ("You're Right");
  alert("You're Right");
}
let number = '';
let i = 0;
while (number !== '5') {
  //console/log(first game :', i)
  number = prompt('Guess a number between 1 and 10');
  if (number < 3) {
    alert('too low');
  } else if (number > 5) {
    alert('too high');
  }
  i++;
  if (i === 5) {
    number = '5';
    alert('Your Right');
    break;
  }
}
i++;
if (i < 4) {
  number = '5';
}
for (let i = 0; i < 4; i++) {
  console.log('second game : ', i);
  let number2 = prompt('guess a number between 1 and 10');
  if (number2 === '5') {
    alert('correct');
    break;
  }
}
if (i === 2) {
  alert('out of guesses');
}

let food =
  String[
    ('Chicken Wings',
    'Pizza',
    'Tacos',
    'French Fries',
    'Hamburgers',
    'Nachos',
    'Ribs')
  ];
console.log(food);
let correct = false;

for (let j = 0; j < 7; j++) {
  console.log(food);
  let answer = prompt('Guess one of my Favorite Foods').toLocaleLowerCase();

  for (let k = 0; k < food.length; k++) {
    if (answer === food[k]) {
      userPoints++;
      console.log('Yes ${answer} is one of my favorite foods.');
      alert('Yes ${answer} is one of my favortite foods. You get a point.');
      correct = true;
      break;
    }
  }
  if (correct === true) {
    break;
  } else if (j < 6) {
    console.log('That is not on my List, Please try again.');
    alert('That is not on my List, Please try again.');
  } else {
    console.log('Sorry, you have run out of Guesses.');
    alert('Sorry, you have run out of guesses.');
  }
}
//alert (person);
// let color = promp()

let username = prompt('What is your Name?');
// console.log(username);
alert('Greetings ' + username);
//console.log(username);
