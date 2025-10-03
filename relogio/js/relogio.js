//DOM

const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//EVENTOS

setInterval(relogio,1000)

//FUNÇÃO

function relogio(){
    hoje=new Date()
    hr=hoje.getHours()
    min=hoje.getMinutes()
    seg=hoje.getSeconds()

    if(hr<10){
        hr='0'+hr
        
    }
    if(min<10){
        min='0'+min
        
    }
    if(seg<10){
        seg='0'+seg
        
    }
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg

}
        