let nombre = "Jung Hoseok";
let edad = calcularEdad(1994);
console.log("hola " + nombre);
console.log(nombre + "tiene "+ edad + "años");
console.log("Se le pagara: "+calcularSalario(8, 30000));

function calcularEdad(AnioNacimiento){
    return new Date().getFullYear() - AnioNacimiento;
}

function calcularSalario(horasTrabajadas, montoPorHora){
    return horasTrabajadas * montoPorHora;
}