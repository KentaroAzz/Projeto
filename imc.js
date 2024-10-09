function clean() {
  document.getElementById('iValor1').value = null
  document.getElementById('iValor2').value = null
  document.getElementById('imc').innerHTML = ""
  document.getElementById('resultado').innerHTML = ''
}

function calcularIMC(op) {
  let peso = Number(document.getElementById('iValor1').value);
  let altura = Number(document.getElementById('iValor2').value);
  let imc = peso / Math.pow(altura, 2);
  let resultado = ''

  if (imc <= 18.5) {
    resultado = "Muito Magro"
  } else if (imc <= 24.9) {
    resultado = "Normal"
  } else if (imc <= 29.9) {
    resultado = "Sobrepeso"
  } else if (imc <= 39.9) {
    resultado = "Obeso"
  } else {
    resultado = "Obesidade grave"
  }

  document.getElementById('imc').innerHTML = imc.toFixed(2);
  document.getElementById('resultado').innerHTML = resultado;




}