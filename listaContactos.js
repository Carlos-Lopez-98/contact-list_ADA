/* proyect-2
 Crea una lista de contactos con datos predefinidos
*/
let contactList = [
  {
    id: 1,
    nombres: "Leidy",
    apellidos: "Blanco",
    teléfono: "321 456",
    ubicaciones: "Colombia",
    ciudad: "Cartagena",
    dirección: "calle 123# 45-67"
  },
  {
    id: 2,
    nombres: "Jefferson",
    apellidos: "Castro",
    teléfono: "987 456",
    ubicaciones: "Colombia",
    ciudad: "Barranquilla",
    dirección: "Carrera 123 # 45a-67"
  },
  {
    id: 3,
    nombres: "Carlos",
    apellidos: "Lopez",
    teléfono: "321 456",
    ubicaciones: "Colombia",
    ciudad: "Turbo (Antioquia)",
    dirección: "Calle 123 #456-78"
    }
];

function printInformation() {
    console.log("Lista de contactos:");
    contactList.forEach(function (contact, index) {
        console.log((index + 1) + ". " + contact.nombres + " " + contact.apellidos);
        console.log("  Teléfono: " + contact.teléfono);
        console.log("  Ubicación: " + contact.ubicaciones);
        console.log("  Ciudad: " + contact.ciudad);
        console.log("  Dirección: " + contact.dirección);
        console.log("===================");
    });
}
function addContact(newContact) {
    // Continua con el id más alto y asigna el siguiente disponible
    let highestId = 0;
    contactList.forEach(function (contact) {
        if (contact.id > highestId) {
            highestId = contact.id;
        }
    });
    newContact.id = highestId + 1;
    contactList.push(newContact);
}

// Función para borrar un contacto existente de la lista
function deleteContact(id) {
  contactList = contactList.filter(function(contact) {
    return contact.id !== id;
  });
}


let dario = {
    nombres: "Dario",
    apellidos: "none",
    teléfono: "32145",
    ubicaciones: "No registra",
    ciudad: "Desconocida",
    dirección: "No registra"
};


console.log(addContact(dario))
console.log(printInformation())