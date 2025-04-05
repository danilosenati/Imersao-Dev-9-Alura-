/**TAREFAS:
 * 
 * 1° - CRIAR UM LISTA COM 3 JOGADORES;
 * 2° - CALCULAR A FORÇA DE CADA JOGADOR, E DEPOIS SOMAR PARA SABER A FORÇA DO TIME;
 * 3º - CALCULAR A FORÇA DE CADA JOGADOR DO TIME DO  JOGADOR;
 * 4° - COMPARAR OS DOIS TIMES PARA SABER QUEM VENCEU
 */

// 1° - CRIAR UM LISTA COM 3 JOGADORES:
    personagensUsuario = ["" , "" , ""]; // JOGADORES DO USUARIO.

    persornagensComputador  = ["", "", ""]; // JOGADORES DO COMPUTADOR.

    // 2° - CALCULAR A FORÇA DE CADA JOGADOR, E DEPOIS SOMAR PARA SABER A FORÇA DO TIME;
    forcaPersonagensUsuario = 0;
    forcaPersonagensComputador = 0;
    
    
    for(let i = 0; i < 3; i++){
        escolhaPersonagensUsuario = prompt("Digite o nome do seu " + (i+1) + "º personagem");
        personagensUsuario[i] = escolhaPersonagensUsuario;
    }

    console.log("Personagens do usuário: " + personagensUsuario);

    for(let i = 1; i < 3; i++ ){
        indiceAleatorio = Math.floor(Math.random() * 10);
        
    }