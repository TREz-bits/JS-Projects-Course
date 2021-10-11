// Precios y descuentos

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function buttonDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const precio = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const descuento = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = `El precio con descuento es ${precioConDescuento}$`
}

