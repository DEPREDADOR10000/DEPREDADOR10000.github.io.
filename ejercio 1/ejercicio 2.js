//Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//área del rectángulo = base * altura
//área de triángulo= (b.h)/2
//área del circulo = radio por el radio por 3,14
let  figure = prompt("escribe el nombre de la figura a calcular el area(MAYUSCULA):")

let base;
let height;
let radius;

//creamos el switch
switch(figure){

    case "RECTANGULO":
    case "rectangulo":
        //debemos pedir dos cosas
    base = prompt("cuanto tiene de base")
    height = prompt("cuanto tiene de altura")
    //inprimiremos en la consola
    console.log(`el area del rectangulo es ${base*height}`)

    break
    case "TRIANGULO":
        //debemos pedir dos cosas
    base = prompt("cuanto tiene de base")
    height = prompt("cuanto tiene de altura")
    //inprimiremos en la consola
    console.log(`el area del triangulo  es ${(base*height)/2}`)
    break

    case "circulo"
        radius = prompt("cuanto tienes de radio")
        console.log(`el area del circulo es ${Math.pi*Math.pow(radius,2)}`)
    break

    default: console.log("la palabra que escribiste no es correcta")

}
