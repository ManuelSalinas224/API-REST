# Proyecto

### REST API

crear archivo .env y escribir estos datos(PostgreSQL)

```
DB_USER=<usuario de postgreSQL>
DB_PASSWORD=<contraseña de postgreSQL>
DB_HOST=<host, ej. localhost>
PORT=<puerto>
URL=http://localhost:3000
```

Rutas

`GET /user/`

 Descripcion Breve

 Es una pequeña REST API la cual cuenta con una creacion de usuario y otra para traer los datos del usuario.

 Puede recibir parametros tales como "id,email e name"

 En caso de que estos parametros no existan, o no haya sido creados arrojara un error dependiendo del problema que haya surgido. (Vease en "src/UserControllers.js - Line 39-59 ).

Creacion de un limite de 50mb para no exceder y corromper la base de datos y que tenga un funcionamiento 100% Efectivo.

Creacion de Datos lo cual permite al usuario crearse un Usuario con Contraseña.




 
