console.clear();
const prompt = require('prompt-sync')();

//aqui declaro os caminhos possíveis do usuário
const caminhos = ['trilha', 'atalho'];

//aqui entram os status do aventureiro assim como as funções para checar e diminuir alguns status.
//a proposta é que quanto mais fome e frio o aventureiro tem, mais vitalidade ele perde.
let avent = {
vitalidade: 100,
fome: 0,
frio: 10,

caivitalidade: function(){
    if (this.fome >= 50 && this.fome < 70){
        this.vitalidade -= 20;
        console.log('Cuidado! A sua fome está em um nível em que fará você perder 20 pontos de vitalidade a cada rodada!');
    } else if (this.fome >= 70 && this.fome < 90){
        this.vitalidade -= 40;
        console.log('Atenção! A sua fome está em um nível crítico você perderá 40 pontos de vitalidade a cada rodada!');
    } else if (this.fome >= 90){
        this.vitalidade -= 60;
        console.log('URGENTE! A sua fome está em um nível extremamente crítico e você perderá 60 pontos de vitalidade a cada rodada!');
    };
    if (this.frio >= 30 && this.frio < 50){
        this.vitalidade -= 15;
        console.log('Cuidado! Você está com muito frio e perderá 15 pontos de vitalidade a cada rodada!');
    } else if (this.frio >= 50 && this.frio < 70){
        this.vitalidade -= 30;
        console.log('Atenção! Você está com status de extremo frio e perderá 30 pontos de vitalidade a cada rodada!');
    } else if (this.frio >= 70){
        this.vitalidade -= 45;
        console.log('URGENTE! Você está começando a congelar e assim perderá 45 pontos de vitalidade a cada rodada!');
    };
},

checavitalidade: function(){
    if (this.vitalidade <= 0){
        return 0;
    }  
},
};

//aqui declaro o tempo que o usuário tem pra conseguir chegar ao objetivo. Logo após temos a função para checar esse tempo e finalizar o jogo caso o tempo chegue a zero.
let tempo = 24;

function checatempo(){
    if (tempo <= 0){
        return 0;   
    };
};

//função para mostrar o status do aventureiro sempre que necessário.
function mostrastatus(){
    console.log(`
        Você tem ${tempo} horas para chegar no seu destino final.
        Vitalidade: ${avent.vitalidade}.
        Fome: ${avent.fome}.
        Frio: ${avent.frio}.
        `);
};

//aqui temos a função para um evento aleatório que irá acontecer caso o caminho escolhido seja o atalho. Cada evento vai ter uma penalidade de status diferente, sendo uma delas a morte.
//alguns eventos aleatórios se repetem na array para que a probabilidade deles acontecerem seja aumentada.
function sorteiaevento(){
    const listaeventos = ['Nevasca', 'Chuva', 'Animal Selvagem', 'Chuva', 'Vendaval', 'Animal Selvagem', 'Chuva', 'Vendaval', 'Chuva', 'Chuva'];

    let sorteio = Math.floor(Math.random() * 10);
    let eventoaleatorio;

    if (sorteio == 0) {
        eventoaleatorio = listaeventos[0];
        console.log('Uma grande nevasca cai de repente e você morre.');
        avent.vitalidade = 0;
        return 0;
    } else if (sorteio == 1 || sorteio == 3 || sorteio == 6 || sorteio == 8 || sorteio == 9) {
        eventoaleatorio = listaeventos[1];
        console.log('Começa uma forte chuva, o que faz com que suas roupas fiquem molhadas e você acumule frio mais rapidamente.');
        avent.frio += 10;
    } else if (sorteio == 2 || sorteio == 5) {
        eventoaleatorio = listaeventos[2];
        console.log('Você encontra um animal selvagem que está bloqueando o caminho, você não tem escolha a não ser entrar em luta corporal com ele. Você vence, mas perde 30 pontos de vitalidade.');
        avent.vitalidade -= 30;
    } else if (sorteio == 4 || sorteio == 7) {
        eventoaleatorio = listaeventos[4];
        console.log('Um vendaval vindo na direção contrária da que você está indo começa, o que te faz gastar 1 hora a mais do tempo esperado.');
        tempo -= 1;
    }
};

let jogar = 'sim';

const nome = prompt('Por favor, digite o seu nome: ');

