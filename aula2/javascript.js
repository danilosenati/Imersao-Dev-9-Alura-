function jogar(){
    idade = prompt("Digite sua idade: ");

    if(idade >= 5){
        opcao = prompt("Digite: 1-Pedra | 2-Papel | 3-Tesoura: ");
        valorAleatorio = Math.floor(Math.random() * 3) + 1; // GERANDO NUMEROS ALEATORIOS

        /**
         * REGRAS DO JOGO:
         * 
         * SE JOGADOR ESCOLHER PEDRA E COMPUTADOR ESCOLHER PEDRA : EMPATE;
         * SE JOGADOR ESCOLHER PAPEL E COMPUTADOR ESCOLHER PAPEL : EMPATE;
         * SE JOGADOR ESCOLHER TESOURA E COMPUTADOR ESCOLHER TESOURA : EMPATE;
         * 
         * SE JOGADOR ESCOLHER PEDRA E COMPUTADOR ESCOLHER PAPEL : COMPUTADOR GANHA;
         * SE JOGADOR ESCOLHER PEDRA E COMPUTADOR ESCOLHER TESOURA : JOGADOR GANHA;
         * 
         * SE JOGADOR ESCOLHER PAPEL E COMPUTADOR ESCOLHER TESOURA : COMPUTADOR GANHA;
         * SE JOGADOR ESCOLHER PEDRA E COMPUTADOR ESCOLHER PEDRA : EMPATE;
         */

    }
}