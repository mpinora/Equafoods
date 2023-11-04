// Función para obtener parámetros de consulta de la URL
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    var results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Mostrar la información en el carrito
var cantidadEnCarrito = parseInt(getParameterByName('cantidad')); // Puedes crear una función para obtener parámetros de consulta

if (!isNaN(cantidadEnCarrito) && cantidadEnCarrito > 0) {
    var carritoContenido = document.getElementById('carritoContenido');
    carritoContenido.innerHTML = '<p>Productos en el carrito: ' + cantidadEnCarrito + '</p>';

    // Ejemplo de detalles del producto (puedes personalizar según tus necesidades)
    var productos = [
        { nombre: 'Pack de Comida', precio: 12900, cantidad: 1 },
        // Puedes agregar más productos aquí
    ];

    // Crear una tabla para mostrar los detalles de los productos en el carrito
    var tablaProductos = '<table border="1"><tr><th>Producto</th><th>Precio Unitario</th><th>Cantidad</th><th>Total</th></tr>';
    var totalCarrito = 0;

    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        var totalProducto = producto.precio * producto.cantidad;
        totalCarrito += totalProducto;

        tablaProductos += '<tr><td>' + producto.nombre + '</td><td>$' + producto.precio + '</td><td><input type="number" value="' + producto.cantidad + '" min="1"></td><td>$' + totalProducto + '</td></tr>';
    }

    tablaProductos += '</table>';

    // Mostrar la tabla de productos y el total en el carrito
    carritoContenido.innerHTML += tablaProductos;
    carritoContenido.innerHTML += '<p>Total en el carrito: $' + totalCarrito + '</p>';
} else {
    // Si no hay productos en el carrito, muestra un mensaje
    var carritoContenido = document.getElementById('carritoContenido');
    carritoContenido.innerHTML = '<p>No hay productos en el carrito.</p>';
}
