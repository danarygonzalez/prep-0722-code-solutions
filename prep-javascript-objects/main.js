var person = {
  firstName: 'Danary',
  lastName: 'Gonzalez',
  hobby: 'Gaming'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);
person.job = 'IT Wizard';
console.log("The person's current job is: ", person.job);
person.previousJob = 'Cook';
console.log("the person's previous job is: ", person.previousJob);
console.log(person);
