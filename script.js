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

//let pal = prompt('Digite uma palavra:');
function contarCaracteres( pal ) {
       console.log( pal.length );
}


class carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInformações() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`);
    }
}
//const meucarro = new carro('Mercedes','GLA200', '2020');

//let nome = prompt('digite seu nome:')
const mensagem = 'Olá';
function mensagemPersonalizada(nome, mensagem) {
    console.log (mensagem + nome);
}

//let n1 = parseFloat(prompt('digite um número'));
//let n2 = parseFloat(prompt('digite um número'));
//let n3 = parseFloat(prompt('digite um número'));
function media (n1, n2, n3) {
    console.log((n1 + n2 + n3));
}

/*for (let numero = 1; numero < 21; numero++) {
    console.log (numero)
    if (numero % 3 === 0) {
        console.log ('Esse número é múltiplo de três') 
    } else {
        console.log ('Esse número não é múltiplo de três')
    }
}*/

let palavra = (prompt('digite sua palavra'))
function verificarPalavra (palavra) {
    let palindroma = (palavra.split("").reverse(). join(""));
    if (palavra === palindroma ) {
        console.log ('essa palavra é palindroma');
    } else {
        console.log('essa palavra não é palindroma');
    }
}

//chamando função
//verificarPar();
//calcular(n1, n2);
//inverterTexto(palavra);
//contarCaracteres ( pal );
//meucarro.exibirInformações()
//mensagemPersonalizada(nome, mensagem)
//media(n1, n2, n3)
verificarPalavra(palavra)
