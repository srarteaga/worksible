# Instalacion

## Arracar el proyecto

Clonar el git repositorio:

```
git clone https://github.com/srarteaga/worksible.git
```

Instalar los paquetes de composer:

```
composer install
```

Agregar el archivo .env 

```
cp env.example .env

```
Agregar los campos de Base de datos en el .evn

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=worksible
DB_USERNAME=root
DB_PASSWORD=

```

Comando para ejecutar las migraciones y seeder y cargar la base de datos 

```
php artisan migrate:refresh --seed

```

Verificar que token de la api del usuario sea correcta .env
para encontrar el token de la api, consultar la tabla users/token

```
VITE_API_TOKEN="YWRtaW5AYWRtaW4uY29t"

```

Arrancar el poyecto con artisan

```
php artisan serve

```

Abrir [http://localhost:8000](http://localhost:8000) en su explorador para ver el proyecto.


