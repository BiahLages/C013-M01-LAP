console.clear();
const prompt = require('prompt-sync')();

console.log(`
Olá! Este é o nosso Jokenpô Elemental!
Temos 3 elementos: Água, Fogo e Ar. 
O jogo funciona assim: Água ganha de Fogo, mas perde para Ar; Fogo ganha de Ar, mas perde para Água; e Ar ganha de Água, mas perde para Fogo.
Prepare-se!
`);

const elementos = ['agua', 'fogo', 'ar'];
let user = 0;
let system = 0;
let empate = 0;
let resp = 'sim';

while(resp == 'sim'){
    let rodadas = +prompt('Quantas rodadas você quer jogar? ');

    console.log();

    for (inicio = 0; inicio < rodadas; inicio++){
        console.log('Escolha o seu elemento: agua, fogo ou ar:');
        let userChoice = prompt().toLowerCase();

        while (elementos.includes(userChoice) == false){
            console.log('Elemento inválido, escolha agua, fogo ou ar:');
            userChoice = prompt().toLowerCase();
        }

        console.log();

        let systemNumber = Math.floor(Math.random() * 3);
        let systemChoice;

        if (systemNumber == 0){
            systemChoice = elementos[0];
        } else if (systemNumber == 1){
            systemChoice = elementos[1];
        } else {
            systemChoice = elementos[2];
        }

        console.log(`A sua escolha foi: ${userChoice}.`);
        console.log();
        console.log(`A escolha do computador foi: ${systemChoice}.`);
        console.log();

        if ((userChoice == 'agua' && systemChoice == 'fogo') || (userChoice == 'fogo' && systemChoice == 'ar') || (userChoice == 'ar' && systemChoice == 'agua')){
            console.log('Você venceu esta rodada!');
            user++;
        } else if ((systemChoice == 'agua' && userChoice == 'fogo') || (systemChoice == 'fogo' && userChoice == 'ar') || (systemChoice == 'ar' && userChoice == 'agua')){
            console.log('Você perdeu esta rodada!');
            system++;
        } else {
            console.log('EMPATE!');
            empate++;
        }

        console.log(`
        PLACAR ATUAL:
        Usuário: ${user}.
        Computador: ${system}.
        `);
    }

    console.log();
    if (user > system){
        console.log('Parabéns! Você venceu o Jokenpô Elemntal!');
    } else if (user < system){
        console.log('Que pena! Você perdeu! O computador venceu o Jokenpô Elemental!');
    } else {
        console.log('Sorte ou azar? Você e o computador empataram no Jokenpô Elemental!');
    }

    console.log(`
    CONFIRA O PLACAR FINAL:
    Você venceu ${user} rodada(s)!
    O computador venceu ${system} rodada(s)!
    Você e o computador empataram em ${empate} rodada(s)!
    `)

    resp = prompt('Deseja jogar novamente? ').toLowerCase();
    console.log();
    user = 0;
    system = 0;
}

let data = new Date();
let hora = data.getHours();

//o cumprimento se dará de acordo com a hora do dia em que o usuário estiver jogando
if (hora >= 0 && hora < 12){
    console.log('Muito obrigada por jogar o Jokenpô Elemental! Espero que tenha se divertido! Tenha um bom dia!');
} else if (hora >= 12 && hora <= 18){
    console.log('Muito obrigada por jogar o Jokenpô Elemental! Espero que tenha se divertido! Tenha uma boa tarde!');
} else if (hora > 18 && hora <= 23){
    console.log('Muito obrigada por jogar o Jokenpô Elemental! Espero que tenha se divertido! Tenha uma boa noite!');
}
console.log();