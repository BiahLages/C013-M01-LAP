console.clear();
const prompt = require('prompt-sync')();

let jogador = prompt("Olá Jogador(a)! Bem-vindo à história da heroína Raiden! Por favor, informe o seu nome: ")
console.log();
console.log(`O país em que a nossa heroína nasceu, conhecido como As Terras Distantes, foi tomado pelos Invasores do Vazio Eterno, e apenas você, ${jogador}, utilizando dos poderes da Raiden, pode salvar o povo da eterna escuridão que assolará o país caso o Vazio Eterno se alastre. Ao final da sua jornada, saberemos se Raiden conseguirá chegar ao Abismo e derrotar o Grand Maester Godwin, líder dos invasores. Para isso você precisa encontrar o Medalhão do Caos, item raro das Lendas Médias cujo rastro se perdeu há eras atrás; ativar o Portal da Chama Eterna - localizado no imenso mar de lava; convencer Margit O Avarento a te entregar o Cristal do Abismo, item mais precioso de sua coleção; aprender a Magia Definitiva de Selamento, cujos ensinamentos são misteriosos e complexos; e derrotar O Guardião do Abismo, o mais forte guerreiro do Vazio Eterno depois do Grand Maester.`);
console.log();
console.log("Para sabermos se você alcançará o objetivo final, responda com 1 para SIM ou 0 para NÃO:")
console.log();

    let objetivo1 = +prompt("Você encontrou o Medalhão do Caos? ");
    let objetivo2 = +prompt("Você ativou o Portal da Chama Eterna? ");
    let objetivo3 = +prompt("Você conseguiu conseguiu convencer Margit O Avarento a te entregar o Cristal? ");
    let objetivo4 = +prompt("Você aprendeu a Magia Definitiva de Selamento? ");
    let objetivo5 = +prompt("Você derrotou O Guardião do Abismo? ");
    
let result = objetivo1 + objetivo2 + objetivo3 + objetivo4 + objetivo5;
console.log();
/*
console.log(`Resposta da pergunta 1: ${objetivo1}`);
console.log(`Resposta da pergunta 2: ${objetivo2}`);
console.log(`Resposta da pergunta 3: ${objetivo3}`);
console.log(`Resposta da pergunta 4: ${objetivo4}`);
console.log(`Resposta da pergunta 5: ${objetivo5}`);
*/

if (result == 0) {
    console.log("As Terras Distantes foram completamente tomadas pelo Vazio Eterno. Escuridão é a única coisa que o seu povo conhece a partir de agora.");
} else if (result == 1 || result == 2) {
    console.log("Você consegue chegar no Abismo, porém percebe que é tarde demais, o Vazio Eterno já está tomando as Terras Médias e o Grand Maester Godwin está mais forte do que nunca, você foge na esperança de um dia encontrar a solução.");
} else if (result == 3) {
    console.log("Você chega onde deveria ser a entrada do Abismo mas por algum motivo não consegue entrar. Desta forma o Grand Maester Godwin continua liderando o Vazio Eterno na tomada das Terras Distantes.");
} else if (result == 4) {
    console.log("Você consegue chegar até o Abismo, mas o Grand Maester Godwin havia fugido. Só o tempo dirá se ele retornará para trazer o Vazio Eterno às Terras Distantes novamente.");
} else if (result == 5) {
    console.log("Parabéns! Você chega até o Abismo, consegue derrotar o Grand Maester Godwin e livrar as Terras Distantes do Vazio Eterno!");
}
console.log();