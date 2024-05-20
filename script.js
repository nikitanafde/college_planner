console.log ("Good Day!");

let grade = 9;
if (grade < 9) {
  console.log("You are too young to be in high school.");
} else if (grade > 12) {
  console.log('You are too old to be in high school.');
} else {
  console.log('Current Grade', grade);
}
const totalyears = 4;

let sum = grade + 1;
console.log('Your grade next year', sum);

let header = document.getElementById ('hclasses');
console.log(header); 
header.textContent = 'High School Classes';

const buttonA = document.querySelector("#buttonG");
const headingA = document.querySelector("#headingG");
buttonG.onclick = () => {
  const name = prompt("Are you a freshman, sophomore, junior or senior?");
  alert(`Hello ${name}, plan what classes you want to take in highschool!`);
};





