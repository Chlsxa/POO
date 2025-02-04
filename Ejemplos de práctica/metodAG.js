class producto{
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return `$${this._precio.toFixed(2)}`;
    }
}
const item = new producto("Laptop", 899.99);
console.log(item.nombre);
console.log(item.precio);