/** Prompt */  
// edad
const edad = prompt (Message="Ingrese su edad")
if(edad>=18){   
alert ("Sos bienvenido a la página")}
else{
alert ("No tenes acceso") 
    }
//

//For para contar los números impares//

function nrContandoImparesHasta(numero){
    let impares = 0
    for (let vuelta=1; vuelta <= numero; vuelta++){
        if (vuelta % 2 !==0) {
            impares= impares +1;
        }
    }
    return impares
}
console.log(nrContandoImparesHasta(10))
