// Esta función le añade un valor al display de la calculadora
function addToDisplay(value){
    document.getElementById('display').value += value;
}

// Esta función es la que calcula el resultado de la expresión matemática en el display
function calculate(){
    var expresion = document.getElementById('display').value;  // Obtiene la expresión del display
    var result = eval(expresion);  // Evalúa la expresión utilizando la función eval()
    document.getElementById('display').value = result;  // Esta nos muestra el resultado en el display
}

// Esta función sirve para limpiar el display de la calculadora
function clearDisplay(){
    document.getElementById('display').value = '';  // Esta establece el valor del display a una cadena vacía
}
