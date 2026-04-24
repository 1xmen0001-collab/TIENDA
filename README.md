# 🛒 Proyecto: SportyStyle - Tienda Virtual

## 📌 1. Introducción
El presente proyecto consiste en el desarrollo de una tienda virtual llamada **SportyStyle**, cuyo objetivo es simular el proceso de compra de productos deportivos mediante una aplicación web.

El sistema permite a los usuarios visualizar productos, agregarlos a un carrito de compras y completar un formulario para simular una compra, incorporando validaciones y almacenamiento de datos mediante sessionStorage.

---

## 🎯 2. Objetivos

### Objetivo General
Desarrollar una aplicación web funcional que simule una tienda online.

### Objetivos Específicos
- Implementar una interfaz simple y clara
- Manipular el DOM con JavaScript
- Utilizar sessionStorage
- Validar datos del usuario
- Simular un flujo completo de compra

---

## 🛠️ 3. Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- sessionStorage

---

## ⚙️ 4. Funcionalidades

### 🧍 Inicio de sesión
El usuario ingresa su nombre mediante un prompt.  
Este dato se guarda en sessionStorage y se muestra en pantalla como mensaje de bienvenida.

---

### 🛍️ Productos
Se presentan tres productos:
- Camiseta deportiva
- Pantalón deportivo
- Accesorio deportivo

Cada uno tiene imagen, nombre, precio y botón para agregar al carrito.

---

### 🛒 Carrito de compras
- Permite agregar productos
- Muestra los productos seleccionados
- Calcula el total automáticamente
- Se guarda en sessionStorage

---

### 🧾 Formulario de compra
El usuario debe ingresar:
- Nombre
- Dirección
- Correo
- Teléfono

---

### ✅ Validaciones
- El correo debe contener "@"
- El teléfono debe ser numérico

---

### 💬 Confirmación de compra
Se muestra un mensaje final con:
- Nombre
- Dirección
- Total de la compra

Ejemplo:  
Gracias por tu compra, Juan. Enviaremos tu pedido a: Calle 123. Total: $35000

---

### 🔄 Cierre de sesión
- Limpia sessionStorage
- Vacía el carrito
- Reinicia la aplicación

---

## 🧠 5. Uso de sessionStorage
Se utiliza para:
- Guardar el carrito de compras
- Guardar el nombre del usuario

Esto permite mantener la información mientras la página esté abierta.

---

## 🔐 6. Flujo de Autenticación con Auth0 (Propuesto)

Se consideró implementar autenticación mediante Auth0 con el siguiente flujo:

1. El usuario hace clic en "Iniciar sesión"
2. Es redirigido a Auth0
3. Ingresa sus credenciales
4. Auth0 valida la información
5. El usuario es redirigido nuevamente a la aplicación
6. Se obtiene la información del usuario autenticado

### Implementación intentada
Se realizaron pruebas utilizando:
- createAuth0Client()
- loginWithRedirect()
- handleRedirectCallback()

### Dificultades encontradas
- Problemas en la configuración del dominio
- Errores en la redirección del login
- Necesidad de backend para integración completa
- Complejidad superior al alcance del proyecto

### Solución adoptada
Se implementó un sistema de autenticación simple con sessionStorage, permitiendo:
- Simular inicio de sesión
- Mantener sesión activa
- Garantizar funcionamiento estable

---

## 🛒 7. Proceso de selección de productos

El usuario selecciona productos mediante botones "Agregar".

Los productos se almacenan en un arreglo (carrito) y luego en sessionStorage, lo que permite:
- Mantener los datos durante la sesión
- Actualizar el carrito dinámicamente
- Calcular el total automáticamente

---

## 🔄 8. Manejo de sesión

La sesión se mantiene utilizando sessionStorage:

- Se guarda el nombre del usuario al iniciar sesión
- El carrito se mantiene activo durante la sesión
- Al cerrar sesión se eliminan todos los datos

Esto simula el comportamiento de una sesión real sin necesidad de backend.

---

## 📊 9. Resultados
El sistema final permite:
- Navegar productos
- Agregar al carrito
- Calcular totales
- Validar datos
- Completar una compra

---

## 🚀 10. Posibles mejoras
- Integración con base de datos
- Autenticación real (Auth0 o Firebase)
- Sistema de pagos
- Diseño responsive

---

## 📁 11. Estructura del proyecto

TIENDA/
│── index.html  
│── app.js  
│── README.md  

---

## ▶️ 12. Ejecución del proyecto

1. Abrir en Visual Studio Code  
2. Ejecutar con Live Server o abrir index.html  
3. Probar el flujo completo  

---

## 👨‍💻 13. Autor
Proyecto desarrollado como parte de evaluación académica.