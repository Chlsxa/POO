class nota{
    constructor(titulo, detalle){
        this._titulo = titulo;
        this._detalle = detalle;
    }

    contador(){
        return this._detalle.split('').length;
    }

    guardarNotas(){
        console.log(`La nota "${this._titulo}" tiene ${this.contador()} palabras.`);
    }
}

let nota1 = new nota("Pendientes", "Estudiar para laboratorio de POO");
let nota2 = new nota ("Compras", "comprar leche, harina, huevos, CocaCola y churros.");
nota1.guardarNotas();
nota2.guardarNotas();