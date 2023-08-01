
var wua = true

function jogar() {
    /* variaveis */
    const pedra = document.getElementById("Pedra")
    const papel = document.getElementById("Papel")
    const tesoura = document.getElementById("Tesoura")
    var escolha;
    var escolhaBot;
    
    /* verificação */
    if (pedra.checked == false && papel.checked == false && tesoura.checked == false) {
        alert("Não foi selecionado nenhuma opção");
    } else {
        /* inicio codigo */
        if (pedra.checked == true) {
            escolha = "pedra";
        } else if (papel.checked == true) {
            escolha = "papel";
        } else {
            escolha = "tesoura";
        }

        img(escolha)


        /* Variavel switch */
        var random = Math.floor(Math.random() * 3);
        let imgbot = document.getElementById("jogadaBot")
        
        switch (random){
            case 0:
            imgbot.setAttribute("src","img/pedra.png")
            escolhaBot = "pedra"
            break;
            
            case 1:
            imgbot.setAttribute("src","img/papel.png")
            escolhaBot = "papel"
            break;

            case 2:
            imgbot.setAttribute("src","img/tesoura.png")
            escolhaBot = "tesoura"
            break;
        }

        verificarGanhador(escolha, escolhaBot);

    }
}

/* coloca a imagem que o player escolheu */
function img(escolha) {
    let _ = document.createElement("img");

    if (wua) {

        _.src = "img/" + escolha + ".png";
        _.style.float = "left";

        document.getElementById("jogadaJogador").appendChild(_);
        wua = false;
    }

}

/* reseta tudo */
function reset() {
    /* variavel */
    const divJogadaJogador = document.getElementById("jogadaJogador");
    const imgJogador = divJogadaJogador.querySelector("img");

    /* reset img */
    if (imgJogador) {
        divJogadaJogador.removeChild(imgJogador);
    }
    wua = true;

    document.getElementById("jogadaBot").setAttribute("src","img/sinal-de-interrogacao.png");

    /* reset ganhador */
    let divGanhador = document.getElementById("ganhador");
    let h1 = divGanhador.querySelector("h1");

    if(h1){
        divGanhador.removeChild(h1);
    }
}

/* verifica ganhador */
function verificarGanhador(escolha,escolhaBot){
    /* variavel */
    let _ = document.createElement("h1")

    /* verificar empate */
    if(escolha == "pedra" && escolhaBot == "pedra"){
        _.textContent = "Empate";
    } else if(escolha == "papel" && escolhaBot == "papel"){
        _.textContent = "Empate";
    } else if(escolha == "tesoura" && escolhaBot == "tesoura"){
        _.textContent = "Empate";
    }

    /* verifica ganhador player */
    if(escolha == "pedra" && escolhaBot == "tesoura"){
        _.textContent = "Player ganhou";
    } else if(escolha == "papel" && escolhaBot == "pedra"){
        _.textContent = "Player ganhou";
    } else if(escolha == "tesoura" && escolhaBot == "papel"){
        _.textContent = "Player ganhou";
    }

    /* verifica ganhador bot */
    if(escolha == "pedra" && escolhaBot == "papel"){
        _.textContent = "Bot ganhou";
    } else if(escolha == "papel" && escolhaBot == "tesoura"){
        _.textContent = "Bot ganhou";
    } else if(escolha == "tesoura" && escolhaBot == "pedra"){
        _.textContent = "Bot ganhou";
    }

    document.getElementById("ganhador").appendChild(_);
}

