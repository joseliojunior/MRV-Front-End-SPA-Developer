/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

for (let i = 0, j = +gets(); i < j; i++) {
  console.log([...new Set(gets().split(' ').sort())].join(' '));
}
