/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const num = Array.from(Array(5), () => +gets()),
even = num.filter(e => e % 2 == 0).length,
odd = num.filter(e => e % 2 != 0).length,
pos = num.filter(e => e > 0).length,
neg = num.filter(e => e < 0).length;

console.log(
    `${even} valor(es) par(es)\n` + 
    `${odd} valor(es) impar(es)\n` +
    `${pos} valor(es) positivo(s)\n` +
    `${neg} valor(es) negativo(s)`
);
