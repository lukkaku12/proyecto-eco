# ECO-ST: Cómo correr Backend y Frontend

Este proyecto está dividido en:
- `backend` (Node.js + Express + MySQL)
- `front` (Webpack + JavaScript)

## 1) Requisitos previos

- Node.js 18+ (recomendado 20 LTS)
- npm 9+
- MySQL 8+ (o MariaDB compatible)
- Git (opcional)

Verifica versiones:

```bash
node -v
npm -v
mysql --version
```

## 2) Configurar base de datos (MySQL)

Desde tu cliente MySQL (Workbench, DBeaver o CLI), ejecuta:

1. `backend/database/db.sql`
2. `backend/database/seed.sql`

Eso crea la base `eco` y carga datos iniciales.

## 3) Configurar variables de entorno del backend

En la carpeta `backend`, crea un archivo `.env` con este contenido:

```env
PORT=5000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=tu_usuario_mysql
DATABASE_PASSWORD=tu_password_mysql
DATABASE_DBNAME=eco
JWT_SECRET=pon_un_secreto_largo_y_seguro
```

Notas:
- El backend usa esas variables en `backend/src/config/database.js`.
- `PORT=5000` es recomendado porque la mayoría del frontend ya consume `localhost:5000`.

## 4) Levantar backend

```bash
cd backend
npm install
npm run dev
```

Si todo está bien, verás algo como:
- `Connected to the database`
- `Servidor ejecutándose en http://localhost:5000`

### Prueba rápida backend

Abre en navegador o Postman:
- `GET http://localhost:5000/` → debe responder `root is working`

## 5) Levantar frontend

En otra terminal:

```bash
cd front
npm install
npm start
```

El frontend corre con webpack dev server en:
- `http://localhost:9000`

## 6) Flujo recomendado para desarrollo

Terminal 1:

```bash
cd backend
npm run dev
```

Terminal 2:

```bash
cd front
npm start
```

## 7) Build de producción del frontend

```bash
cd front
npm run build
```

Genera el bundle en `front/bundle`.

## 8) Problemas comunes

### Error de conexión a MySQL
- Revisa `.env` del backend.
- Verifica que el servicio MySQL esté levantado.
- Confirma que la base `eco` exista y tenga tablas.

### Error CORS o rutas API
- Asegúrate de que backend esté ejecutándose en `PORT=5000`.
- Verifica en consola del navegador qué endpoint está fallando.

### Front abre pero no carga datos
- Confirma que backend responda en `http://localhost:5000/api/auth/get-products`.
- Revisa si `seed.sql` cargó productos.

## 9) Estructura rápida

```text
proyecto-eco/
  backend/
    src/
    database/
  front/
    app/
```

