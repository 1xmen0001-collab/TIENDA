let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

function agregar(nombre, precio) {
  carrito.push({ nombre, precio });
  sessionStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  let lista = document.getElementById("carrito");
  let total = 0;

  lista.innerHTML = "";

  carrito.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p.nombre + " - $" + p.precio;
    lista.appendChild(li);
    total += p.precio;
  });

  document.getElementById("total").textContent = "Total: $" + total;
}

function login() {
  alert("Sesión iniciada");
}

<<<<<<< HEAD
function cerrarSesion() {
  sessionStorage.clear();
  carrito = [];
  location.reload();
}

=======
function logout() {
  sessionStorage.clear();
  carrito = [];
  mostrarCarrito();
}

mostrarCarrito();
>>>>>>> e4112887cc17142c74253892f431d9921f3e480a
function comprar(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
<<<<<<< HEAD
=======
  let direccion = document.getElementById("direccion").value;
>>>>>>> e4112887cc17142c74253892f431d9921f3e480a
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;

  if (!correo.includes("@")) {
    alert("Correo inválido");
    return;
  }

  if (isNaN(telefono)) {
    alert("Teléfono inválido");
    return;
  }

  document.getElementById("mensaje").textContent =
    "Gracias por tu compra, " + nombre;

  sessionStorage.clear();
  carrito = [];
  mostrarCarrito();
<<<<<<< HEAD
}

mostrarCarrito();
=======
}
>>>>>>> e4112887cc17142c74253892f431d9921f3e480a
