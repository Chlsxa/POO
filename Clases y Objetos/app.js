//Aplicación de clase
class logueo{

    constructor(usuario, password){ 
        this._usuario = usuario; 
        this._contra = password;
    }
    //metodos, funciones o comportamientos.

    iniciar_sesion(){
        return`El usuario ${(this._usuario)} con contraseña ${(this._contra)} a iniciado sesión`;
    } 
    ver_historias(){
        return`El usuario ${(this._usuario)} con contraseña ${(this._contra)} ve las historias de sus amigos`;
    }

    ver_publicaciones(){

    }
    
    buscar(){

    }
}
let autorizacion = new logueo("Lola", 1234);
let autorizacion2 = new logueo("Charly", "dumb");
console.log(autorizacion.iniciar_sesion());
console.log(autorizacion2.ver_historias());