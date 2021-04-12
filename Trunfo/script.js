var cartaBianca = {
    nome: "Bianca Del Rio",
    imagem: "https://pbs.twimg.com/profile_images/1343776767660576769/mYaRIDqj_400x400.jpg",
    atributos: {
        shade: 90,
        runaway: 65,
        lipsync: 55
    }
}

var cartaShangela = {
    nome: "Shangela",
    imagem: "https://www.hojeemdia.com.br/polopoly_fs/1.650148!/image/image.jpg_gen/derivatives/landscape_653/image.jpg",
    atributos: {
        shade: 74,
        runaway: 60,
        lipsync: 80
    }
}

var cartaAlaska = {
    nome: "Alaska",
    imagem: "https://static.billboard.com/files/media/Alaska-thunderfuck-2019-cr-Magnus-Hastings-billboard-1548-compressed.jpg",
    atributos: {
        shade: 80,
        runaway: 70,
        lipsync: 64
    }
}

var cartaBob = {
    nome: "Bob the Drag Queen",
    imagem: "https://thumb.spokesman.com/bmRB4UJGa5ZEnKdS_yUIZMiOh-4=/2500x2500/smart/media.spokesman.com/photos/2020/06/26/Bob_the_Drag_Queen_cropped.jpg",
    atributos: {
        shade: 80,
        runaway: 67,
        lipsync: 70
    }
}

var cartaAlyssa = {
    nome: "Alyssa Edwards",
    imagem: "https://pbs.twimg.com/media/Euo-HepWgAUveh3.jpg",
    atributos: {
        shade: 80,
        runaway: 71,
        lipsync: 77
    }
}

var cartaJuju = {
    nome: "Jujubee",
    imagem: "https://www.jujubeeonline.com/static/jujubee-header-mobile-19d0728c634608624723f6d8a2b777d9.jpg",
    atributos: {
        shade: 80,
        runaway: 73,
        lipsync: 69
    }
}

var cartaAlexis = {
    nome: "Alexis Mateo",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Alexis_Mateo_%28cropped%29.jpg",
    atributos: {
        shade: 67,
        runaway: 70,
        lipsync: 66
    }
}

var cartaShea = {
    nome: "Shea Coulée",
    imagem: "https://i1.wp.com/bricksmagazine.co.uk/wp-content/uploads/2020/07/9715a4c5-6351-4d0b-ac5f-cfc935e1303a-sheacoulee_2020popprincess-1.jpg?fit=1600%2C2000&ssl=1",
    atributos: {
        shade: 72,
        runaway: 90,
        lipsync: 87
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaBianca, cartaShangela, cartaAlaska, cartaBob, cartaAlyssa, cartaJuju, cartaAlexis, cartaShea]
//            0           1           2          3         4            5            6           7          

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}