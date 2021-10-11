// codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado ** 2;
}

console.groupEnd();

// codigo del triangulo 
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

function areaTriangulo (altura, base) {
    return (base * altura) / 2;
}

console.groupEnd();

// codigo del circulo
console.group("Circulo");

// Diametro
function diametroCirculo (radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log(`El valor de π es: ${PI}`);

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio ** 2) * PI;
}

console.groupEnd();

// Altura triangulo

function hallarAltura(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 == base && lado2 == base) {
        const altura = Math.sqrt((lado1**2) - ((base/2)**2));
        return `El triangulo es equilatero y su altura es ${altura} cm`;
    } else if (lado1 == lado2){
        const altura = Math.sqrt((lado1**2) - ((base/2)**2));
        return `La altura del triangulo isoceles es ${altura} cm`;
    } else {
        return `Su triangulo no es isoceles ni equilatero`;
    }
}



// Aqui interactuamos con el HTML

// HTML CUADRADO
function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    const area = areaCuadrado(value);
    alert(area);
}

// HTML TRIANGULO
function calcularPerimetroTriangulo() {
    const lado1 = parseInt((document.getElementById("InputLado1")).value);
    const lado2 = parseInt((document.getElementById("InputLado2")).value);
    const lado3 = parseInt((document.getElementById("InputBase")).value);

    const perimetro = perimetroTriangulo(lado1, lado2, lado3);
    alert (perimetro);
}

function calcularAreaTriangulo() {
    const base = parseInt((document.getElementById("InputBase")).value);
    const altura = parseInt((document.getElementById("InputAltura")).value);

    const area = areaTriangulo(base, altura);
    alert (area);
}

// HTML CIRCULO
function calcularPerimetroCirculo() {
    const radio = parseInt((document.getElementById("InputCirculo")).value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = parseInt((document.getElementById("InputCirculo")).value);

    const area = areaCirculo(radio);
    alert(area);
}

// HTML ALTURA

function calcularAlturaTriangulo() {

    const lado1 = parseInt((document.getElementById("Lado1")).value);
    const lado2 = parseInt((document.getElementById("Lado2")).value);
    const base = parseInt((document.getElementById("Base")).value);

    const altura = hallarAltura(lado1, lado2, base);
    alert(altura);
}