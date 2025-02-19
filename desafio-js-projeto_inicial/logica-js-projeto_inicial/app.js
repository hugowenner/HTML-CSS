alert('Boas vindas ao nosso site!')

let nome = ('Lua');
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos')

let mensagemDeErro = 'Erro! Preencha todos os campos'; 

alert (mensagemDeErro)

let nome2 = prompt ("DIGITE SEU NOME");
let idade2 = prompt ('Digite sua idade');

if(idade2 >= 18){
    console.log('Pode tirar habilitacao!');
    alert('Pode tirar habilitacao!');

}

if(idade2 <= 18){
    console.log('Não Pode tirar habilitacao!');
    alert('Não Pode tirar habilitacao!');

}