/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const operator = gets();

const fl = gets();
let arr = [];
let x, y;

if (fl.match(/\s/g)) {
    x = 1, y = 11;

    const fn = x => x.replace(/\s+/g, ' ').trim().split(' ').map(e => +e);
    const subArr = [fn(fl)];

    for (let i = 0; i < 4; i++) {
        const mArr = fn(gets());
        subArr.push(mArr);
    }

    for (let i = 0; i < subArr.length; i++) {
        arr.push(subArr[i].slice(x, y));
        x++, y--;
    }

    arr = arr.flat();

} else {
    x = 0, y = 10;
    arr.push(...Array.from(Array(5), () =>
        Array.from(Array(12), () => +gets()))
        .map(e => (e = e.slice(x, y), x++, y--, e)
        ).flat());
};

let total = arr.reduce((a, b) => a + b);
operator === 'M' ? total /= arr.length : total;
console.log(total.toFixed(1));