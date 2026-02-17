// Referencia a la pantalla
const pantalla = document.getElementById('pantalla');

// Agrega un valor a la pantalla
function agregar(valor) {
  pantalla.value += valor;
}

// Limpia toda la pantalla
function limpiar() {
  pantalla.value = '';
}

// Borra el último carácter
function borrar() {
  pantalla.value = pantalla.value.slice(0, -1);
}

// Evalúa la expresión matemática
function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (e) {
    pantalla.value = 'Error';
  }
}

// Aplica funciones científicas
function funcion(nombre) {
  try {
    if (nombre === 'Math.PI') {
      pantalla.value += Math.PI.toFixed(8);
    } else {
      pantalla.value = eval(`${nombre}(${pantalla.value})`);
    }
  } catch (e) {
    pantalla.value = 'Error';
  }
}