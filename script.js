//PRIMEIROS PASSO NO JAVASCRIPT

// tipos de variaveis:
let idade = 18 //tipo number
let nome = "Joao" //tipo string
let nomea = "90" // tipo string
let logado = true //tipo boolean

//Array e Objetos
    let ingredientes01 = "Agua"
    let ingredientes02 = "Farinha"
    let ingredientes03 = "Corante"
    let ingredientes04 = "Massa"
    let ingredientes05 = "Ovos"

    let ingredientes = ["Farinha","Ovos","Corante","Sal"]

        console.log(ingredientes[0])

    let personagem = {
    
    nome: "hugo",
    nivel: 10,
    forca: 900,
    magia: 200,
    vida: 3000,
    mana : 1500


}

        console.log(personagem.nome)
        console.log(personagem.magia)
        console.log(personagem.nivel)
        console.log(personagem.vida)
        console.log(personagem.mana)
                


        console.log(1000)
        console.log (200)
        console.log(idade)
        console.log(nome)
        console.log(nomea)
        console.log(10 + idade)
        console.log(10 + nome)
        console.log(logado)


//Funcoes , Um bloco de codigo quieto que eu crio , trabalha passsivo.
//EX: Fazer uma soma.
//INPUT-PROCESSA-OUTPUT

function sum(a, b) {
    let resultado = a + b;
    return resultado
        }
//ARROW FUNCTION
let somar2 = (a, b) => {
    let resultado = a + b
    return resultado

        }

    let x = sum(15, 35)
    let y = sum(15, 100)
    let z = somar2(15, 1)
        console.log(x)
        console.log(y)
        console.log(z)

        //CONDICOES CONDICIONAIS, EXiBIR if=SE

    if (idade >= 18) {
        console.log("voce é maior de idade")
    }
    if (idade == 18) {
            console.log("Voce pode ir para a cadeia")
    }

    if (nome == "Joao") {
        console.log("Oi Joao como voce esta")
} else {
    console.log("voce nao é o Joao")
}

//LOOP INFITO E FINITO

let lista = [10, 20, 30 , 40 ,50 ,60]
for(let item of lista){
    console.log(item)
}

let lista2 = ["Agua", "farinha", "Sal" , "manteiga"]
for(let item1 of lista2){
    console.log("-" + item1)
}

let lista3 = ["banana", "maca", "laranja" , "pera"]
for(let item2 of lista3){
    console.log("-" + item2)
}








