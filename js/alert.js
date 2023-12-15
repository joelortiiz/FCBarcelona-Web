const logo = document.getElementById("logo")

const alerta =()=> {
let confirmacion = confirm("¿Estás seguro de que volver a Inicio de Sesión?");
    console.log("hh")
    if (confirmacion) {
        window.location.href = "../index.html";
}
}

logo.addEventListener("click", alerta)
