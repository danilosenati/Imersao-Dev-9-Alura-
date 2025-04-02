/*
valorWons = prompt("Digite um valor em wons: ");

cotacaoWons = 0.0040;

valorConvertido = valorWons*cotacaoWons;

alert("R$: " + valorConvertido);
*/

// Para converter em Real.
// alert(valorConvertido);

function conversor(){
    cotacaoReal = 0.0040;
    cotacaoDolar = 0.00068;
    cotacaoEuro = 0.00063;

    valorWons = prompt("Digite um valor em wons: ");
    
    resposta = prompt("Digite: 1 para REAL | 2 para DOLAR | 3 para EURO: ");
    if(resposta == 1){
        valorConvertido = valorWons * cotacaoReal;
    }else if(resposta == 2){
        valorConvertido = valorWons * cotacaoDolar;
    }else{
        valorConvertido = valorWons * cotacaoEuro;
    }
 
    alert("Valor convertido: " + valorConvertido);
}
