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
