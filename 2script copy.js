
function gerartabuada() {
    const numeroInput = document.getElementById("numeroInput")
    let numero = parseInt(numeroInput.value)

    const resultadoDiv = document.getElementById("resultadotabuada")
    resultadoDiv.innerHTML= ''

    resultadoDiv.innerHTML+= `<h2>Tabuada dos anteriores de ${numero}</h2>`

    for (let i = 1; i <=10; i++) {
        let resultado = numero - i
        resultadoDiv.innerHTML+= `<p>${numero} - ${i} = ${resultado}</p>`
        
    }
}


const gerarbutao = document.getElementById("gerarbotao")
gerarbutao.addEventListener("click", gerartabuada)