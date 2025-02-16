class persona{
    constructor(nombre, dui){
        this._nombre = nombre;
        this._dui = dui;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre (nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get dui (){
        return this._dui;
    }
    set dui(nuevoDui){
        if(nuevoDui.length === 9 && typeof nuevoDui === "number"){
            this.mostrar()
        }else{
            console.log("Arregle el dui");
        }
    }
    mostrar(){
        let mensaje = `Mi nombre es ${this.nombre} y mi dui es ${this._dui}`;
        console.log(mensaje);
    }
}

let obj = new persona("Chelsea", 191527357);
obj.dui = "263784597";
