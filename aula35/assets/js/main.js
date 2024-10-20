const res = document.querySelector('.res');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

for(e of elementos) {
    let element = document.createElement(e.tag)
    element.innerHTML = e.texto
    res.appendChild(element)
}