//Funciones

//Función para ingresar a la cuenta
function ingresarUsuario () {
    alert("Ingrese a su cuenta para obtener beneficios ")
    usuario = prompt("Usuario:")
    contraseña = prompt("Ingrese su contraseña:") 
    if ((usuario === "Cosme" || usuario === "cosme") && (contraseña === "Fulanito" || contraseña === "fulanito")) {
        alert("¡¡Bienvenido nuevamente Sr. Fulanito!!")
        verHabitacion ()
    } else {
        alert("Lea el archivo Readme")
    }
}

//Función para ver habitaciones
function verHabitacion (){
    room = prompt(`Seleccione tipo de habitación:
1: Suite
2: Superior
3: Standard`); 
    switch (room) {
        case "1":
            alert("Ha seleccionado Suite. Su valor es de $" + suite + " más impuestos");
            break;
        case "2":
            alert("Ha seleccionado Superior. Su valor es de $" + superior + " más impuestos");
            break;
        case "3":
            alert("Ha seleccionado Standard. Su valor es de $" + standard + "  más impuestos");
            break;
        default:
            let elegir = prompt("¿Le gustaría ver de nuevo los tipos de habitaciones?");
            if (elegir == "si") {
                verHabitacion()
            }
            break;
    }    programa()
}

//Función para reservar habitaciones
function reservarHabitacion () {
    let reservar = prompt("Seleccine tipo de habitación: \n 1: Suite \n 2: Superior \n 3: Standard")
    if (reservar === "1") {
        alert("El monto final con descuento de la habitación Suite por el programa de fidelización es: $" + suite * 0.85 + " más impuestos")
    } else if (reservar === "2") {
        alert("El monto final con descuento de la habitación Superior por el programa de fidelización es: $" + superior * 0.85 + " más impuestos")
    } else if (reservar === "3") {
        alert("El monto final con descuento de la habitación Standard por el programa de fidelización es: $" + standard * 0.85 +  " más impuestos")
}
}

function programa (){
    do {
        let opcion = prompt("Para realizar una reserva presione: 1 \nPara ver las habitaciones nuevamente presione: 2 \nPara salir presione: 3")
        if (opcion === "1") {
                reservarHabitacion()
        } else if (opcion === "2")
                verHabitacion()
    } while (opcion != "3")
}
 // Variables
let room
let suite = 35000
let superior = 27000
let standard = 20000

// Programa
ingresarUsuario();
