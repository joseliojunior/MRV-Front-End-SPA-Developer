/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const operator = gets();
let x = 1, y = 11;

const arr = Array.from(Array(5), () =>
    Array.from(Array(12), () => +gets()))
        .map(e => (e = e.slice(x, y), x++, y--, e)      
).flat();

let total = arr.reduce((a, b) => a + b);

operator === 'M' ? total /= arr.length : total;

console.log(total.toFixed(1));
