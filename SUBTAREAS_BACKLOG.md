# Subtareas para completar la app (1A, 1B, 1C)

Este backlog está pensado para ejecutar rápido y dejar un MVP funcional usando backend propio en Node.js con MVC sencillo.

---

## 1A) Catálogo real con detalle y categorías

### Backend (MVC)
1. Crear módulo `categories`:
   - `models/categoryModel.js`: `getAllCategories()`.
   - `controllers/categoriesController.js`: `listCategories`.
   - `routes/categoriesRoutes.js`: `GET /api/categories`.
2. Completar módulo `products`:
   - `GET /api/products` (lista paginada opcional).
   - `GET /api/products/:id` (detalle).
   - `GET /api/products?category_id=...` (filtro por categoría).
3. Estandarizar respuesta JSON:
   - `{ data, meta, error }`.
4. Agregar validaciones mínimas:
   - `name`, `price`, `category_id` requeridos en creación/edición.

### Frontend
1. Crear `ProductListPage`:
   - Filtros por categoría.
   - Búsqueda por nombre.
2. Crear `ProductDetailPage`:
   - Nombre, precio, stock, descripción, imagen.
3. Integrar API client:
   - `getProducts(params)`
   - `getProductById(id)`
   - `getCategories()`
4. Agregar estados UI:
   - loading, empty state, error state.

### Criterios de aceptación
- Se pueden listar productos por categoría sin recargar página.
- Se puede abrir detalle desde la tarjeta de producto.
- Si no hay productos, se muestra mensaje amigable.

---

## 1B) Carrito y checkout end-to-end

### Backend (MVC)
1. Crear módulo `cart`:
   - Tabla `cart_items` (`user_id`, `product_id`, `quantity`).
   - Endpoints:
     - `GET /api/cart`
     - `POST /api/cart/items`
     - `PATCH /api/cart/items/:id`
     - `DELETE /api/cart/items/:id`
2. Completar módulo `orders`:
   - `POST /api/orders` crea orden desde carrito.
   - Persistir `order_items` con snapshot de precio.
3. Validaciones:
   - Stock disponible antes de confirmar orden.
   - Reducir inventario al crear orden.

### Frontend
1. Conectar botones “Add to cart” a `POST /api/cart/items`.
2. Crear Drawer/Modal de carrito:
   - Incrementar/disminuir cantidad.
   - Eliminar producto.
   - Ver total dinámico.
3. Crear `CheckoutPage`:
   - Dirección, método de pago, confirmación.
4. Crear `OrdersPage`:
   - Historial de órdenes del usuario.

### Criterios de aceptación
- El total coincide con suma de ítems del carrito.
- Se crea una orden real y el carrito queda vacío.
- El stock baja al confirmar compra.

---

## 1C) Perfil de usuario real

### Backend (MVC)
1. Completar módulo `users`:
   - `GET /api/users/me`
   - `PATCH /api/users/me`
   - `PATCH /api/users/me/password`
   - `DELETE /api/users/me`
2. Seguridad:
   - Hash de password con bcrypt.
   - Validar token JWT en rutas privadas.
3. Validaciones:
   - Email único.
   - Password con mínimo 8 caracteres.

### Frontend
1. Crear `ProfilePage` con formulario editable:
   - Nombre, apellido, teléfono, dirección, ciudad, país.
2. Crear sección “Cambiar contraseña”.
3. Agregar “Eliminar cuenta” con confirmación doble.
4. Mostrar feedback:
   - éxito/error por operación.

### Criterios de aceptación
- Usuario autenticado puede editar su perfil.
- Cambio de contraseña invalida sesión anterior (opcional recomendado).
- Eliminación de cuenta elimina acceso inmediatamente.

---

## Reemplazar JSONPlaceholder por API Node propia (MVC sencilla)

### Opción A: SQLite (ideal para desarrollo rápido)
- Ventajas: cero instalación compleja, portable.
- Recomendado para MVP local.

#### Estructura sugerida
- `src/models/*`
- `src/controllers/*`
- `src/routes/*`
- `src/middlewares/*`
- `src/config/database.js`

#### Tablas mínimas
- `users`
- `categories`
- `products`
- `cart_items`
- `orders`
- `order_items`

### Opción B: MySQL simple (si ya usas MySQL)
- Mantener credenciales por `.env`:
  - `DATABASE_HOST`
  - `DATABASE_PORT`
  - `DATABASE_USER`
  - `DATABASE_PASSWORD`
  - `DATABASE_DBNAME`

### Configuración por entorno
1. `.env.example` con variables obligatorias.
2. `JWT_SECRET` fuerte.
3. `CORS_ORIGIN` configurable.

### Migración frontend desde JSONPlaceholder
1. Identificar escenas con `fetch('https://jsonplaceholder...')`.
2. Reemplazar por cliente API local (`/api/...`).
3. Homologar contratos de respuesta para no romper vistas.

---

## Entregables por sprint

### Sprint 1 (1 semana)
- 1A completo (listado + detalle + categorías).
- API de productos/categorías estable.

### Sprint 2 (1 semana)
- 1B completo (carrito + checkout + órdenes).

### Sprint 3 (1 semana)
- 1C completo (perfil real + seguridad básica).
- Eliminación total de JSONPlaceholder en dashboard.
