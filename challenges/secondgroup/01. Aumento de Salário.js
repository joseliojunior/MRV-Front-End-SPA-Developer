const input = gets();

const salary = +input;

let percent;

if (input >= 0 && input <= 400 ) {
  percent = 15;
} else if (input >= 400.01 && input <= 800) {
  percent = 12;
} else if (input >= 800.01 && input <= 1200) {
  percent = 10;
} else if (input >= 1200.01 && input <= 2000) {
  percent = 7;
} else {
  percent = 4;
};

const reajust = salary * (percent / 100);
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");