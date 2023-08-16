
const loginSection = document.getElementById('login');
const calculatorSection = document.getElementById('calculator');
const loginButton = document.getElementById('botonLogin');
const cotizadorButton = document.getElementById('cotizador');
const resultadosDiv = document.getElementById('resultados');

const resultadosConversion = [];


loginButton.addEventListener('click', function() {

const username = document.getElementById('username').value;
if (username) {
    login.style.display = 'none';
    calculator.style.display = 'block';
    
}
});


cotizadorButton.addEventListener('click', function() {
convertir();
});


function convertir() {
let resultado = 0;
const dolar = 735;
const euro = 793;
const reales = 58
const valore = parseFloat(document.getElementById("valor").value);

if (isNaN(valore) || valore <= 0) {
    return alert("INGRESE UN NÚMERO, MAYOR A 0");
}

if (document.getElementById("uno").checked) {
    resultado = valore / dolar;
    resultado = resultado.toFixed(2);
    resultadosConversion.push("$" + resultado);
}
else if (document.getElementById("Reales").checked) {
    resultado = valore / reales;
    resultado = resultado.toFixed(2)
    console.log("El cambio de Pesos a Reales es de: $" + resultado);
    resultadosConversion.push("R" + resultado);
}
else if (document.getElementById("dos").checked) {
    resultado = valore / euro;
    resultado = resultado.toFixed(2);
    resultadosConversion.push("€" + resultado);
} else {
    return alert("Debes completar todos los campos");
}

localStorage.setItem('resultadosConversion', JSON.stringify(resultadosConversion));
showLatestResults();
}

function showLatestResults() {
const storedResultadosConversion = JSON.parse(localStorage.getItem('resultadosConversion')) || [];
const lastThreeResults = storedResultadosConversion.slice(-3);


resultadosDiv.innerHTML = "<p>Ultimas cotizaciones:</p>" + lastThreeResults.join(', ');
}

showLatestResults();