const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilos = getComputedStyle(document.body);

for(e of ps) {
    e.style.backgroundColor = estilos.backgroundColor
    e.style.color = '#fff'
}