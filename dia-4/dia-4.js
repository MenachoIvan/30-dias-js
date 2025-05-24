function frutaEmpacadaCorrectamente(entrada, salida) {
  const pila = [];
  let i = 0;
  let j = 0;

  for (let fruta of entrada) {
    pila.push(fruta);
    i++;
  }

  return pila[i - 1] === salida[j];
}

console.log(
  frutaEmpacadaCorrectamente(
    ['manzana', 'banana', 'kiwi'],
    ['kiwi', 'banana', 'manzana']
  )
);
// true → se empacaron en orden LIFO

console.log(
  frutaEmpacadaCorrectamente(
    ['manzana', 'banana', 'kiwi'],
    ['banana', 'kiwi', 'manzana']
  )
);
// false → no se puede obtener así desde una pila
