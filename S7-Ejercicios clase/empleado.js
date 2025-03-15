class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
    }
}

class Gerente extends Empleado{
    constructor(nombre,salario, deartamento){
        super (nombre,salario);
        this.departamento = deartamento;
    }

    gestionar(){
        console.log(`${this.nombre} esta gestionado el departamento ${this.departamento}`);
    }
}

class Desarrollador extends Empleado{
    constructor(nombre, salario, lenguaje){
        super(nombre,salario);
        this.lenguaje = lenguaje;
    }

    programar(){
        console.log(`${this.nombre} esta gestionado programando ${this.lenguaje}`); 
    }
}

class Contabilidad extends Empleado{
    constructor(nombre, salario){
        super(nombre, salario);
    }

    calcularSalario(){
        const descuento1 = this.salario * 0.03;
        const descuento2 = this.salario * 0.075;
        return this.salario - descuento1 - descuento2;
    }

    mostrarSueldoNeto(){
        const salarioNeto = this.calcularSalario();
        console.log(`El salario neto con los descuentos aplicados es de: $${salarioNeto.toFixed(2)}`);
    }
}


let gerente = new Gerente ("Ana", 500, "Ventas");
let desarrollador = new Desarrollador ("Carlos", 500, "JavaScript");
let contable = new Contabilidad ("Jonathan", 800);
gerente.mostrarInfo();
gerente.gestionar();
desarrollador.mostrarInfo();
desarrollador.programar();
contable.mostrarSueldoNeto();