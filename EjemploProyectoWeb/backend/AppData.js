usuarios = [
    {
        idUsuario: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        nombre: 'jose',
        contrasenia: '123',
        tipoUsuario: 'PACIENTE'
    },
    {
        idUsuario: 'b953a531-296e-415b-986a-6a5c80ac3353',
        nombre: 'monica',
        contrasenia: '123',
        tipoUsuario: 'ENFERMERA'
    }
]

citas = [
    {
        idCita: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        fecha: "10/10/2023",
        Hora: '12 am',
        motivo: 'Dolor de muelas',
        estado: 'PENDIENTE',
        idUsuario: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    }
]

carritos = [
    {
        idCarrito: '2574c9d2-4d75-480f-89d6-f255769db2cf',
        fecha: '11/10/2023',
        registrado: false,
        idUsuario: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    }
]

medicinas = [
    {
        idMedicina: '651cd53a-96e3-4cfe-bf75-d1c6fb1dc75d',
        nombre: 'Panadol',
        descripcion: 'Descripción del Panadol',
        precio: 10,
        cantDisponible: 2
    },
    {
        idMedicina: '05acbddb-e9c4-4718-8be5-a768e28ff31f',
        nombre: 'Omeprazol',
        descripcion: 'Descripción del Omeprazol',
        precio: 15,
        cantDisponible: 4
    }
]

medicinasCarrito = [
    {
        idMedicinaCarrito: '29f6314c-6d43-41dd-bdc6-dac8b2078317',
        cantidad: 1,
        idMedicina: '651cd53a-96e3-4cfe-bf75-d1c6fb1dc75d',
        idCarrito: '2574c9d2-4d75-480f-89d6-f255769db2cf'
    }
]

module.exports = {
    usuarios,
    citas,
    carritos,
    medicinas,
    medicinasCarrito
}