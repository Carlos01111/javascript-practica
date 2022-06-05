// Realizar funciones que permitan calcular el perimetro y el area de un cuadrado.

// CUADRADO
// Perimetro

function perimetroCuadrado(lado){
    const perimetro = lado * 4;
    return perimetro; 
};

// funcion para recuperar datos del form y realizar el cálculo


function calcularPerimetroCuadrado(){
    const input = document.getElementById('ladoCuadrado');
    const value = input.value;
    const resultado = perimetroCuadrado(value);
    alert(resultado);
};

// fin perimetro

// area

function areaCuadrado(lado){
    const area = lado * lado;
    return area;
};


function calcularAreaCuadrado(){
    const input = document.getElementById('ladoCuadrado');
    const value = input.value;
    const resultadoArea = areaCuadrado(value);
    alert(resultadoArea);
};

// fin area
// fin cuadrado


// Circulo

// diametro 

function diametroCirculo(radio){
    const diametro = radio * 2;
    return diametro;
}

function calcularDiametro(){
    const input = document.getElementById('radio');
    const value = input.value;
    const resultadoDiametro = diametroCirculo(value);
    alert(resultadoDiametro);
};

// perimetro

function perimetroCirculo(radio){
    const diametro = radio * radio;
    const pi = Math.PI;
    const perimetroCirculo = diametro * pi;
    return perimetroCirculo;
};

function calcularPerimetroCirculo(){
    const input = document.getElementById('radio');
    const value = input.value;
    const resultadoPerimetroCirculo = perimetroCirculo(value);
    alert(resultadoPerimetroCirculo);
};


// Triangulo

// Perimetro
function perimetroTriangulo (lado1,lado2,lado3){
    const perimetroTriangulo = lado1 +lado2 + lado3;
    return perimetroTriangulo;
};

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById('lado1');
    const value1 =Number( input1.value);
    const input2 = document.getElementById('lado2');
    const value2 = Number(input2.value);
    const input3 = document.getElementById('lado3');
    const value3 = Number(input3.value);
    const resultadoPerimetroTriangulo = perimetroTriangulo(value1,value2,value3);
    // const resultados= int(resultadoPerimetroTriangulo);
    alert(resultadoPerimetroTriangulo);

}

// area


