# pruebatecnica

En este proyecto se creó tanto el backend, como el frontend de una prueba tecnica para ingresar a la empresa TCIT
Se utilizó para el backend NodeJs, para la base de datos PostgreSQL, para el frontend React, Redux, Tailwind

# Antes de empezar

Se debe clonar el repositorio desde github, "git clone https://github.com/MatistaT3/pruebatecnicaTCIT.git"

# Como levantar el proyecto?

Lo primero que hay que hacer instalar todas las dependencias, tanto del server como del client, por lo que se debe realizar un "npm i" en el terminal, ubicado en la carpeta que contenga el proyecto, y despues se debe volver a ejecutar el comando, pero ubicado en el terminal en la carpeta client.

Lo segundo es crear la base de datos dentro de postgreSQL, para esto dentro de la carpeta "database" está el archivo "db.sql" en el cual se pueden copiar los comandos para crear la base de datos y las tablas correspondientes y posteriormente pegarlos dentro del terminal con postgreSQL.

Lo tercero que se debe hacer es vincular su postgreSQL con el backend, para eso debe crear un archivo llamado ".env" al mismo nivel de las carpetas principales (client, database, src), y dentro de este debe ingresar lo siguiente=
DB_USER = su usuario de postgreSQL
DB_PASSWORD = su contraseña de postgreSQL
DB_HOST = localhost
DB_PORT = 5432
DB_NAME = nombre de su base de datos

Tras terminar esos primeros se deben ejecutar dos terminales, uno que se encargará del frontend con el terminal ubicado dentro de la carpeta "client" y otro en la carpeta principal, en el terminal de la carpeta del proyecto ejecutaremos el siguiente comando "npm run dev" con lo que debería quedar funcionando el backend en el puerto 4000 (Se puede modificar en el index.js). Para ejecutar el frontEnd se debe ocupar el terminal ubicado en el client, en este usaremos el comando "npm run start", con esto abriendo el navegador y poniendo la URL "http://localhost:3000/" se debería observar la interfaz con la cual se puede interactuar.
