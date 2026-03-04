const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const button = document.getElementById("button")
const resultado = document.getElementById("resultado")

function calculaMedia(){
    const nota1 = Number (numero1.value)
    const nota2 = Number (numero2.value)
const media = (nota1 + nota2)/2   

    console.log (nota1 + nota2)

    resultado.innerHTML = `A media e ${media.toFixed(2)}`
}

button.addEventListener("click", calculaMedia)