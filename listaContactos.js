//crear una lista de contactos con datos predefinidos
let contactos = ["Juan Perez","Maria Garcia","Pedro Gomez"];
//funcion para añadir nuevo contacto
function agregarContacto(contacto) {
    contactos.unshift(contactos);   
  }

  //funcion para borrar un contacto de la lista

function borrar(contacto) {
    contactos = contactos.filter(persona => persona !== contacto);
  }

//funcion para imprimir contactos en consola
/*function imprimirContactos(Contactos) {
    contacto.forEach(contactos => console.log(contactos));
}*/
function imprimir() {
    console.log("contactos:");
    contactos.forEach(function (contacto) {
      console.log(contacto);
    });
  }

imprimir();
borrar("Pedro Gomez")
imprimir();