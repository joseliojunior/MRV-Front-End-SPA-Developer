/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const totalItems = gets();

for (let i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(' ').sort();
  let itensUnicos = new Set(itensOrdenados);
  let resposta = [...itensUnicos].join(' ');
  console.log(resposta);
}