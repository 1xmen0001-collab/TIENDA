# 🛒 Proyecto: SportyStyle - Tienda Virtual

## 📌 Descripción
SportyStyle es una tienda virtual desarrollada con HTML, CSS y JavaScript.  
Permite a los usuarios visualizar productos deportivos, agregarlos a un carrito de compras y realizar una compra ingresando sus datos personales.

---

## 🎯 Objetivos del Proyecto
- Simular el funcionamiento de una tienda online
- Aplicar manipulación del DOM con JavaScript
- Implementar almacenamiento de datos con sessionStorage
- Validar formularios de compra
- Gestionar una sesión de usuario simple

---

## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- sessionStorage

---

## ⚙️ Funcionalidades

### 🧍 Inicio de sesión
- El usuario puede ingresar su nombre mediante un prompt
- Se guarda en sessionStorage
- Se muestra un mensaje de bienvenida en la página

---

### 🛍️ Catálogo de productos
Se muestran 3 productos:
- Camiseta deportiva
- Pantalón deportivo
- Accesorio deportivo

Cada producto incluye:
- Imagen
- Nombre
- Precio
- Botón para agregar al carrito

---

### 🛒 Carrito de compras
- Permite agregar múltiples productos
- Muestra los productos en una lista
- Calcula el total automáticamente
- Se guarda en sessionStorage para mantener los datos

---

### 🧾 Formulario de compra
El usuario debe ingresar:
- Nombre
- Dirección
- Correo electrónico
- Teléfono

---

### ✅ Validaciones
- El correo debe contener "@"
- El teléfono debe ser numérico

---

### 💬 Confirmación de compra
Se muestra un mensaje final con:
- Nombre del cliente
- Dirección de envío
- Total de la compra

Ejemplo:
Gracias por tu compra, Juan. Enviaremos tu pedido a: Calle 123. Total: $35000

---

### 🔄 Cierre de sesión
- Limpia el sessionStorage
- Vacía el carrito
- Reinicia la página

---

## 🧠 Uso de sessionStorage
Se utiliza para:
- Guardar el carrito de compras
- Guardar el nombre del usuario

Esto permite mantener los datos mientras la página esté abierta.

---

## 🚀 Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio
2. Abrir la carpeta en Visual Studio Code
3. Ejecutar con Live Server o abrir el archivo index.html en el navegador

---

## 📁 Estructura del proyecto

TIENDA/
│── index.html  
│── app.js  
│── README.md  

---

## 🔐 Autenticación con Auth0 (Intento de implementación)

Se intentó implementar autenticación con Auth0 para mejorar la seguridad del sistema y permitir un inicio de sesión real.

Sin embargo, durante la integración se presentaron dificultades técnicas como:
- Problemas de configuración del dominio y credenciales
- Errores en la redirección después del login
- Incompatibilidad con el flujo simple del proyecto (HTML + JS sin backend)

Debido a esto, se decidió utilizar una solución alternativa basada en sessionStorage, que permite simular el inicio de sesión de forma funcional y cumplir con los objetivos del proyecto.

Esta decisión permitió asegurar el funcionamiento completo del sistema y mantener la estabilidad de la aplicación.

---

## 📊 Conclusión
El sistema desarrollado cumple con los requerimientos principales:
- Carrito de compras funcional
- Validación de datos del usuario
- Manejo de sesión
- Interfaz simple y clara

Además, se exploró la integración de herramientas externas como Auth0, lo que demuestra iniciativa por implementar soluciones más avanzadas.

Este proyecto puede mejorarse en el futuro con:
- Base de datos real
- Sistema de pagos
- Autenticación completa con backend.