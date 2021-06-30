let totalItems = gets();

for (let i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  let itensUnicos = itensOrdenados.filter((elm, i, arr) => arr.indexOf(elm) === i );
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
};