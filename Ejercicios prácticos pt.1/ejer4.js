class estudiante{
    constructor(nombre){
        this._nombre = nombre;
    }

    registrarSancion(sansion, monto){
        console.log(`El estudiante ${this._nombre} cometio la falta de: "${sansion}" y su monto a pagar es de $${monto}`);
    }
}

let estudiante1 = new estudiante("Marcos");
let estudiante2 = new estudiante("Ana");
estudiante1.registrarSancion(`Llegada tardía`, 1);
estudiante2.registrarSancion(`Caminar por los pasillos en horas de clase`, 3)
estudiante1.registrarSancion(`No andar la vestimenta apropiada`, 5);
estudiante2.registrarSancion(`No hacer uso adecuado de las instalaciones`, 10);