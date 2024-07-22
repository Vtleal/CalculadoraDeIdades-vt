

function calcularIdade() {
    let ano = document.getElementById('ano').value;
    let resto = document.getElementById('result');
    let maiorOuMenor = document.getElementById('resultMM');
    let anoAtual = 2024;
    let calculo = anoAtual - ano;
    let resultado = calculo;

    if (calculo >= 18) {
        resto.textContent = resultado;
        maiorOuMenor.innerHTML = 'Maior de idade';
    } else {
        resto.textContent = resultado;
        maiorOuMenor.innerHTML = 'Menor de idade';
    }
}