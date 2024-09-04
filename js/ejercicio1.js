// JavaScript source code
function calcularpromedio() {
    var numero1 = document.getElementById("txtNumero1");
    var numero2 = document.getElementById("txtNumero2");
    var numero3 = document.getElementById("txtNumero3");

    var total = (parseFloat(numero1.value) + parseFloat(numero2.value) + parseFloat(numero3.value))/3;
    document.getElementById("txtResultado").value = total.toFixed(2);
}
