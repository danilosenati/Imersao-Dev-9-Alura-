function jogar() {

    /**
        * REGRAS DO JOGO - PEDRA, PAPEL E TESOURA:
        * 
        * SE JOGADOR ESCOLHER PEDRA E COMPUTADOR ESCOLHER PEDRA : EMPATE;
        * SE JOGADOR ESCOLHER PAPEL E COMPUTADOR ESCOLHER PAPEL : EMPATE;
        * SE JOGADOR ESCOLHER TESOURA E COMPUTADOR ESCOLHER TESOURA : EMPATE;
        * 
        * SE JOGADOR ESCOLHER PEDRA E COMPUTADOR ESCOLHER PAPEL : COMPUTADOR GANHA;
        * SE JOGADOR ESCOLHER PEDRA E COMPUTADOR ESCOLHER TESOURA : JOGADOR GANHA;
        * 
        * SE JOGADOR ESCOLHER PAPEL E COMPUTADOR ESCOLHER TESOURA : COMPUTADOR GANHA;
        * SE JOGADOR ESCOLHER PAPEL E COMPUTADOR ESCOLHER PEDRA : JOGADOR VENCE;
        * 
        * SE JOGADOR ESCOLHER TESOURA E COMPUTADOR ESCOLHER PEDRA : COMPUTADOR VENCE;
        * SE JOGADOR ESCOLHER TESOURA E COMPUTADOR ESCOLHER PAPEL : JOGADOR VENCE;
        * 
        */

    idade = prompt("Quantos anos você tem? ");

    if (idade >= 9) {
        opcao = prompt("Digite: 1-Pedra | 2-Papel | 3-Tesoura: ");
        valorAleatorio = Math.floor(Math.random() * 3) + 1; // GERANDO NUMEROS ALEATORIOS

        //VERIFICANDO SE HOUVE EMPATE:
        if (opcao == valorAleatorio) {
            alert("Empate!!")
        }

        // PRIMEIRA VERIFICAÇÃO:
        if (opcao == 1 && valorAleatorio == 2) { // JOGADOR ESCOLHEU PEDRA E COMPUTADOR PAPEL
            alert("Computador venceu, escolheu papel");
        }
        else if (opcao == 1 && valorAleatorio == 3) { // JOGADOR ESCOLHEU PEDRA E COMPUTADOR TESOURA
            alert("Jogador venceu, escolheu pedra");
        }

        // SEGUNDA VERIFICAÇÃO:
        else if (opcao == 2 && valorAleatorio == 3) { // JOGADOR ESCOLHEU PAPEL E COMPUTADOR TESOURA
            alert("Computador venceu!, escolheu pedra");
        }
        else if (opcao == 2 && valorAleatorio == 1) { // JOGADOR ESCOLHEU PAPEL E COMPUTADOR  PEDRA
            alert("Jogador venceu!, escolheu papel");
        }
        // TERCEIRA VERIFICAÇÃO:
        else if (opcao == 3 && valorAleatorio == 1) { // JOGADOR ESCOLHEU TESOURA E COMPUTADOR PEDRA
            alert("Computador venceu!, escolheu pedra");
        }
        else if (opcao == 3 && valorAleatorio == 2) { // JOGADOR ESCOLHEU TESOURA E COMPUTADOR PAPEL
            alert("Jogador venceu!, escolheu tesoura");
        }
        // VERIFICANDO SE FOI DIGITADO UM NÚMERO INVALIDO
        else {
            alert("Número digitado invalido");
        }


        alert("O número escolhido pelo computador foi: " + valorAleatorio);
    }
}