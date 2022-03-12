console.clear();
const prompt = require('prompt-sync')();

let jogador = prompt("Olá Jogador(a)! Bem-vindo à história da heroína Raiden! Por favor, informe o seu nome: ")
console.log();
console.log(`O país em que a nossa heroína nasceu, conhecido como As Terras Distantes, foi tomado pelos Invasores do Vazio Eterno, e apenas você, ${jogador}, utilizando dos poderes da Raiden, pode salvar o povo da eterna escuridão que assolará o país caso o Vazio Eterno se alastre. Ao final da sua jornada, saberemos se Raiden conseguirá chegar ao Abismo e derrotar o Grand Maester Godwin, líder dos invasores. Para isso você precisa encontrar o Medalhão do Caos, item raro das Lendas Médias cujo rastro se perdeu há eras atrás; ativar o Portal da Chama Eterna - localizado no imenso mar de lava; convencer Margit O Avarento a te entregar o Cristal do Abismo, item mais precioso de sua coleção; aprender a Magia Definitiva de Selamento, cujos ensinamentos são misteriosos e complexos; e derrotar O Guardião do Abismo, o mais forte guerreiro do Vazio Eterno depois do Grand Maester.`);
console.log();
console.log("Para sabermos se você alcançará o objetivo final, responda com SIM ou NAO:")
console.log();

const listaPerg = ['Você encontrou o Medalhão do Caos? ', 'Você ativou o Portal da Chama Eterna? ', 'Você conseguiu conseguiu convencer Margit O Avarento a te entregar o Cristal? ', 'Você aprendeu a Magia Definitiva de Selamento? ', 'Você derrotou O Guardião do Abismo? '];

let resp1 = prompt(listaPerg[0]).toLowerCase();
let resp2 = prompt(listaPerg[1]).toLowerCase();
let resp3 = prompt(listaPerg[2]).toLowerCase();
let resp4 = prompt(listaPerg[3]).toLowerCase();
let resp5 = prompt(listaPerg[4]).toLowerCase();

// Para cada resposta 'sim' o objetivo ganha 1 ponto, sendo o objetivo final 5 pontos.
let obj;

for (obj = 0; resp1 == 'sim'; obj++) {
    obj++
    break    
    }
    for (obj; resp2 == 'sim'; obj++) {
        obj++
        break    
        }
        for (obj; resp3 == 'sim'; obj++) {
            obj++
            break    
            }
            for (obj; resp4 == 'sim'; obj++) {
                obj++
                break    
                }
                for (obj; resp5 == 'sim'; obj++) {
                    obj++
                    break    
                    }
console.log();


if (obj == 0) {
    console.log("As Terras Distantes foram completamente tomadas pelo Vazio Eterno. Escuridão é a única coisa que o seu povo conhece a partir de agora.");
} else if (obj == 1 || obj == 2) {
    console.log("Você consegue chegar no Abismo, porém percebe que é tarde demais, o Vazio Eterno já está tomando as Terras Médias e o Grand Maester Godwin está mais forte do que nunca. Você foge na esperança de um dia encontrar a solução.");
} else if (obj == 3) {
    console.log("Você chega onde deveria ser a entrada do Abismo mas por algum motivo não consegue entrar. Desta forma o Grand Maester Godwin continua liderando o Vazio Eterno na tomada das Terras Distantes.");
} else if (obj == 4) {
    console.log("Você consegue chegar até o Abismo, mas o Grand Maester Godwin havia fugido. Só o tempo dirá se ele retornará para trazer o Vazio Eterno às Terras Distantes novamente.");
} else if (obj == 5) {
    console.log("Parabéns! Graças ao Portal da Chama Eterna e ao Cristal, você chega indetectável até o Abismo. Após derrotar o Guardião do Abismo, você surpreende o Grand Maester Godwin e utilizando o Medalhão do Caos você o sela com a Magia Definitiva de Selamento e livra as Terras Distantes do Vazio Eterno!");
}
console.log();