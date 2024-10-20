const container = document.querySelector('.container');
let res = document.createElement('div');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

for(e of elementos) {
    let element = document.createElement(e.tag);
    let text = document.createTextNode(e.texto);
    
    element.appendChild(text);
    res.appendChild(element);
}

container.appendChild(res);