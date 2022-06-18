function calcular(){
var cantidad = document.getElementById("amount").value;
var color = document.getElementById("color").value;
var precio = document.getElementById("price").getAttribute("value");

parseInt(cantidad)
parseInt(precio)
var total = cantidad*precio
document.getElementById("total").innerHTML = total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })
document.getElementById("totalAmount").innerHTML = cantidad
document.getElementById("totalColor").style.backgroundColor = color
}