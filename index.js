let nombre = "Jung Hoseok";
let edad = calcularEdad(2020);
console.log("hola " + nombre);
console.log(nombre + "tiene "+ edad + "años");

function calcularEdad(AnioNacimiento){
    return new Date().getFullYear() - AnioNacimiento;
}