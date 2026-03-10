let numeros = [];

function adicionarNumero() {
    const input = document.getElementById('numInput');
    const valor = parseFloat(input.value);

    if (isNaN(valor)) {
        alert("Por favor, informe um número válido.");
        return;
    }

    numeros.push(valor);
    document.getElementById('listaContainer').classList.remove('hidden');
    document.getElementById('numerosDigitados').innerText = numeros.join(' | ');

    input.value = "";
    input.focus();
}

function calcularMaior() {
    if (numeros.length === 0) return;

    const maior = Math.max(...numeros);

    const resDiv = document.getElementById('resultado');
    document.getElementById('maiorValor').innerText = maior;
    resDiv.classList.remove('hidden');
}

function reiniciar() {
    numeros = [];
    document.getElementById('listaContainer').classList.add('hidden');
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('numInput').focus();
}