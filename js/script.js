let crearUsuario = prompt("Cree su Usuario:")
console.log(crearUsuario)
let crearContraseña = Number(prompt("Cree su Contraseña NUMERICA:"))
console.log(crearContraseña)

let usuario = prompt("Ingrese su Usuario:")
while (usuario != crearUsuario) {
    usuario = prompt("Ingrese su Usuario por favor!!!")
}
alert("Usuario correcto!")

let contraseña = prompt(`Ingrese la Contraseña de ${usuario} :`)
while (contraseña != crearContraseña) {
    contraseña = prompt(`${usuario}, Ingrese su Contraseña por favor!!!`)
}
alert("Contraseña correcta!!")
alert(`Bienvenido/a ${usuario}!!!`)

let saldo = 0
function movimiento() {
    if (opcion == "2") {
        alert("Usted seleccionó agregar dinero a su cuenta")
        let agregar = Number(prompt("¿Cuanto desea agregar?:"))
        saldo=agregar+saldo
        alert(`Su saldo es de $${saldo}`)
    } else if (opcion == "3") {
        alert("Usted seleccionó retirar dinero a su cuenta")
        let retirar = Number(prompt("¿Cuanto desea retirar?:"))
        if (saldo == 0 || retirar >= saldo) {
            alert(`Monto no disponible, su saldo es de $${saldo}`)
        } else {
            saldo = saldo - retirar
            alert(`Su saldo es de $${saldo}`)
        }
    }
}

let opcion = prompt("Ingrese la opción deseada: 1- Saber su saldo disponible.// 2- Agregar dinero a su cuenta.// 3- Retirar dinero de su cuenta.// Presione 'X' si desea salir")
while (opcion != "X") {
    switch (opcion) {
        case "1":
            alert("Usted seleccionó saber su saldo disponible")
            alert(`Su saldo disponible es $${saldo}`)
            break;
        case "2":
            movimiento()
            break;
        case "3":
            movimiento()
            break;
        default:
            alert(`Usted seleccionó $${opcion} y no se encuentra disponible!`)
            break;
    }
    opcion = prompt("Ingrese por favor la opción deseada: 1- Saber su saldo disponible.// 2- Agregar dinero a su cuenta.// 3- Retirar dinero de su cuenta.// Presione 'X' si desea salir")
}
alert(`¡Muchas gracias por operar con nosotros ${usuario}, vuelva pronto!`)
