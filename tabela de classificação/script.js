var montero = {
    name: "Lil Nas X",
    award: 2,
    lastweek: 2,
    points: 1,
    artist:'https://todateen.uol.com.br/wp-content/uploads/2021/03/Gabi-30-1.jpg'
}

var bruno = {
    name: "Bruno Mars & Anderson Pack",
    award: 1,
    lastweek: 5,
    points: 1,
    artist: 'https://ogimg.infoglobo.com.br/in/24911538-ea6-e9c/FT1086A/xSilk-Sonic.jpg.pagespeed.ic.Gt2kF-EnpK.jpg',
}

montero.pontos = calculaPontos(montero)
bruno.pontos = calculaPontos(bruno)


function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [montero, bruno]

exibirJogadoresNaTela(jogadores)
//precisa de uma ajuste

function exibirJogadoresNaTela(jogadores){
    var html = ""
    for (var i = 0; i < jogadores.length; i++){
        html += `<tr><td><img src=${jogadores[i].artist}"></td>`
        html += "<td>" + jogadores[i].name + "</td>"
        html += "<td>" + jogadores[i].award + "</td>"
        html += "<td>" + jogadores[i].lastweek + "</td>"
        html += "<td>" + jogadores[i].points + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Victory</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Tie</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Defeat</button></td></tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarPersonagem() {
    var nomePersonagem = document.getElementById("addNome").value
    var imagem = document.getElementById("addImagem").value
    
    if (imagem.endsWith("jpg") || imagem.endsWith("png")) {
        var personagem = {
            artist: image,
            name: nomePersonagem,
            victories: 0,
            ties: 0,
            defeats: 0,
            points: 0     
        }

        jogadores.push(personagem)
        exibirJogadoresNaTela(jogadores)
        document.getElementById("addNome").value = ""
        document.getElementById("addImagem").value = ""
    } else {
        alert("Try Again")
        document.getElementById("addNome").value = ""
        document.getElementById("addImagem").value = ""
    }
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}
  
function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}
  
function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarJogador(){}