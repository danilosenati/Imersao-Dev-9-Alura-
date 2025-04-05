/**TAREFAS:
 * 
 * 1° - CRIAR UM LISTA COM 3 JOGADORES;
 * 2° - CALCULAR A FORÇA DE CADA JOGADOR, E DEPOIS SOMAR PARA SABER A FORÇA DO TIME;
 * 3º - CALCULAR A FORÇA DE CADA JOGADOR DO TIME DO  JOGADOR;
 * 4° - COMPARAR OS DOIS TIMES PARA SABER QUEM VENCEU
 */

// 1° - CRIAR UM LISTA COM 3 JOGADORES:
personagensUsuario = ["", "", ""]; // JOGADORES DO USUARIO.

persornagensComputador = ["", "", ""]; // JOGADORES DO COMPUTADOR.

// 2° - CALCULAR A FORÇA DE CADA JOGADOR, E DEPOIS SOMAR PARA SABER A FORÇA DO TIME;
forcaPersonagensUsuario = 0;
forcaPersonagensComputador = 0;

// POPULANDO A LISTA DE JOGADORES DO USUÁRIO:
for (let i = 0; i < 3; i++) {
    escolhaPersonagensUsuario = prompt("Digite o nome do seu " + (i + 1) + "º personagem");
    personagensUsuario[i] = escolhaPersonagensUsuario;

    // 2° - CALCULAR A FORÇA DE CADA JOGADOR, E DEPOIS SOMAR PARA SABER A FORÇA DO TIME;
    forcaPersonagensUsuario += Math.floor(Math.random() * 10) + 1;

}

alert("Personagens do usuário: " + personagensUsuario);

// POPULANDO A LSITA DE PERSONAGENS DO COMPUTADOR:
for (let i = 0; i < 3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 10); // CRIANDO INDICES ALEATORIOS
    viloesAleatorios = ["Nazgul", "Coringa", "Dart Vader", "Dracula", "Lula", "Valdemort", "Lampião", "Gollun", "Sauron", "Morgoth"];
    persornagensComputador[i] = viloesAleatorios[indiceAleatorio];

    // 2° - CALCULAR A FORÇA DE CADA JOGADOR, E DEPOIS SOMAR PARA SABER A FORÇA DO TIME;
    forcaPersonagensComputador += Math.floor(Math.random() * 10) + 1;
}
alert(persornagensComputador);

// 4° - COMPARAR OS DOIS TIMES PARA SABER QUEM VENCEU
if (forcaPersonagensUsuario > forcaPersonagensComputador) {
    alert("Jogador venceu! \n A força do seu time é: " + forcaPersonagensUsuario);
}
else if (forcaPersonagensUsuario < forcaPersonagensComputador) {
    alert("Computador venceu! \n A força de seu time é: " + forcaPersonagensComputador);
}
else {
    alert("Empate, o time do computador possui: " + forcaPersonagensComputador + " pontos. \n O time do jogador possui: " + forcaPersonagensUsuario);
} 