# 🏪 Proyecto: SportyStyle - Tienda Virtual

## 📌 Descripción
SportyStyle es una mini aplicación web de e-commerce orientada a la venta de ropa deportiva. Permite a los usuarios simular un proceso completo de compra: iniciar sesión, seleccionar productos, agregarlos al carrito, completar un formulario y finalizar la compra.

---

## 🔐 Flujo de Autenticación
El sistema simula el inicio de sesión mediante un botón "Iniciar sesión", mostrando un mensaje al usuario.

El cierre de sesión se realiza con el botón "Cerrar sesión", el cual elimina los datos almacenados en sessionStorage, vacía el carrito y recarga la página para limpiar la información.

Esto asegura que la sesión del usuario no mantenga datos una vez finalizada.

---

## 🛒 Proceso de Selección de Productos
La tienda muestra tres productos:

- Camiseta deportiva  
- Pantalón deportivo  
- Accesorio deportivo  

Cada producto tiene:
- Imagen
- Nombre
- Descripción
- Precio
- Botón "Agregar al carrito"

Al hacer clic en el botón:
- El producto se agrega a un arreglo llamado carrito
- Se guarda en sessionStorage
- Se actualiza el carrito en pantalla
- Se calcula el total de la compra

---

## 💾 Uso de Session Storage
Se utiliza sessionStorage para almacenar temporalmente los productos seleccionados.

Esto permite:
- Mantener el carrito activo durante la navegación
- No perder datos al recargar la página

Los datos se eliminan cuando:
- El usuario cierra sesión
- El usuario finaliza la compra

Esto se realiza mediante:
sessionStorage.clear();

---

## 🧾 Carrito de Compras
El carrito muestra:
- Nombre del producto
- Precio
- Total acumulado

Se actualiza automáticamente cada vez que el usuario agrega un producto.

---

## 💳 Proceso de Compra
El usuario completa un formulario con:

- Nombre completo
- Dirección
- Correo electrónico
- Teléfono

Validaciones:
- El correo debe contener "@"
- El teléfono debe contener solo números

Si los datos son correctos:
- Se muestra un mensaje de confirmación
- Se limpia el carrito
- Se eliminan los datos de la sesión

---

## 🔄 Flujo del Sistema
1. Usuario inicia sesión  
2. Selecciona productos  
3. Agrega productos al carrito  
4. Visualiza el total  
5. Completa el formulario  
6. Finaliza la compra  
7. Se eliminan los datos de la sesión  

---

## 📁 Estructura del Proyecto
TIENDA/
- index.html  
- app.js  
- README.md  

---

## 📌 Conclusión
La aplicación cumple con los requisitos de una tienda virtual básica, permitiendo simular el proceso de compra completo.

Se implementó:
- Selección de productos
- Carrito de compras
- Validación de datos
- Uso de sessionStorage
- Manejo de sesión

El sistema es funcional, simple y cumple con los objetivos solicitados en la actividad.