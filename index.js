let inputBotonEnviar = document.querySelector("#boton-enviar");
let inputNombre = document.querySelector("#nombre");
let inputApellido = document.querySelector("#apellido");
let inputCorreo = document.querySelector("#correo");
let inputDepartamento= document.querySelector("#departamento");
let listaTrabajadores = document.querySelector("#lista-trabajadores");

let contadorIT = 0;
let contadorMarketing = 0;
let contadorVentas = 0;
let contadorAd = 0;
let spanIT = document.querySelector("#resumen-it");
let spanMarketing = document.querySelector("#resumen-marketing");
let spanVentas = document.querySelector("#resumen-ventas");
let spanAd = document.querySelector("#resumen-ad");

inputBotonEnviar.addEventListener('click', () => {
let nombre = inputNombre.value;
let apellido = inputApellido.value;
let departamento = inputDepartamento.value;
console.log("Trabajador a añadir: " + nombre + " " + apellido + " del departamento " + departamento);
let nuevoLi = document.createElement("li")
nuevoLi.textContent = `${nombre} ${apellido} - Dept: ${departamento}`;
nuevoLi.classList.add("list-group-item");
listaTrabajadores.append(nuevoLi);
    if (departamento === "it") {
        contadorIT = contadorIT + 1; // Sumamos 1
        spanIT.textContent = contadorIT; // Lo pintamos en la pantalla
    } else if (departamento === "marketing") {
        contadorMarketing = contadorMarketing + 1;
        spanMarketing.textContent = contadorMarketing;
    } else if (departamento === "ventas") {
        contadorVentas = contadorVentas + 1;
        spanVentas.textContent = contadorVentas;
    } else if (departamento === "ad") {
        contadorAd = contadorAd + 1;
        spanAd.textContent = contadorAd;
    }
});
