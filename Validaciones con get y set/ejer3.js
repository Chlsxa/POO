class inventario{
    constructor(producto, precio, cantidad){
        this._producto = producto;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    stock(agregarCantidad){
        if(this._precio < 0){
            console.error("El precio no debe de ser negativo");
            return;
        }
        if(agregarCantidad <= 0){
            console.error("La cantidad debe de ser mayor a 0");
            return;
        }

        this._cantidad += agregarCantidad;
        console.log(`Se agrego ${agregarCantidad} unidades de ${this._producto} al invetario`);
    }

    comprar(cantidadComprar){
        if(cantidadComprar <=0){
            console.error("La cantidad debe de ser mayor que 0");
            return;
        }

        if(cantidadComprar > this._cantidad){
            console.error(`No hay existencias de ${this._producto} para comprar ${cantidadComprar} unidades`)
            return;
        }

        this._cantidad -= cantidadComprar;
        console.log(`Se compro ${cantidadComprar} unidades de ${this._producto}`)
    }

    mostrar(){
        console.log(`producto: ${this._producto}, cantidad: ${this._cantidad}, precio: $${this._precio}`);
    }
}
const invetario1 = new inventario ("Mangos", 1, 10);
invetario1.mostrar();
invetario1.stock(5);
invetario1.mostrar();
invetario1.comprar(3);
invetario1.mostrar();
