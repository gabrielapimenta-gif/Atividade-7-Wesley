function resolverEquacao() {
    const a = parseFloat(document.getElementById('coefA').value);
    const b = parseFloat(document.getElementById('coefB').value);
    const c = parseFloat(document.getElementById('coefC').value);
    
    const divRes = document.getElementById('resultado');
    const divStatus = document.getElementById('status');
    const divDetalhes = document.getElementById('detalhes');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    divRes.classList.remove('hidden');
    let statusMsg = "";
    let detalhesMsg = "";

    if (a === 0 && b === 0 && c === 0) {
        statusMsg = "Igualdade confirmada: 0 = 0";
    } 
    else if (a === 0 && b === 0 && c !== 0) {
        statusMsg = "Coeficientes informados incorretamente";
    }
    else if (a === 0 && b !== 0) {
        const x = -c / b;
        statusMsg = "Esta é uma equação de primeiro grau";
        detalhesMsg = `Raiz real: x = ${x.toFixed(2)}`;
    }
    else {
        statusMsg = "Esta é uma equação de segundo grau. ";
        const delta = (b * b) - (4 * a * c);
        if (delta < 0) {
            statusMsg += "Esta equação não possui raízes reais.";
            detalhesMsg = `delta = ${delta}`;
        } 
        else if (delta === 0) {
            const x = -b / (2 * a);
            statusMsg += "Esta equação possui duas raízes reais iguais.";
            detalhesMsg = `x' = x'' = ${x.toFixed(2)}`;
        } 
        else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            statusMsg += "Esta equação possui duas raízes reais diferentes.";
            detalhesMsg = `delta = ${delta}, x' = ${x1.toFixed(2)}, x'' = ${x2.toFixed(2)}`;
        }
    }

    divStatus.innerHTML = `<strong>${statusMsg}</strong>`;
    divDetalhes.innerHTML = detalhesMsg;
}