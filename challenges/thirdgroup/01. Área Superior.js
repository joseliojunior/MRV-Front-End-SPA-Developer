/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const operator = gets();
const fl = gets();
let x = 1, y = 11, arr = [];

if (fl.match(/\s/g)) {
    const fn = x => x.replace(/\s+/g, ' ').trim().split(' ').map(e => +e);

    arr.push(...[fn(fl), ...Array.from(Array(4), () => fn(gets()))])
} else {
    arr.push([fl, ...Array.from(Array(11), _ => +gets())],
        ...Array.from(Array(4), _ =>
            Array.from(Array(12), _ => +gets()))
    );
};

const sum = arr.slice(0, 5)
    .flatMap(e => (e = e.slice(x, y), x++, y--, e))
    .reduce((a, b) => a + b);

const total = operator === 'M' ? sum / 30 : sum;
console.log(total.toFixed(1));
