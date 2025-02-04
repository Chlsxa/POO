class automovil{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender(){
        this.encendido = true;
        console.log(`El automovil ${this.marca} ${this.modelo} está encendido.`);
    }

    apagar(){
        this.encendido = false;
        console.log(`El automovil ${this.marca} ${this.modelo} está apagado.`);
    }
}

const miAuto = new automovil("Toyota", "Corola");
miAuto.encender();
miAuto.apagar();