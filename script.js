//let Numero = prompt('Digite um número');
function verificarPar() {

    if (Numero % 2 === 0) {
        console.log(Numero + "é um número par");
    } else {
        console.log(Numero + "é um número é ímpar");
    }
}
//verificarPar();

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
//calcular(n1, n2);

//let numero = 10
//do {
    //console.log(numero --)
//}
//while (numero > 0)

//let palavra = prompt('Digite uma palvra');
function inverterTexto(palavra) {
       console.log(palavra.split("").reverse().join(""));
}
//inverterTexto(palavra);

//let pal = prompt('Digite uma palavra:');
function contarCaracteres( pal ) {
       console.log( pal.length );
}
//contarCaracteres ( pal );


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
//meucarro.exibirInformações();

//let nome = prompt('digite seu nome:')
const mensagem = 'Olá';
function mensagemPersonalizada(nome, mensagem) {
    console.log (mensagem + nome);
}
//mensagemPersonalizada(nome, mensagem);


//let n1 = parseFloat(prompt('digite um número'));
//let n2 = parseFloat(prompt('digite um número'));
//let n3 = parseFloat(prompt('digite um número'));
function media (n1, n2, n3) {
    console.log((n1 + n2 + n3));
}
//media(n1, n2, n3);

/*for (let numero = 1; numero < 21; numero++) {
    console.log (numero)
    if (numero % 3 === 0) {
        console.log ('Esse número é múltiplo de três') 
    } else {
        console.log ('Esse número não é múltiplo de três')
    }
}*/

//let palavra = (prompt('digite sua palavra'))
function verificarPalavra (palavra) {
    let palindroma = (palavra.split("").reverse(). join(""));
    if (palavra === palindroma ) {
        console.log ('essa palavra é palindroma');
    } else {
        console.log('essa palavra não é palindroma');
    }
}
//verificarPalavra(palavra);

//let numero = parseFloat(prompt('Digite um número'));
function verificarSinal(numero) {
    if (numero > 0 ) {
        console.log('Esse número é positivo');
    } else if(numero === 0) {
        console.log('esse número é zero');
    }else{
        console.log('esse número é negativo');
    }
}
//verificarSinal(numero);

//let temp = parseFloat(prompt('digite o grau em celsius para converter'))
function converterTemperatura(temp) {
    console.log((temp * 1.8) + 32);
}
//converterTemperatura(temp);

//let n = 0
//let soma = 0
while (n < 101) {
    n++
    console.log(n);
    console.log(soma);
    soma = soma + n;
}
//console.log(soma);


function substituirPalavra(text) {
      console.log(text.replace(/azul/g, "vermelho"));
}
//let texto = prompt('digite o seu texto:');
//substituirPalavra(texto);










