/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const total = gets(); 
for (let i = 0; i < total; i++) {
  console.log([...new Set(gets().split(' ').sort())].join(' '));
}
