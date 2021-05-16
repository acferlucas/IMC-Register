
function adiciona(){

  const lista = document.getElementById("lista")
  console.log(lista)

  const nome = document.querySelector('input[type="text"]').value
  const peso = Number(document.getElementById('peso').value)
  const altura = Number(document.getElementById('altura').value)
  let imc = peso/(altura * altura)

  console.log(imc)
  
  const valor  = document.createElement('p')
  
  
  if(imc < 18.5){
    valor.innerText = "Abaixo do Peso"
  }else if (imc <= 24.9){
    valor.innerText = "Peso Normal"
  }else {
    valor.innerText = "Sobrepeso"
  }
  

  const itemlista = document.createElement('li')
  
  const divprincipal = document.createElement('div')
  divprincipal.setAttribute('id',"div-aside")
  
  const titulo = document.createElement('h1')
  titulo.innerText = nome


  const divum = document.createElement('div')
  divum.setAttribute('id',"div-first")
  
  const pPeso = document.createElement('p')
  pPeso.innerText = "Peso: " + peso + "Kg"
  
  const pAltura = document.createElement('p')
  pAltura.innerText = "Altura:" + altura + "M"

  divum.appendChild(pPeso)
  divum.appendChild(pAltura)
  
  const divdois = document.createElement('div')
  divdois.setAttribute('id',"div-second")

  const pResultado = document.createElement('p')
  pResultado.innerText = "Resultado:"

  divdois.appendChild(pResultado)
  divdois.appendChild(valor)
  
  divprincipal.appendChild(divum)
  divprincipal.appendChild(divdois)
  
  itemlista.appendChild(titulo)
  itemlista.appendChild(divprincipal)
  
  console.log(itemlista)

  lista.appendChild(itemlista)
}