function calcularNivelRankeado(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

const historicoJogadores = [
    { nome: "Jogador1", vitorias: 8, derrotas: 5 },
    { nome: "Jogador2", vitorias: 15, derrotas: 10 },
    { nome: "Jogador3", vitorias: 45, derrotas: 20 },
    { nome: "Jogador4", vitorias: 120, derrotas: 30 }
];

for (let i = 0; i < historicoJogadores.length; i++) {
    const jogador = historicoJogadores[i];
    const resultado = calcularNivelRankeado(jogador.vitorias, jogador.derrotas);
    console.log(`${jogador.nome}: Saldo de ${resultado.saldoVitorias}, Nível ${resultado.nivel}`);
}