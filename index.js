function coletarInformacoesJogador() {
    let nome = prompt("Por favor, digite o nome do jogador: ");
    let vitorias = parseInt(prompt("Agora digite o número de vitórias: "), 10);
    let derrotas = parseInt(prompt("Qual o número de derrotas: "), 10);

    return { nome, vitorias, derrotas };
}

function tier(vitorias, derrotas) {
    let saldo = vitorias - derrotas;

    if (saldo <= 10) {
        return "ferro";
    } else if (saldo <= 20) {
        return "bronze";
    } else if (saldo <= 50) {
        return "prata";
    } else if (saldo <= 80) {
        return "ouro";
    } else if (saldo <= 90) {
        return "diamante";
    } else if (saldo <= 100) {
        return "lendário";
    } else if (saldo > 100) {
        return "imortal";
    } else {
        return "inválido";
    }
}

function continuar() {
    while (prompt("Deseja continuar? [S/N]:").toLowerCase() === "s") {
        let { nome, vitorias, derrotas } = coletarInformacoesJogador();
        let saldo = vitorias - derrotas;
        alert("O herói " + nome + " tem um saldo de " + saldo + " e está no nível " + tier(vitorias, derrotas) + ", parabéns!");
    }
}

let { nome, vitorias, derrotas } = coletarInformacoesJogador();
let saldo = vitorias - derrotas;
alert("O herói " + nome + " tem um saldo de " + saldo + " e está no nível " + tier(vitorias, derrotas) + ", parabéns!");
continuar();