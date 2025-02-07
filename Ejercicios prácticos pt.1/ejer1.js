class cliente{
    constructor(nombre, peso, estatura){
        this._nombre = nombre;
        this._peso = peso;
        this._estatura = estatura;
    }

    calculoIMC(){
        return(this._peso / (this._estatura * this._estatura).toFixed(2));
    }

    Imc(){
        return`${this._nombre} tienes un IMC de ${this.calculoIMC()}`;
    }
}

let persona1 = new cliente("Gustavo", 120, 1.70);
let persona2 = new cliente("Maria", 95, 1.60);
console.log(persona1.Imc());
console.log(persona2.Imc());