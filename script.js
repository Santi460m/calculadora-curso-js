// agrega los datos a la pantalla 
function agrega(valor) {
  document.getElementById("pantalla").value += valor;
}

// limpia la pantalla
function borra(valor) {
  document.getElementById("pantalla").value = "";
}
// ejecuta los calculos solicitados en la pantalla
function calcula() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}
