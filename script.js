alert("Bienvenido al sistema de GJ farmacia!");

const usuario = {
    user: "admin",
    password: "1234"
};
const logueo = {
    user:"",
    password:""
};
const amoxicilina = {
    nombre: "amoxicilina",
    dosis: "500 mg",
    presentacion: "comprimidos",
    contenido: 14,
    precio: 3500,
    tenencia: 10,
};
const betametasona = {
    nombre: "betametasona",
    dosis: "4 mg",
    presentacion: "ampolla",
    contenido: 1,
    precio: 8000,
    tenencia: 5,
};
const diclofenac = {
    nombre: "diclofenac",
    dosis: "75 mg",
    presentacion: "comprimidos",
    contenido: 30,
    precio: 6000,
    tenencia: 0,
};
const ibuprofeno = {
    nombre: "ibuprofeno",
    dosis: "600 mg",
    presentacion: "capsulas blandas",
    contenido: 30,
    precio: 5000,
    tenencia: 10,
};

const drogas = [amoxicilina, betametasona, diclofenac, ibuprofeno];

function venta() {
    let opcion1 = prompt("Nombre de droga:\namoxicilina\nbetametasona\ndiclofenac\nibuprofeno");
    let aux = Number(0);
    for (let i = 0; i < drogas.length; i+=1) {
        if (opcion1 === drogas[i].nombre) {
            aux += 1;
            let cant1 = prompt("Cantidad de cajas:");
            if (cant1 <= drogas[i].tenencia) {
                drogas[i].tenencia = drogas[i].tenencia - cant1;
                alert("Producto dispensado adecuadamente.\nSon: $" + cant1 * drogas[i].precio);
            }
            else {
                alert("Cantidad insuficiente");
            }
        }
    }
    if (aux === 0) {
        alert("Producto no encontrado.");
    }    
}

function stock() {
    let opcion2 = prompt("Nombre de droga:\namoxicilina\nbetametasona\ndiclofenac\nibuprofeno)");
    let aux = Number(0);
    for (let i = 0; i < drogas.length; i += 1) {
        while (opcion2 == drogas[i].nombre) {
            aux += 1;
            if (drogas[i].tenencia > 0) {
                alert("Se disponen " + drogas[i].tenencia + " cajas.");
            }
            else {
                alert("Stock insuficiente para el producto seleccionado.");
            }
            i += drogas.length;
        }
    }
    if (aux === 0) {
        alert("Producto no encontrado.");
    }
}

function carga() {
    let opcion3 = prompt("Qué desea agregar?\n1- Agregar unidades a una droga existente.\n2- Agregar una nueva droga.");
    switch(opcion3) {
        case "1":
            let agrega = prompt("Ingrese el producto a agregar:");
            for (let i=0; i < drogas.length; i += 1) {
                if (agrega == drogas[i].nombre) {
                    let cant3 = Number(prompt("Ingrese la cantidad de cajas a agregar al stock:"));
                    drogas[i].tenencia = drogas[i].tenencia + cant3;
                    alert("Producto agregado satisfactoriamente.");
                 }
            }
            break;
        case "2":
            console.log(drogas.length);
            console.log(drogas[drogas.length-2]);
            drogas.push(prompt("Ingrese el nombre de la droga"));
            drogas[drogas.length-1] = {
                nombre: prompt("Ingrese nombre de droga:"),
                dosis: prompt("Ingrese dosis:"),
                presentacion: prompt("Ingrese presentacion:"),
                contenido: prompt("Ingrese contenido:"),
                precio: prompt("Ingrese precio:"),
                tenencia: prompt("Ingrese stock:")
            };
            break;
    }
}

function adios() {
    alert("Adios!");
}

let menuInicio = 1;
    do {
    menuInicio = prompt("Seleccione la opción correcta:\n1- Crear usuario\n2- Iniciar sesion\n3- Salir");
    switch (menuInicio) {        
        case "1":
            usuario.user = prompt("Ingrese el nombre de usuario");
            usuario.password = prompt("Ingrese la contraseña");
            alert("Usuario creado exitosamente!");
            break;
        case "2":
            logueo.user = prompt("Usuario:");
            logueo.password = prompt("Contraseña:");
            if (logueo.user == usuario.user && logueo.password == usuario.password) {
                alert("Bienvenido " + logueo.user);
                let menuOpciones = 1;
                do {
                    menuOpciones = (prompt("Ingrese una opción:\n1- Venta de medicamento.\n2- Consulta de stock.\n3- Carga de medicamentos.\n4- Salir."));
                    switch (menuOpciones) {
                        case "1":
                            venta();
                            break;
                        case "2":
                            stock();
                            break;
                        case "3":
                            carga();
                            break;
                        case "4":
                            adios();
                            menuOpciones = "999";
                            menuInicio = "999";
                            break;
                        case null:
                            adios();
                            menuOpciones = "999";
                            menuInicio = "999";
                            break;
                        default:
                            alert("Opcion no valida!");
                            break;
                    }
                } while (menuOpciones != "999");
            }
            else {
                alert("Error en el inicio de sesion.");
            }
            break;
        case "3":
            adios();
            menuInicio = "999";
            break;
        case null:
            adios();
            menuInicio = "999";
            break;
        default:
            alert("Opcion no valida!");
            break;
    } 
} while (menuInicio != "999");