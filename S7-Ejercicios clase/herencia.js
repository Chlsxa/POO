class Padre{
    constructor(nombre){
        this.nombre = nombre
    }
    saludo(){
        console.log(`Holaa ${this.nombre}`);
    }
}

class Hija extends Padre{
    constructor(nombre){
        super(nombre);
    }

    saludo(){
        console.log(`Hola que hay ${this.nombre}`);
    }
}


let obj = new Hija ('Juan')
obj.saludo()