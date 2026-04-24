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
  alert("Bienvenido Cliente");
}

function cerrarSesion() {
  sessionStorage.clear();
  carrito = [];
  location.reload();
}

function comprar(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
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

  let total = carrito.reduce((acc, p) => acc + p.precio, 0);

  document.getElementById("mensaje").textContent =
    "Gracias por tu compra, " + nombre + ". Total: $" + total;

  sessionStorage.clear();
  carrito = [];
  mostrarCarrito();
}

mostrarCarrito();