
// Array de objetos
var productos = [
    { nombre: "Cuaderno A4", precio: "1.50", cantidad:"4" },
    { nombre: "Lapiceros BIC", precio: "0.25", cantidad: "3" },
    { nombre: "Caja de colores NORMA", precio: "12.50", cantidad: "3" },
    { nombre: "Diccionario Ingles Español", precio: "10.00", cantidad: "7" },
    { nombre: "Sacapunta Facela", precio: "0.75", cantidad: "6" },
    { nombre: "Borrador Facela", precio: "0.35", cantidad: "7" },
    { nombre: "Caja de plumones", precio: "10.00", cantidad: "4" },
    { nombre: "Tijera", precio: "1.25", cantidad: "3" },
    { nombre: "Pega", precio: "1.50", cantidad: "2" },
    { nombre: "Compas", precio: "2.00", cantidad: "1" },
];

for (var i = 0; i < productos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + productos[i].nombre + "</td>";
    html += "       <td>" + productos[i].precio + "</td>";
    html += "       <td>" + productos[i].cantidad + "</td>";
    html +=     "</tr>";

    document.getElementById("tbodyProductos").innerHTML += html;
}
