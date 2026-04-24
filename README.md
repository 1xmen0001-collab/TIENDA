# 🏪 Proyecto: SportyStyle - Tienda Virtual

## 📌 Descripción
Aplicación web que simula una tienda de ropa deportiva. Permite iniciar sesión, agregar productos al carrito y realizar una compra.

## 🔐 Autenticación
Se simula el inicio de sesión mediante un botón.  
El cierre de sesión elimina los datos usando sessionStorage.
Se simula el inicio de sesión. En una implementación real, se utilizaría Auth0 para gestionar la autenticación segura de usuarios.

## 🛒 Productos
La tienda incluye:
- Camiseta deportiva  
- Pantalón deportivo  
- Accesorio deportivo  

Cada producto se puede agregar al carrito.

## 💾 Session Storage
Se utiliza para guardar el carrito mientras el usuario navega.  
Se elimina al cerrar sesión o comprar.

## 💳 Compra
El usuario ingresa:
- Nombre  
- Dirección  
- Correo  
- Teléfono  

Se validan datos y se muestra confirmación.

## 📁 Archivos
- index.html  
- app.js  
- README.md  

## 📌 Conclusión
El sistema cumple con los requisitos: carrito, validación y manejo de sesión.