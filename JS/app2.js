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
1: Standard
2: Triple
3: Superior
4: Suite`); 
    switch (room) {
        case "1":
            alert("Ha seleccionado Standard. Su valor es de $" + standard + "  más impuestos");
            break;
        case "2":
            alert("Ha seleccionado Triple. Su valor es de $" + triple + "  más impuestos");
            break;
        case "3":
            alert("Ha seleccionado Superior. Su valor es de $" + superior + " más impuestos");
            break;
        case "4":
            alert("Ha seleccionado Suite. Su valor es de $" + suite + " más impuestos");
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
function reservarHabitacion() {
    let tipo = prompt(`¿Qué tipo de habitación le gustaría reservar? 
    \n Standard: $20000
    \n Triple: $25000
    \n Superior: $27000
    \n Suite: $35000`);
    let precio = parseInt(prompt("Ingrese el precio"));
    const nuevaHabitacion = new Habitaciones(tipo,precio);
    carritoCompras.push(nuevaHabitacion);
    alert("Su selección se ha añadido");
    programa()
}

//Función para ver reservas
function verReservas() {
    carritoCompras.forEach((element)=>{
        alert(`El monto final con descuento de la habitación ${element.tipo} por el programa de fidelización es: $${element.precio * 0.85} + impuestos`)
    })
    programa()
}

//Función para elegir tipo de filtrado
function tipoFiltrado (){
    let elegirFiltrado = prompt("Para filtrar por cantidad máxima de personas presione: 1 \nPara filtrar por precio más bajo precio: 2")
    if (elegirFiltrado === "1") {
        filtradoPersonas()
    } if (elegirFiltrado === "2") {
        filtradoPrecio()
    }
    programa()
}

//Función de filtrado por cantidad de personas por habitación
function filtradoPersonas() {
    const personas = habitación.filter ((hab) => hab.cantidad > 2);
    for(const persona of personas){
        alert(`La habitación Triple permite hasta ${persona.cantidad} personas`)
    }
}

//Función de filtrado por precio más bajo
function filtradoPrecio() {
    const valores = habitación.filter ((hab) => hab.precio < 25000);
    for(const valor of valores) {
        alert(`La habitación Standard tiene un precio de $ ${valor.precio} más impuestos`)
    }
}
//Función para ver el monto total de las reservas
function verTotal(){
    const total = carritoCompras.reduce((a,b)=> a + b.precio * 0.85, 0)
    alert(`El monto total a pagar al momento de realizar el check in es $${total} más impuestos`)
    programa()
}

function programa (){
    do {
        let opcion = prompt("Para realizar una reserva presione: 1 \nPara filtrar su búsqueda presione: 2 \nPara ver las habitaciones nuevamente presione: 3 \nPara ver sus reservas presione: 4 \nPara acceder al monto total a pagar presione: 5 \nPara salir presione: 6")
        if (opcion === "1") {
            reservarHabitacion(carritoCompras)
        }if (opcion ==="2") {
            tipoFiltrado()
        }if (opcion === "3"){
            verHabitacion()
        }if (opcion === "4"){
            verReservas()
        }if (opcion === "5"){
            verTotal()
        }            
    } while (opcion != "6")
}
// Variables, Objetos, Arrays
/* let room
let standard = 20000 
let triple = 25000
let superior = 27000 
let suite = 35000 */

class Habitaciones {
    constructor(tipo,precio,cantidad){
        this.tipo = tipo;
        this.precio = precio;
        this.personas = cantidad;
    }
}

/* let habitación = [
    {tipo: "Standard", precio: "20000", cantidad:"2"},
    {tipo: "Triple", precio: "25000", cantidad: "3"},
    {tipo: "Superior", precio: "27000", cantidad: "2"},
    {tipo: "Suite", precio: "35000", cantidad: "2"},
]
 */
let carritoCompras = []

// Programa
/* ingresarUsuario(); */
