// Precios y descuentos

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function buttonDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const precio = InputPrice.value;

    const coupons = ["AXEL", "DISCOUNT_PLATZI", "PREMIO2021", ""];
    const InputCoupon = document.getElementById("InputCoupon");
    const coupon = InputCoupon.value;
    const discountCoupon = couponPriceDiscount(coupon, coupons);
    
    const InputDiscount = document.getElementById("InputDiscount");
    const descuento = parseInt(InputDiscount.value) + discountCoupon;
    console.log(descuento)

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = `El precio con descuento es ${precioConDescuento}$`
}

// cupones de descuento


function couponPriceDiscount (coupon, coupons) {

    if (!coupons.includes(coupon)) {
        alert("El cupón " + coupon + " no es válido");
     } else if (coupon === "AXEL") {
        return 15;
     } else if (coupon === "DISCOUNT_PLATZI") {
        return 30;
     } else if (coupon === "PREMIO2021") {
        return 25;
     } else if (coupon === "") {
        return 0;
     }
}



