/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const nums = x => x?.trim().split(/[^-0-9.]+/g);
let aX = [gets(), ...nums(gets())];
const getsFixed = _ => (aX = aX.length === 0 ? nums(gets()) : aX, aX?.shift());

const operator = getsFixed();
let x = 1, y = 11;

const arr = Array.from(Array(5), _ =>
    Array.from(Array(12), _ => +getsFixed()))
    .map(e => (e = e.slice(x, y), x++, y--, e)
    ).flat();

let total = arr.reduce((a, b) => a + b);

operator === 'M' ? total /= arr.length : total;

console.log(total.toFixed(1));
