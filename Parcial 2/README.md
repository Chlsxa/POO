-REGISTRAR USUARIO - para poder hacer el envio 
pegar para verificar el funcionamiento

POST - http://localhost:3000/usuario
{
  "nombre": "Juanita",
  "email": "juanita@example.com",
  "telefono": "7890-1971",
  "credito": "5"
}
GET - http://localhost:3000/usuarios

-CONSULTA DE CEDITO DEL USUARIO - obtiene el credito disponible
GET - http://localhost:3000/usuario/68199a3f0dfb4a904f225000/credito
Mostrara el credito disponible de "juanita" 

-REGISTRO DEL ENVIO
GET - http://localhost:3000/envios (ver los envios anteriores)

POST -http://localhost:3000/envios
{
  "usuarioId": "68199a3f0dfb4a904f225000",
  "nombre": "Juanita",
  "direccion": "San Miguel",
  "telefono": "7890-1971",
  "referencia": "Casa de dos plantas", 
  "observacion": "Entrega rapida"  
}

-REGISTRAR UN PRODUCTO

GET - http://localhost:3000/productos

POST - http://localhost:3000/productos
{
  "descripcion": "mouse",
  "peso": "4",
  "bultos": "2",
  "fecha_entrega": "2025-05-10"
}

-AGREGAR UN PRODUCTO EXISTENTE AL ENVIO (ya existente)
(se coloca el ID del envio)

POST- http://localhost:3000/envios/68199c820dfb4a904f225006/producto
{
  "descripcion": "mouse",
  "peso": "6",
  "bultos": "1",
  "fecha_entrega": "2025-05-10"
}
ESte ya mostrara el costo de envio, basicamente

-CONSULTAR LOS ENVIOS DE UN USUARIO (en especifico)
aquí se coloca el ID del usuario

GET- http://localhost:3000/envios/68199a3f0dfb4a904f225000

-ELIMINAR ALGUN ENVIO Y RESTAURAR EL CREDITO (si desea eliminar a Juanita)
DELETE - http://localhost:3000/envios/68199a3f0dfb4a904f225000



















