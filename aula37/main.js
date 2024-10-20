// For ...of
const nomes = ['João', 'Humberto', 'Ribeiro'];

for(e of nomes) {
    console.log(e);
}

// forEach
nomes.forEach((e, i) => {
    console.log(i, e)
})