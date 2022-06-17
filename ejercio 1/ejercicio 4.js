/* 
4 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/
let palabra = prompt("escribe tu palbra")
let vocales = 0
let consonates = 0
for(let i of palabra){
    if(i=="a" || i=="e" || i=="i" || i=="o" 
    || i=="u"){
        vocales++
    }
else{
    consonates++

}
} 
console.log(`tu palabra tiene ${vocales} vocales,${consonantes} consonante y tiene un total ${palabra.lengeht} palabras`)