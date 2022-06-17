//area del cuadrado = lado*lado
//area del rombo = diagonal mayor(D)*diagonal menor(d)
//area del romboide = base*altura
//area del trapecio = h(B*b)/2
//area del poligono = A=p*a/2

let figure = prompt("escribe el nombre de la figura que deseas calcular el área (MAYUSCULA):")

let side;
let diagonal ;
let base;
let height;
let perimeter;
let apothem;

switch(figure){
    case "CUADRADO":
        side = prompt("¿cuanto de lado tiene?")
        side = prompt("¿cuanto de altura tiene?")
    
    console.log(`el area del cuadrado es ${side*side}`)
    break

    case "ROMBO":
        diagonal = prompt("¿cuanto de diagonal tiene?")
        diagonal = prompt("¿cuanto de diagional tiene?")
    console.log(`el area del rombo es ${diagonal*diagonal}`)

    break

    case "ROMBOIDE":
        base = prompt("¿cuanto de base tiene?")
        height = prompt("¿cuanto de altura tiene?")
        console.log(`el area del romboide es ${base*height}`)
        break

    case "TRAPECIO":
        height = prompt("¿cuanto de altura tiene?")
        base = prompt("¿cuanto de base tiene?")
        base = prompt("¿cuanto de base tiene?")
    console.log(`el area del trapecio es ${height(base*base)/2}`)
    
    break

    case "POLIGONO":
        perimeter = prompt("¿cuanto de perimetro tiene?")
        apothem = prompt("¿cuanto de apotema tiene?")
    console.log(`el area del poligono es ${perimeter*apothem/2}`)
    break

    default:console.log(`la palabra que escribiste es incorrecta`)
}