//Variáveis
let Numero = prompt('Digite um número');
let n1 = 10
let n2 = 11
//Funções
function verificarPar() {

if (Numero % 2 === 0) {
    console.log( Numero + "é um número par");
} else {
    console.log( Numero + "é um número é ímpar");
}
}

function calcular(n1,n2) {
       console.log(n1 + n2)
       console.log(n1 * n2)
       console.log(n1 - n2)
       console.log(n1 / n2);
}

//chamando função
//verificarPar();
calcular()

