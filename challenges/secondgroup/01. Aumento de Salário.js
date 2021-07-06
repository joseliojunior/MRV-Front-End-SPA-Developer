/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const salary = +gets();
let percent;

if (salary <= 400 ) {
  percent = 15;
} else if (salary >= 400.01 && salary <= 800) {
  percent = 12;
} else if (salary >= 800.01 && salary <= 1200) {
  percent = 10;
} else if (salary >= 1200.01 && salary <= 2000) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = salary * (percent / 100);
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
