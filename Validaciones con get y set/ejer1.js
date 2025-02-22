class persona{
    constructor(id, nombre, telefono, genero, departamento){
        this._id = id;
        this._nombre = nombre;
        this._telefono = telefono;
        this._genero = genero;
        this._departamento = departamento;
    }

    get id (){
        return this._id;
    }
    set id(nuevoId){
        this._id = nuevoId;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        if(typeof nuevoNombre === "string" && nuevoNombre.length <= 20){
            this._nombre = nuevoNombre;
        }else{
            console.error("El nomre no debe de sobre pasar d elos 20 caracteres")
        }
    }

    get telefono(){
        return this._telefono;
    }
    set telefono(nuevoTelefono){
        if(typeof nuevoTelefono === "number" && nuevoTelefono.toString().length === 8){
            this._telefono = nuevoTelefono
        }else{
            console.error("Solo se aceptan 8 caracteres en el número.")
        }
    }

    get genero(){
        return this._genero;
    }
    set genero(nuevoGenero){
        if(nuevoGenero === 'F' || nuevoGenero === 'M'){
            this._genero = nuevoGenero === 'F' ? 'Femenino' : 'Masculino';
        }else{
            console.error("Seleccione F para Femenino y M para Maculino");
        }
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(nuevoDepartamento){
        const departamentosOpcion = ["Ventas", "RRHH", "Administración"];
        if(departamentosOpcion.includes(nuevoDepartamento)){
            this._departamento =nuevoDepartamento;
        }else{
            console.error("Solo debe selccionar las opciones disponibles");
        }
    }

    mostrarInformacion(){
        console.log(`ID: ${this._id}`);
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Telefono: ${this._telefono}`);
        console.log(`Genero: ${this._genero}`);
        console.log(`Departamento: ${this._departamento}`);
    }
}

const persona1 =new persona(1, "Juan", 12345678, "M", "Ventas");

persona1.mostrarInformacion();

persona1.id = 2;
persona1.nombre = "Ana";
persona1.telefono = 987654321;
persona1.genero ="F";
persona1.departamento = "RRHH";

persona1.mostrarInformacion();