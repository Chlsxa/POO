class persona{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    get edad(){
        return this._edad;
    }

    set edad(nuevaEdad){
        if(nuevaEdad > 0){
            this._edad = nuevaEdad;
        } else{
            console.log("La edad debe ser mayor que 0.");
        }
    }
}

const persona1 = new persona("Carlos", 25);
persona1.edad = 30;
console.log(persona1.edad);

persona1.edad = -5;