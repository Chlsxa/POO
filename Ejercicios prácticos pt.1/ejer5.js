class loteria{
    constructor(numeroGanador, monto){
        this._numeroGanador = numeroGanador;
        this._monto = monto;
    }

    generarNumero(){
        return Math.floor(Math.random() * 100);
    }

    juego(){
        const numeroRandom = this.generarNumero();
        if(this.numeroGanador === numeroRandom){
            const premio = this._monto * 20;
            console.log(`GANASTE! Has adivinado el número. Tu premio es de: $${premio}`);
        }else{
            console.log(`Mala suerte, no acertaste el número. El número ganador era: ${numeroRandom}. Intenta otra vez`);
        }
    }
}

let jugador1 = new loteria(65, 87);
jugador1.juego();

