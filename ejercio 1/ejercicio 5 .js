/* 
5 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]
let pintura = prompt("que color ddesea").toLocaleLowerCase()
//conprobar si existe,si es distinto a !==-1 lo ah encontrado
if(colores.indexOf(pintura) !==-1){
    console.log(`tu pedido ${pintura} si esta disponible`)
}
else{
    console
}