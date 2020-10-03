let agregar= document.getElementById("boton");

agregar.addEventListener("click", function () {
    let tarea= document.getElementById("tarea").value;
    let listado= document.getElementById("listado");

    let listadoTareas= document.createElement("li");
    listadoTareas.textContent= tarea;

    listado.appendChild(listadoTareas)
})

listado.addEventListener("dblclick", function (e) {
    console.log(e.target)

    let borrarTarea= e.target

    listado.removeChild(borrarTarea)  
})

