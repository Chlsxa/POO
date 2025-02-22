class persona{
    constructor(nombre, nacimiento){
        this._nombre = nombre;
        this._nacimiento = nacimiento;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    calcularEdad(){
        const hoy = new Date();
        const fechaNacimiento = new Date (this._nacimiento);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        if(hoy.getMonth() < fechaNacimiento.getMonth() ||(hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())){
            edad--
        }
        return edad;
    }

    mostrar(){
        console.log(`Mi nombre es ${this._nombre}, mi fecha de nacimiento ${this._nacimiento} y tengo ${this.calcularEdad()} años.`)
    }
}

const persona1 = new persona ("Victoria", "2009-01-16");
persona1.mostrar();