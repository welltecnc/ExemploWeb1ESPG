// //Declarações e variáveis
// //var, let e const
// var nome="Fiap";
// console.log(nome);

// var nome="Teste";
// console.log(nome);

// if(true){
//     let apelido="Fiapinho"
//     console.log(apelido); 
// }

// const taxaJuros=0.05;
// console.log(taxaJuros);
// // taxaJuros=1.5;

// //typeof-verifica o tipo da variavel
// var exemplo="ola-dev-var";
// console.log(typeof exemplo)

// let exemplo1="ola-dev-let";
// console.log(exemplo1)

// const exemplo2="ola-dev-const";
// console.log(exemplo2)

// let exemplo3=10;
// console.log(typeof exemplo3)

// let exemplo4=true;
// console.log (typeof exemplo4);

// let exemplo5={nome1:"teste"};
// console.log( typeof exemplo5)

// let exemplo6=["Java","C#","PHP"];
// console.log(exemplo6)

// //valor undefined
// let exemplo7;
// console.log(exemplo7)

// //valor vazio
// let exemplo8 =null;
// console.log(exemplo8)

// // OPERADORES ARITMÉTICOS

// const valor1=10;
// const valor2=20;

// console.log( valor1 + valor2);
// console.log( valor1 - valor2);
// console.log( valor1 * valor2);
// console.log( valor1 / valor2);

// //OPERADORES LÓGICOS
// // = atribuição
// // == comparação
// // ===  valor e tipo(estritamente igual)
// // && = E (todas condições tem que ser verdadeiras)
// // || = OU (uma das condição tem que ser verdadeira)

// console.log(valor1 < valor2 );
// console.log(valor1 > 10 && valor2 < 10 );
// console.log(valor2 < 100 || valor1 >10);
// console.log(valor1 == valor2);
// console.log(valor2 === valor1)


// /*********************************************
// *   Exercicio1 
// *********************************************/

// const p =20;
// const v=10;

// const precoFinal = p -v;
// console.log("O preço final com desconto é",precoFinal )

// /*********************************************
// *   Exercicio2
// *********************************************/

// let a="20";
// let b=10;

// let comparar= (a ===20 && b >= 10);
// console.log("O Resultado é:",comparar);

// /*********************************************
// *   Exercicio3- Thiago
// *********************************************/

// var user_login=true;
// var user_password=true;
// if(user_login == true){
//     console.log("Transação Realizada")
// }
// /*********************************************
// *   Exercicio3- cidade
// *********************************************/

// const usuarioLogado=20;
// const tempoToken=10;

// const transacao =usuarioLogado ===20 && tempoToken >=10
// console.log("Transação Autorizada",transacao)


//Estrutura Condicional 

//if

if(true){
    console.log("verdadeiro")
}

let nome ="fiap";

if(nome =="fiap"){
    console.log("Nome Correto")
}

// if/else

if(nome =="fiap"){
    console.log("Usuario Correto")
}else{
    console.log("Usuario Errado")
}

// if encadeado/ aninhado

let idade = 20;

if(idade <= 13){
    console.log("é uma criança")
}else if(idade >13 && idade <18){
    console.log("é um adolescente")
}else if( idade >18 && idade <50){
    console.log("é um adulto")
}else{
    console.log("é um idoso")
}

// Switch Case

let pratos="salada";

switch(pratos){
    case "macarrao":
        console.log("a melhor massa")
        break;
    case "salada":
        console.log("salada saudavel")
        break;
    case "lasanha":
        console.log("melhor prato")
        break;
    default:
        console.log("nehuma das opções")
}

// ternario
/*
 ? = if
 : = else

*/
let valor = 100;
let resultado = valor ==100 ? "Valor Certo": "Valor Errado";
console.log(resultado)

let usuario="dev";
let logado= usuario =="dev"? "Usuario Logado":"Usuario invalido";
console.log(logado)
