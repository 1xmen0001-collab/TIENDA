# 🛒 Proyecto: SportyStyle - Tienda Virtual

## 📌 1. Introducción
El presente proyecto consiste en el desarrollo de una tienda virtual denominada **SportyStyle**, cuyo objetivo es simular el proceso de compra de productos deportivos mediante una aplicación web básica.

El sistema permite a los usuarios visualizar productos, agregarlos a un carrito de compras y completar un formulario para simular una compra, incorporando validaciones y almacenamiento temporal de datos.

---

## 🎯 2. Objetivos

### Objetivo General
Desarrollar una aplicación web funcional que simule una tienda online utilizando tecnologías básicas de desarrollo web.

### Objetivos Específicos
- Implementar una interfaz de usuario clara y funcional
- Aplicar manipulación del DOM con JavaScript
- Utilizar almacenamiento local (sessionStorage)
- Validar datos ingresados por el usuario
- Simular un proceso de compra completo

---

## 🛠️ 3. Tecnologías Utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- sessionStorage  

---

## ⚙️ 4. Funcionalidades del Sistema

### 4.1 Inicio de Sesión
Se implementa un sistema de inicio de sesión simple mediante un `prompt`, donde el usuario ingresa su nombre.  
Este dato se almacena en `sessionStorage` y se muestra en pantalla como mensaje de bienvenida.

---

### 4.2 Catálogo de Productos
El sistema presenta tres productos:
- Camiseta deportiva  
- Pantalón deportivo  
- Accesorio deportivo  

Cada producto incluye:
- Imagen representativa  
- Nombre  
- Precio  
- Botón para agregar al carrito  

---

### 4.3 Carrito de Compras
El carrito permite:
- Agregar productos dinámicamente  
- Visualizar los productos seleccionados  
- Calcular el total de la compra automáticamente  

Los datos del carrito se almacenan en `sessionStorage`, permitiendo mantener la información durante la sesión.

---

### 4.4 Formulario de Compra
Para finalizar la compra, el usuario debe completar un formulario con:
- Nombre  
- Dirección  
- Correo electrónico  
- Teléfono  

---

### 4.5 Validación de Datos
Se implementan validaciones básicas:
- El correo debe contener el carácter "@"  
- El teléfono debe ser numérico  

---

### 4.6 Confirmación de Compra
Una vez validado el formulario, el sistema muestra un mensaje con:
- Nombre del usuario  
- Dirección de envío  
- Total de la compra  

Ejemplo:  
Gracias por tu compra, Juan. Enviaremos tu pedido a: Calle 123. Total: $35000

---

### 4.7 Cierre de Sesión
El usuario puede cerrar sesión, lo que:
- Elimina los datos almacenados en sessionStorage  
- Vacía el carrito  
- Reinicia la aplicación  

---

## 🧠 5. Uso de sessionStorage
Se utiliza para:
- Guardar el carrito de compras  
- Guardar el nombre del usuario  

Esto permite simular una sesión activa mientras la página está abierta.

---

## 🔐 6. Intento de Implementación con Auth0

Durante el desarrollo se intentó integrar **Auth0** para implementar autenticación real.

### Problemas encontrados:
- Dificultades en la configuración del dominio y credenciales  
- Problemas de redirección en el login  
- Necesidad de backend para una integración completa  
- Complejidad mayor al alcance del proyecto  

### Decisión tomada:
Se optó por utilizar `sessionStorage` para simular el inicio de sesión, asegurando el correcto funcionamiento del sistema y el cumplimiento de los objetivos.

---

## 📊 7. Resultados
El sistema final permite:
- Navegar productos  
- Agregar al carrito  
- Calcular totales  
- Validar datos  
- Simular una compra completa  

---

## 🚀 8. Posibles Mejoras
- Integración con base de datos  
- Autenticación real (Auth0 o Firebase)  
- Sistema de pagos  
- Diseño responsive  

---

## 📁 9. Estructura del Proyecto

TIENDA/  
│── index.html  
│── app.js  
│── README.md  

---

## ▶️ 10. Ejecución del Proyecto

1. Abrir la carpeta en Visual Studio Code  
2. Ejecutar con Live Server o abrir index.html  
3. Interactuar con la tienda  

---

## 👨‍💻 11. Autor
Proyecto desarrollado como parte de evaluación académica.