'Sábado, 5 de Outubro de 2024 15:38'
const dateDiv = document.querySelector('.date');

const data = new Date();

(function() {
    dateDiv.innerHTML = `${weekDay(data.getDay())}, ${data.getDate()} de ${month(data.getMonth())} de ${data.getFullYear()} \n ${data.getHours()}:${data.getMinutes()}`;
})();

function weekDay(value) {
    switch (value) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'        
    }
}

function month (value) {
    switch (value) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro ';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}


setDate();
