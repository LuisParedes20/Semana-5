let TI = prompt("Elija el tipo de hamburguesa: Sencilla-Doble-Triple")
let N =Number(prompt("Indique la cantidad de hamburguesas"))
let TP=prompt("Indique medio de pago:tarjeta de credito o efectivo")
var PA=0
let CA=0.05;
var TO=0;
var TOT=0;
switch(TI){
    case "Sencilla":
        PA=20;
        break;
    case "Doble":
        PA=25;
        break;
    case "Triple":
        PA=28;
        break;
}
switch(TP){
    case "tarjeta de credito":
        TOT=(N*(PA*1.05))
        alert(`Precio total con cargo del 5% por uso de tarjeta de credito: ${TOT} soles`)
        break;
    case "efectivo":
        TO=PA*N;    
        alert(`Precio total: ${TO} soles`)
        break;
}