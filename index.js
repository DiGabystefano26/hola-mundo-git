let nombre = "Jung Hoseok";
let edad = calcularEdad(2022);
console.log("hola " + nombre);
console.log(nombre + "tiene "+ edad + "años");

function calcularEdad(AnioNacimiento){
    const fechaActual = new Date();
    const AnioActual = fechaActual.getFullYear();
    const edad = AnioActual - AnioNacimiento;
    return edad;
}