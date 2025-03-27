class Animal{
    accion(){
        console.log("Grr")
    }
}

class Perro extends Animal{
    accion(){
        console.log("Wof")
    }
}

class Gato extends Animal{
    accion(){
        console.log("Meow")
    }
}

let Operro = new Perro()
Operro.accion()