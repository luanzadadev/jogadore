//dom


const jogador = document.querySelector('#jogador')
const bt01 = document.querySelector('#Marcelo')
const bt02 = document.querySelector('#Ronaldinho')
const bt03 = document.querySelector('#cr7')


//eventos

bt01.addEventListener('click', Marcelo)
bt02.addEventListener('click', Ronaldinho)
bt03.addEventListener('click', cr7)


//função


function Marcelo(){

        jogador.src ='jogadores/Marcelo.jpg'


}

function Ronaldinho(){

        jogador.src ='jogadores/ronaldinho gaucho.jpg'


}

function cr7(){

    jogador.src = 'jogadores/cr7.jpg'


}