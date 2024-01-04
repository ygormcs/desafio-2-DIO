let nome = prompt("Por favor, digite o nome do jogador: ")
let vitorias = prompt("Agora digite o número de vitórias: ")
let derrotas = prompt("Qual o número de derrotas: ")

function tier (vitorias, derrotas) {
    resultado = vitorias - derrotas

    if (resultado <= 10) {
        resultado = "ferro"
    } else if (resultado >= 10 && resultado <= 20) {
        resultado = "bronze"
    } else if (resultado >= 21 && resultado <= 50) {
        resultado = "prata"
    } else if (resultado >= 51 && resultado <= 80) {
        resultado = "ouro"
    } else if (resultado >= 81 && resultado <= 90) {
        resultado = "diamante"
    } else if (resultado >= 91 && resultado <= 100) {
        resultado = "lendário"
    } else if (resultado >= 101) {
        resultado = "imortal"
    }
    
    return resultado
}

alert(tier(vitorias, derrotas))