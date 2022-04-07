let L= Number(prompt("Introduzca la cantidad de litros que produce:"));
let PG= parseFloat(prompt("Introduzca el precio del galón"));
let G= 3.785
let TG= L/G;
let GA= TG*PG;
alert(`La ganancia del día es de ${GA.toFixed(3)}`)
