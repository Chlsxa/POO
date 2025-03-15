let Programacion1 = {
    materia1(){
        console.log(`${this.nombre} tiene clases de programacion 1`)
    }
}

let Logica2 = {
    materia2() {
        console.log(`${this.nombre} tiene clases de Logica 2`)
    }
}

class Estudiante {
    constructor(nombre){
        this.nombre = nombre
    }

    miNombre() {
        return `Estudiante ${this.nombre} `
    }
}

class RegistroEstudiante extends Estudiante {
    constructor(nombre){
        super(nombre)
    }
}

Object.assign (RegistroEstudiante.prototype, Programacion1, Logica2);

const Estudiante1 = new RegistroEstudiante ("Luisa");

console.log(Estudiante1.miNombre());
Estudiante1.materia1();
Estudiante1.materia2();