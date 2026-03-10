let listaValores = [];

function adicionarValor() {
    const input = document.getElementById('numInput');
    const valor = parseFloat(input.value);

    if (isNaN(valor)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    listaValores.push(valor);

    document.getElementById('painelDados').classList.remove('hidden');
    document.getElementById('contagem').innerText = listaValores.length;
    document.getElementById('listaNumeros').innerText = listaValores.join(', ');
    input.value = "";
    input.focus();
}

function mostrarMedia() {
    if (listaValores.length === 0) return;

    const soma = listaValores.reduce((acc, curr) => acc + curr, 0);
    const media = soma / listaValores.length;

    const resDiv = document.getElementById('resultado');
    document.getElementById('mediaFinal').innerText = media.toFixed(2);
    resDiv.classList.remove('hidden');
}

function reiniciar() {
    listaValores = [];
    document.getElementById('painelDados').classList.add('hidden');
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('numInput').focus();
}