const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('#button');
const resDiv = document.querySelector('#res');


button.addEventListener('click', e => showResults());

function showResults() {
    if(!weight.value || !height.value) {
        resDiv.innerHTML = `<p style="color: red">ERROR</p>`
    } else {
        let imc = calcIMC(Number(weight.value), Number(height.value));
        let res;
        if(imc < 18.5) res = "Abaixo do peso"
        else if(imc >= 18.5 && imc < 24.9)  res = "Peso normal"
        else if(imc >= 25 && imc < 29.9)  res = "Sobrepeso"
        else if(imc >= 30 && imc < 34.9)  res = "Obesidade grau 1"
        else if(imc >= 35 && imc < 39.9)  res = "Obesidade grau 2"
        else res = "Obesidade Grau 3"

        resDiv.innerHTML = `<p style="background-color: var(--primary-color)">Seu imc é ${imc} | ${res}</p>`;
    }
}

function calcIMC(weight, height) {
    return weight / (height ** 2)
}