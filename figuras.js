
//Codigo Cuadrado
/*console.group("Cuadrado")
console.log("Prueba funcionamiento")
const ladoCuadrado= 5;
console.log("Lados del  cuadrado: "+ ladoCuadrado+"Cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro  del  cuadrado es:"+ perimetroCuadrado+"Cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado
console.log("El Área  del  cuadrado es: "+ areaCuadrado + "Cm2");
console.groupEnd();
// Codigo Triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo= 4;
const alturaTriangulo= 8;
console.log("La altura del  triangulo es:"+ alturaTriangulo+"Cm");
console.log("Los lados del  triangulo miden: "+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm,"+baseTriangulo+"cm");

const perimetriangulo= ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro  del  triangulo es:"+ perimetriangulo+"Cm");

 const areaTriangulo= (baseTriangulo*alturaTriangulo)/2;
 console.log("El Área  del  triangulo es: "+ alturaTriangulo + "Cm2");

console.groupEnd();

// Codigo Circulo
console.group("Circulo")
//radio
const radioCirculo=4;
console.log("El  radio  del  circulo es: "+ radioCirculo+"Cm");
//diamentro
const diamentroCirculo=radioCirculo*2;

//pi
const PI= Math.PI;
const  perimetroCirculo= diamentroCirculo* PI;
//circunferencia
console.log("El perimetro  del  circulo es:"+ perimetroCirculo+"Cm");

//area
const areaCirculo=(radioCirculo*radioCirculo)*PI;
console.log("El Área  del  circulo es: "+ areaCirculo + "Cm2");
console.groupEnd();

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  const sP= (lado1+lado2+base) / 2;
  return Math.sqrt(sP*(sP-lado1)*(sP-lado2)*(sP-base));
}
//console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
function diametroCirculo(radio){
    return radio * 2; 

console.groupEnd();
*/

// Aquí interactuamos con el HTML
//Funcion Cuadrado
// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById('inputTriangulo1');
    const inputLado2 = document.getElementById('inputTriangulo2');
    const inputBase = document.getElementById('inputTriangulo3');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetroTriagulos = perimetroTriangulo(valueLado1, valueLado2, valueBase);

    alert('El perimetro es: ' + perimetroTriagulos + 'cm');
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById('inputTriangulo3');
    const inputAltura = document.getElementById('inputTriangulo4');
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);

    alert('El área es: ' + area + 'cm^2');
}

function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;
    const perimetro= perimetroCirculo(value);
    alert('El área es: '+ perimetro+ 'cm');
}

function calcularAreaCirculo() {
    const input = document.getElementById('inputCirculo');
    const value = input.value;
    const area = areaCirculo(value);

    alert('El área es: ' + area + 'cm^2');
}

//Trianfulo Isoceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}