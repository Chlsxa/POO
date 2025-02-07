class producto {
    constructor(id, producto, codigo, fechaI, precio){
        this._precio = precio;
    }

    registroProducto(precio =this._precio){
        let precio1 = precio * 1.20
        let precio2 = precio / 1.20
        console.log(`${parseFloat(precio1)} ${parseFloat (precio2)}`);

    }
}
obj = new producto(123, "Harina", 5432, "7/2/25", 15);
obj.registroProducto();