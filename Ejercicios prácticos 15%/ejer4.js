let Revision = {
    Revisar() {
        return `${this.nombre} fue revisado`
    }
};

let Curacion = {
    Curar() {
        return `${this.nombre} fue curado`
    }
};

let Inyeccion = {
    Inyectado() {
        return `${this.nombre} fue dormido`
    }
};

class PacienteCanino {
    constructor(nombre){
        this.nombre = nombre;
    }

    Presentacion() {
        return `Paciente: ${this.nombre}`
    }
}

class PacienteConsulta extends PacienteCanino {
    constructor (nombre) {
        super(nombre);
    }
}

Object.assign(PacienteConsulta.prototype, Revision, Curacion, Inyeccion);

const Paciente1 = new PacienteConsulta("Baymax");

console.log(Paciente1.Presentacion());
console.log(Paciente1.Revisar());
console.log(Paciente1.Curar());
console.log(Paciente1.Inyectado());
