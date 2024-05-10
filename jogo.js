var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var nivel = window.location.search
nivel = nivel.replace('?', '')

var criaCachorroTempo = 1500

if(nivel === 'normal') {
    //1500
    criaCachorroTempo = 1500
} else if(nivel === 'dificil') {
    //1000
    criaCachorroTempo = 1000
} else if(nivel === 'hard') {
    //750
    criaCachorroTempo = 750
}

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaCachorro)
        window.location.href = 'vitoria.html'
    }
    else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

//remover cachorro (caso exista)
if(document.getElementById('cachorro')) {
document.getElementById('cachorro').remove()

if(vidas > 3) {

window.location.href = 'fim_de_jogo.html'
}

else {

document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

vidas++
}
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//Criar elemento html
var cachorro = document.createElement('img')
cachorro.src = 'imagens/cachorro.png'
cachorro.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
cachorro.style.left = posicaoX + 'px'
cachorro.style.top = posicaoY + 'px'
cachorro.style.position = 'absolute'
cachorro.id = 'cachorro'
cachorro.onclick = function() {
    this.remove()
}

document.body.appendChild(cachorro)


}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) 
    
    switch(classe) {
        case 0:
            return 'cachorro1'

        case 1:
            return 'cachorro2'

        case 2:
            return 'cachorro3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2) 
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}