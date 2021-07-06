/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const num = [];
while (num.length < 5) num.push(+gets());

const even = num.filter(e => e % 2 == 0);
const odd = num.filter(e => e % 2 != 0);

const positives = num.filter(e => e > 0);
const negatives = num.filter(e => e < 0);

console.log(`${even.length} valor(es) par(es)`);
console.log(`${odd.length} valor(es) impar(es)`);
console.log(`${positives.length} valor(es) positivo(s)`);
console.log(`${negatives.length} valor(es) negativo(s)`);
