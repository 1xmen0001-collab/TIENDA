# Proyecto Tienda SportyStyle

## Flujo de autenticación
La aplicación simula el inicio de sesión mediante un botón. En un entorno real se utilizaría Auth0, el cual permite autenticar usuarios de forma segura sin gestionar contraseñas directamente.

Auth0 utiliza tokens y protocolos seguros para mantener la sesión del usuario.

## Selección de productos
Los productos se muestran en la página y pueden agregarse al carrito mediante botones. Cada producto seleccionado se guarda en sessionStorage.

El carrito se actualiza dinámicamente mostrando los productos y el total de la compra.

## Protección de la sesión con Session Storage
Se utiliza sessionStorage para almacenar los productos seleccionados durante la navegación.

Características:
- Los datos se mantienen mientras la pestaña está abierta
- Se eliminan al cerrar sesión o finalizar la compra
- No se almacena información sensible

## Uso de HTTPS
El protocolo HTTPS permite cifrar la comunicación entre cliente y servidor, protegiendo datos sensibles como credenciales y datos personales.

Es fundamental en aplicaciones e-commerce para garantizar la seguridad y confianza del usuario.