class conversion{
    constructor(temperatura, escala){
        this._temperatura = temperatura;
        this._escala = escala;
    }

    fahrentCelcius(){
        if(this._escala === `F`){
            return((this._temperatura -32) * 5/9).toFixed(2);
        }
    }

    celciusFahrent(){
        if(this._escala === `C`){
            return((this._temperatura * 9 / 5) + 32).toFixed(2);
        }
    }

    kelvinFahrent(){
        if(this._escala === `K`){
            return((this._temperatura - 273.15) * 9 / 5 + 32).toFixed(2);
        }
    }

    kelvinCelcius(){
        if(this._escala === `K`){
            return(this._temperatura - 273.15).toFixed(2);
        }
    }
}

let tempFarentCelcius = new conversion (100, `F`);
let temCelciusFahrent = new conversion(34, `C`);
let temKelvinFahrent = new conversion (154.12, `K`);
let temKelvinCelcius = new conversion(154.12, `K`);
console.log(`Fahrenheit-Celcius: ${tempFarentCelcius.fahrentCelcius()} °C`);
console.log(`Celcius-Fahrenheit: ${temCelciusFahrent.celciusFahrent()} °F`);
console.log(`Kelvin-Fahrenheit: ${temKelvinCelcius.kelvinFahrent()} °F`);
console.log(`Kelvin-Celsius: ${temKelvinCelcius.kelvinCelcius()} °C`);