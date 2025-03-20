//Funções
//let Numero = prompt('Digite um número');
function verificarPar() {

    if (Numero % 2 === 0) {
        console.log(Numero + "é um número par");
    } else {
        console.log(Numero + "é um número é ímpar");
    }
}

//let n1 = parseFloat(prompt('digite um número'));
//let n2 = parseFloat(prompt('digite outro número'));
function calcular(n1, n2) {
    console.log(n1 + n2);
    console.log(n1 * n2);
    console.log(n1 - n2);
    if (n1 === 0) {
        console.log("Não é possível resolver");
    } else {
        console.log(n1 / n2);
    }
}

//let numero = 10
//do {
    //console.log(numero --)
//}
//while (numero > 0)

//let palavra = prompt('Digite uma palvra');
function inverterTexto(palavra) {
       console.log(palavra.split("").reverse().join(""));
}

let pal = parseFloat(prompt('Digite uma palavra'));
function contarCaracteres(pal) {
       
}

//chamando função
//verificarPar();
//calcular(n1, n2);
//inverterTexto(palavra)

