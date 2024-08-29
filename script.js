let contactos = JSON.parse(localStorage.getItem('contactos')) || []

document
  .getElementById('contactos-form')
  .addEventListener('submit', agregarContacto)

mostrarContactos()

function mostrarContactos() {
  const listaContactos = document.getElementById('lista-contactos')
  listaContactos.innerHTML = ''

  contactos.forEach((contacto, indice) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `
      ${contacto.nombre} ${contacto.telefono}
      <button onclick="eliminarContacto(${indice})">Eliminar</button>
    `
    listaContactos.appendChild(listItem)
  })
}

function agregarContacto(evento) {
  evento.preventDefault()

  const nombre = document.getElementById('nombre').value
  const telefono = document.getElementById('telefono').value

  if (nombre && telefono) {
    const nuevoContacto = { nombre: nombre, telefono: telefono }
    contactos.push(nuevoContacto)
    localStorage.setItem('contactos', JSON.stringify(contactos))

    mostrarContactos()

    document.getElementById('contactos-form').reset()
  }
}

function eliminarContacto(indice) {
  contactos.splice(indice, 1)
  localStorage.setItem('contactos', JSON.stringify(contactos))

  mostrarContactos()
}
