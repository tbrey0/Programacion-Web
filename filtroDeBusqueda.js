var autos = [
    { marca: "Toyota", modelo: "Corolla", precio: 25000 },
    { marca: "Honda", modelo: "Civic", precio: 23000 },
    { marca: "Toyota", modelo: "Camry", precio: 28000 },
    { marca: "Ford", modelo: "Mustang", precio: 40000 },
    { marca: "Chevrolet", modelo: "Cruze", precio: 22000 },
    { marca: "Toyota", modelo: "Rav4", precio: 30000 }
    ];

    function buscarAutos() {
    var marcaSeleccionada = document.getElementById("marca").value;

    var resultados = autos.filter(function(auto) {
        return marcaSeleccionada === "" || auto.marca === marcaSeleccionada;
    });

    console.log("Resultados de la búsqueda:");
    console.log(resultados);

    
    var nuevoAuto = { marca: "Nissan", modelo: "Sentra", precio: 27000 };
    autos.push(nuevoAuto);
    console.log("Array después de push:", autos);

    var autoEliminado = autos.pop();
    console.log("Array después de pop:", autos);
    console.log("Auto eliminado:", autoEliminado);
    }