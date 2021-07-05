/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const operator = gets();
let x = 1, y = 11,
total = 0,
arr = [];

for (let i = 0; i <= 4; i++) {
    arr.push([]);
    for (let j = 0; j < 12; j++) {
        arr[i].push(Number(gets()));
    }
    arr[i] = arr[i].slice(x, y);
    x++, y--;
}

arr = arr.flat();
total = arr.reduce((a, b) => a + b);

if (operator === 'M') total = total / arr.length;

console.log(total.toFixed(1));
