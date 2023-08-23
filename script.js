let acao = document.getElementById('acao')
let pausa = document.getElementById('pausa')
let sessoes = document.getElementById('sessoes')

let segundos

var bell = new Audio("./audio/bell.mp3")
var volta = new Audio("./audio/volta.mp3")
var final = new Audio("./audio/final.mp3")

var lofi = document.getElementById('lofi')
var pause = document.getElementById('pause')
var play = document.getElementById('play')


function iniciar(){
    if(acao.value == 0){
        document.getElementById('erro_acao').innerHTML="Adicione os minutos"
        acao.focus()
    } else if(pausa.value==0){
        document.getElementById('erro_pausa').innerHTML="Adicione a pausa"
        pausa.focus()
    }  else if(sessoes.value==0){
        document.getElementById('erro_sessoes').innerHTML="Adicione as sessoes"
        sessoes.focus()
    }   else{
        lofi.play()
        pause.style.setProperty('display', 'block', 'important')

        localStorage.setItem('acao', String(acao.value))
        localStorage.setItem('pausa', String(pausa.value))
        localStorage.setItem('sessoes', String(sessoes.value))

        document.getElementById('config').style.setProperty('display', 'none', 'important')
        document.getElementById('timer').style.setProperty('display', 'block', 'important')
    }
}

function momentoAcao(){

    let sessoes_valor = localStorage.getItem('sessoes') 

    if( sessoes_valor != '1'){
        document.getElementById('title_sessao').innerHTML = sessoes_valor + ' sessões restantes'
    }  else{
        document.getElementById('title_sessao').innerHTML = sessoes_valor + ' sessão restante'
    }

    let title = document.getElementById('title')
    title.innerHTML = "AÇÃO"
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#28a745', 'important')

    min = Number(localStorage.getItem('acao'))

    min = min - 1
    segundos = 59

    document.getElementById('minutes_ok').innerHTML = min
    document.getElementById('seconds_ok').innerHTML = segundos

    var min_interval = setInterval(minTimer, 60000)
    var seg_interval = setInterval(segTimer, 1000)

    function minTimer(){
        min = min -1
        document.getElementById('minutes_ok').innerHTML = min
    }

    function segTimer(){
        segundos = segundos -1
        document.getElementById('seconds_ok').innerHTML = min 
        
        if(segundos <= 0){

            if(min <=0){
                clearInterval(min_interval)
                clearInterval(seg_interval)

                bell.play();
                momentoPausa()
            }
            segundos = 60
        }

    }

}

function momentoPausa(){

    let title = document.getElementById('title')
    title.innerHTML = "PAUSA"
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#dc3535', 'important')

    min_pausa = Number(localStorage.getItem('pausa'))

    min_pausa = min_pausa -1
    segundos = 59

}