function jogar() {
    let rodada = 1;
    resultado = 0; // SE FOR 1 , PERDEU. SE FOR 0, GANHOU.

    for (rodada = 1; rodada <= 3; rodada++) {
        escolhaJogador = prompt("Nível " + rodada + ": Escolha um vidro (1, 2, 3)");
        pisoQuebrado = Math.floor(Math.random() * 3 + 1);

        if (escolhaJogador == pisoQuebrado) {
            alert("Que pena! o vidro " + escolhaJogador + " quebrou. Você perdeu!");
            rodada = 1000;
            resultado = 1;
        }
        else {
            alert("Bom salto! você passou para o próximo nível.");
        }
    }

    if (ganhou == 0) {
        alert("Parabns! Você completou o desafio!");
    }

}