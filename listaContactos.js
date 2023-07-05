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
    dirección: "calle 123 # 45a-67"
  },
  {
    id: 2,
    nombres: "Jefferson",
    apellidos: "Castro",
    teléfono: "987456",
    ubicaciones: "Colombia",
    ciudad: "Barranquilla",
    dirección: "Carrera 123 # 4a-56"
    },
    {
        id: 3,
        nombres: "Carlos",
        apellidos: "Lopez",
        teléfono: "321 456",
        ubicaciones: "Colombia",
        ciudad: "Turbo(Antioquia)",
        dirección: "Calle 123 #b4-567"
    }
];

function printContacts() {
    console.log("Lista de contactos:");
    contactList.forEach(function (contact, index) {
        console.log((index + 1) + ". " + contact.nombres + " " + contact.apellidos);
        console.log("  Teléfono: " + contact.teléfono);
        console.log("  Ubicación: " + contact.ubicaciones);
        console.log("  Ciudad: " + contact.ciudad);
        console.log("  Dirección: " + contact.dirección);
        console.log("------------------------");
    });
}
function addContact(newContact) {
    
    let highestId = 0;
    contactList.forEach(function (contact) {
        if (contact.id > highestId) {
            highestId = contact.id;
        }
    });
    newContact.id = highestId + 1;
    contactList.push(newContact);
}

// Función para borrar un contacto 
function deleteContact(id) {
  contactList = contactList.filter(function(contact) {
    return contact.id !== id;
  });
}

//Bonus

function updateContact(id, newData) {
  let index = -1;
  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].id === id) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    let contact = contactList[index];
    contact.nombres = newData.nombres || contact.nombres;
    contact.apellidos = newData.apellidos || contact.apellidos;
    contact.teléfono = newData.teléfono || contact.teléfono;
    contact.ubicaciones = newData.ubicaciones || contact.ubicaciones;
    contact.ciudad = newData.ciudad || contact.ciudad;
    contact.dirección = newData.dirección || contact.dirección;
    console.log("Contacto actualizado ");
  } else {
    console.log("El contacto no existe en la lista");
  }
}
const newData = {
  nombres: "Shopper",
  apellidos: "Nuevo Apellido",
  teléfono: "Nuevo Teléfono",
  ubicaciones: "Nueva Ubicación",
  ciudad: "Nueva Ciudad",
  dirección: "Nueva Dirección"
};
updateContact(2, newData);




console.log(printContacts())

/*console.log(deleteContact(2));
console.log(printContacts())
console.log(updateContact);*/

