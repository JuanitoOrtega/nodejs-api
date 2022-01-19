# Para iniciar un proyecto con Express es mejor iniciar un package.json con:
npm init -y

# Inicializamos nuestro repositorio
git init

# -D para modo de desarrollo
npm install nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

# Ejecutamos nuestro servidor en modo desarrollo
npm run dev

# Servidor en modo producción
npm run start

# Instalamos express
npm install express

# Instalamos datos faker
npm install faker -D

# Instalamos el paquete
npm install @hapi/boom

# Instalo librería para validar datos que me está enviando el cliente
npm install joi

# Para solucionar el problema de CORS instalamos la siguiente librería
npm install cors

# Heroku
heroku login
heroku create

# Ejecutamos nuestro proyecto localmente
heroku local web

# Push al repositorio de heroku
git push heroku master

/////////// Git
# Ver remoto
git remote -v

# Eliminar la referencia remota actual con
git remote rm Origin

# Agrega el nuevo control remoto
git remote add Origin <URL to new heroku app>

////////// docker //////////
# Levantamos nuestro contenedor
docker-compose up -d postgres

# Dar de baja un contenedor
docker-compose down

# Conectarnos al shell del contenedor
docker-compose exec postgres bash

# Para conectarnos a la base de datos
psql -h localhost -d my-store -U jortega

# Ver logs de un servicio
docker-compose logs -f postgres

# Salir de la base de datos
\q

# Levantamos el servicio de pgadmin
docker-compose up -d pgadmin

# Crear tabla
CREATE TABLE tasks (
	id serial PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
	completed boolean DEFAULT false
);

# Instalamos pg
npm install pg

# Instalamos paquete dotenv
npm install dotenv

# Instalamos sequelize
npm install --save sequelize
npm install --save pg-hstore

//////////// DOCKER COMPOSE ////////////
# Levantamos un nuevo servicio
docker-compose up -d mysql

# Instalamos paquete para conectarse a mysql
npm install --save mysql2