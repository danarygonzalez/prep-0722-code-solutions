function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('AddTwoNumber exercise results: ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise results:', minutes, 'minutes');

function getGreeting(name) {
  return name;
}
var greeting = getGreeting('Mr Bond!');
console.log('getGreeting exercise results: Hello ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var multiplyTotal = addAndMultiplyBy5(10, 5);
console.log('multiplyTotal exercise results:', multiplyTotal);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var divisionTotal = multiplyAndDivideBy5(20, 15);
console.log('multiplyAndDivideB5 exercise results: ', divisionTotal);

function subtractTwoNumers(num1, num2) {
  return num1 - num2;
}
var subtractTotal = subtractTwoNumers(100, 23);
console.log('subtractTwoNumbers exercise results: ', subtractTotal);

function getCircleCircumference(radius) {
  return (2 * 3.141592) * radius;
}
var circleCircumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise result: ', circleCircumference);

function getFullName(firstName, LastName) {
  return firstName + ' ' + LastName;
}
var fullName = getFullName('Cookie', 'Monster');
console.log('getFullName exercise results: ', fullName);

function cube(number) {
  return number * number * number;
}
var cubeTotal = cube(9);
console.log('cube exercise results: ', cubeTotal);
