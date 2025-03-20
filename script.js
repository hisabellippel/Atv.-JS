//Variáveis
//let Numero = prompt('Digite um número');
let n1 = parseFloat (prompt = ("digite um número"));
let n2 = parseFloat (prompt = ("digite outro número"));

//Funções
function verificarPar() {

if (Numero % 2 === 0) {
    console.log( Numero + "é um número par");
} else {
    console.log( Numero + "é um número é ímpar");
}
}

function calcular(n1,n2) {
       console.log(n1 + n2);
       console.log(n1 * n2);
       console.log(n1 - n2);
       console.log(n1 / n2);
       if ( n1 === 0) {
        console.log("não é possível resolver")
       } else {
        console.log(n1 / n2)
       }
}

//chamando função
//verificarPar();
calcular(n1,n2)

