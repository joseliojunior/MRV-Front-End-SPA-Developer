/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

let total = 0,
i = 0,
valor;

while (i < 6) {
    valor = parseFloat(gets());
    if (valor > 0) total++;
    i++;
}

console.log(`${total} valores positivos`);