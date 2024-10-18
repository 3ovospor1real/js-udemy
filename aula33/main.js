const pessoa = {
    nome: 'João',
    idade: 16,
    endereco: {
        rua: 'Av. Dom Pedro II',
        n: 103
    }
};

let {nome: nombre, idade, endereco: {n}, endereco} = pessoa

console.log(nombre, idade, n, endereco);