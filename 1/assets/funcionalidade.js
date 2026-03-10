function processarTroco() {

    const valorCompra = parseInt(document.getElementById('valorCompra').value);
    const valorPago = parseInt(document.getElementById('valorPago').value);
 
    const resultadoDiv = document.getElementById('resultado');
    const mensagemErro = document.getElementById('mensagemErro');
    const detalhesTroco = document.getElementById('detalhesTroco');
    const listaNotas = document.getElementById('listaNotas');
    const totalTrocoSpan = document.getElementById('totalTroco');

    resultadoDiv.classList.remove('hidden');
    mensagemErro.innerText = "";
    listaNotas.innerHTML = "";
    detalhesTroco.style.display = "block";

    if (valorPago < valorCompra) {
        mensagemErro.innerText = "A quantia paga é insuficiente para realizar a compra!";
        detalhesTroco.style.display = "none";
        return;
    }

    let troco = valorPago - valorCompra;
    totalTrocoSpan.innerText = `R$ ${troco.toFixed(2)}`;

    const notasDisponiveis = [50, 20, 10, 5, 2, 1];
 
    notasDisponiveis.forEach(nota => {
        let quantidadeNotas = Math.floor(troco / nota);
        troco %= nota; 

        const li = document.createElement('li');
        li.innerText = `Notas de R$ ${nota.toFixed(2)}: ${quantidadeNotas}`;
        listaNotas.appendChild(li);
    });
}