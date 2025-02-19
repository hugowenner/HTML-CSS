alert('Bem vindo ao nosso GAME!');
let numeroSecreto = 5;
console.log(numeroSecreto)

let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto) {
    console.log('Isso ai, voce descobriu o codigo secreto,Parabens!!!!!');
    alert(`Isso ai, voce descobriu o codigo secreto,Parabens!!!!! ${numeroSecreto}`
        )
}

else {
    alert('Errou!!!')
}

