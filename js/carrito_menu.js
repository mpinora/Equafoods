document.addEventListener('DOMContentLoaded', function () {
    // Función para redirigir a la página del carrito

    // Manejar clic en el botón "RESERVAR"
    document.getElementById('reservarBtn').addEventListener('click', function () {
        // Obtener la cantidad actual en el carrito
        var cartCantidadElement = document.getElementById('cartCantidad');
        var currentQuantity = parseInt(cartCantidadElement.innerText);

        // Incrementar la cantidad en 1
        var newQuantity = currentQuantity + 1;

        // Actualizar la cantidad en el carrito
        cartCantidadElement.innerText = newQuantity;
    });
});