//ao chegar no final do jogo, o usuário pode escolher jogar novamente, por isso o laço while aqui.
while (jogar == 'sim'){
    console.log(`Olá ${nome}! Seja muito bem vinda(o) à Caça ao tesouro na Montanha Gelada!
    Há aproximadamente 3900 anos, do dia para a noite surgiu uma montanha nas Terras Distantes. Essa montanha estava coberta em uma névoa espessa e congelante tornando quase impossível de respirar ao adentrar em seu território. Curiosos de todos os sete cantos do mundo vieram para tentar desbravar o inóspito e temido lugar.
    Reza a lenda que no topo da montanha existe um tesouro inestimável, o Golden Draupnir! Diversos contos foram espalhados sobre o tão desejado Golden Draupnir: uns dizem que concede vida eterna; outros contam que aquele que possuí-lo obterá A Graça Divina, podendo-se conquistar riquezas, reinos e muito poder com Ela; já um certo conto teme que o Golden Draupnir seja apenas uma maldição, que atrai tolos em busca de bonanças e suga suas energias vitais.
    Seja qual for a verdade, fato é que até hoje ninguém retornou ou sobreviveu para contá-la.
    O que se sabe é que existem 4 acampamentos ao longo da montanha para ajudar na chegada ao topo. Caberá a você, ${nome}, manusear os seus recursos e status de maneira sábia para chegar ao topo e descobrir a verdade sobre o Golden Draupnir.
    Você iniciará o jogo com os seguintes status:

    Tempo para chegar no topo: ${tempo} horas.
    Vitalidade: ${avent.vitalidade}.
    Fome: ${avent.fome}.
    Frio: ${avent.frio}.

    Estudos mostraram que o tempo máximo que um ser humano consegue sobreviver em temperaturas extremas é 24 horas, portanto você precisa chegar ao topo da montanha antes que esse tempo acabe.
    Para chegar em cada acampamento existem dois caminhos possíveis:
    O primeiro é uma trilha criada pelos aventureiros que vieram antes de você, ela é segura e tranquila, porém mais longa, e ao seguir por ela você gasta 5 horas, acumula 20 pontos de fome e 15 de frio.
    O segundo é um atalho, ele é íngreme e perigoso e nele você gasta 3 horas e acumula 40 pontos de fome e 15 de frio, porém existem perigos desconhecidos que podem fazer você perder tempo ou aumentar alguns status.
    Em cada acampamento você pode se alimentar e dormir, assim você recupera alguns status, mas gasta tempo. Entretanto, é preciso cuidado e atenção, pois se você acumular muitos pontos de frio e fome, a sua vitalidade irá cair rapidamente.
    Boa sorte ${nome}! Tenha uma ótima jornada!
    `);

    let direcao;
    let sair = 'sim';
    prompt('Aperte enter para começar a sua aventura!');
    console.log();

    //aqui temos o evento principal da história, que é a escolha do caminho e chegada em cada acampamento. Como são 4 acampamentos usei o for para que tivesse a repetição desse evento por 4 vezes.
    principal: for (i = 0; i < 4; i++){
        direcao = prompt('Você optará pela trilha ou pelo atalho? ').toLowerCase();
        console.log();

        while (!caminhos.includes(direcao)){
            direcao = prompt('Caminho inexistente! Escolha a trilha ou o atalho: ');
        }
        if (direcao == 'trilha'){
            tempo -= 5;
            avent.fome += 20;
            avent.frio += 15;
            avent.caivitalidade();
        } else if (direcao == 'atalho'){
            tempo -= 3;
            avent.fome += 40;
            avent.frio += 10;
            let retorno = sorteiaevento();
            if (retorno == 0){
                break principal;
            }
            avent.caivitalidade();
        };

        let retornavit = avent.checavitalidade();

        avent.checavitalidade();
        if (retornavit == 0){
            break;
        };

        let retornatempo = checatempo();

        checatempo();
        if (retornatempo == 0){
            break;
        };

        mostrastatus();

        console.log(`Você chegou no ${i + 1}º acampamento! Agora você pode comer e descansar antes de continuar a sua aventura. Caso não queira, pode sair do acampamento.`);
        sair = prompt('Deseja sair do acampamento? ');
        console.log();

        while (sair != 'sim'){
            console.log(`Você deseja se alimentar? Você irá recuperar 30 pontos de fome e 5 de frio, mas perderá 2 horas.`);
            let comer = prompt('Sim ou não: ').toLowerCase();
            console.log();
            if (comer == 'sim') {
                avent.fome -= 30;
                avent.frio -= 5;
                tempo -= 2;
                mostrastatus();
            };

            console.log('Gostaria de dormir por 4 horas para recuperar 20 pontos de vitalidade e 5 pontos de frio?');
            let dormir = prompt('Sim ou não: ').toLowerCase();
            console.log();
            if (dormir == 'sim') {
                avent.vitalidade += 20;
                avent.frio -= 5;
                tempo -= 4;
                mostrastatus();
            };
            
            sair = prompt("Deseja sair do acampamento? ");
            console.log();
        };
        
        if (sair == 'sim'){
            continue;
        };
    };

    //aqui temos os finais possíveis do jogo.
    if (avent.vitalidade <= 0){
        console.log('Infelizmente você não soube cuidar de si mesma(o), a sua vitalidade acabou. Você morreu!');
    } else if (tempo <= 0){
        console.log('Aparentemente manejo de tempo não é o seu forte. O seu tempo acabou! O ar gelado constante te congela por dentro e você morre!');
    } else {
        console.log(`
        Parabéns! Você encontrou o Golden Draupnir, o anel dourado do deus Odin! Ao colocá-lo em seu dedo você é subitamente teleportada(o) para um novo mundo! Você olha em volta e se vê em um imenso castelo dourado. Ao seu redor, várias pessoas a(o) saúdam:
        "Surgiu o novo Golden Lord! Oh! Abençoada seja a Graça que trouxe ao Novo Mundo o Golden Lord!"
        O que é um Golden Lord? Um Deus? Um Rei?
        Você terá que descobrir!

        FIM DE JOGO!
        `);
    };

    //antes do usuário poder recomeçar o jogo volto os status para os valores iniciais.
    tempo = 24;
    avent.vitalidade = 100;
    avent.fome = 0;
    avent.frio = 10;

    jogar = prompt('Deseja jogar novamente? ');
};

console.log(`Obrigada por jogar!
Nossa aventura continua em: "Golden Lord: Explorando o Novo Mundo!"
`);