/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const numero = [];
for (let i = 0; i < 5; i++) {
    numero.push(Number(gets()));
}

const pares = numero.filter(e => e % 2 == 0);
const impares = numero.filter(e => e % 2 != 0);

const positivos = numero.filter(e => e > 0);
const negativos = numero.filter(e => e < 0);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");
