/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const operator = gets();
const fl = gets();
const arr = [];
let x, y;

if (fl.match(/\s/g)) {
    x = 1, y = 11;
    const fn = x => x.replace(/\s+/g, ' ').trim().split(' ').map(e => +e);

    arr.push(...[fn(fl), ...Array.from(Array(4), () => fn(gets()))]
        .map(e => (e = e.slice(x, y), x++, y--, e))
        .flat());
} else {
    x = 0, y = 10;

    arr.push(...Array.from(Array(5), () =>
        Array.from(Array(12), () => +gets()))
        .map(e => (e = e.slice(x, y), x++, y--, e))
        .flat());
};

let total = arr.reduce((a, b) => a + b);
operator === 'M' ? total /= arr.length : total;
console.log(total.toFixed(1));