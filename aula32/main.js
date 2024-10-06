const numeros = [1, 2, 3, 4, 5];

let [n1, n2, ...resto] = numeros;
//console.log(n1, n2, resto);

const listas = [[1,2,3], [4,5,6], [7,8,9]];
let [lista1, [,,seis], lista3] = listas
console.log(lista1, seis, lista3)