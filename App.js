document
.getElementById("producto-formulario")
.addEventListener("submit", function (elemento){
    elemento.preventDefault();
    const name = document.getElementById("name").ariaValueMax,
    precio = document.getElementaryById("precio").value,
    año = document.getElementaryById("año").value;

    const producto = new Producto(nombre, precio, año);
    const usuario = new Usuario();

    if(nombre === " " || precio === " " || año === " "){
        usuario.showMessage("Por favor insertar nombre de usuario");
    }

    usuario.AddProducto(producto);
    usuario.showMessage("Producto agregado correctamente");
    usuario.resetForm();
});

document.getElementById("Lista-producto").addEventListener("click", (elemento) =>{
    const usuario = new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

export class Producto {
    constructor(nombre, precio, año) {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}