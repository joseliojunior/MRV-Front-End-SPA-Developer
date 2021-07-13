/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const salary = +gets();
let percent;

percent = salary <= 400 ? 15
  : salary >= 400.01 && salary <= 800 ? 12
    : salary >= 800.01 && salary <= 1200 ? 10
      : salary >= 1200.01 && salary <= 2000 ? 7
        : 4;

const reajust = salary * (percent / 100);
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
