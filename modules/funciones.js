

// recorrer array y pintar las tarjetas

export function recorrerArray(arreglo, padreDiv) {
    for (let i = 0; i < arreglo.length; i++) {
        creaTarjeta(padreDiv, arreglo[i])
    }
}


// crear tarjetas
function creaTarjeta(padre, arr) {
    let nuevaTarjeta = document.createElement('div')
    nuevaTarjeta.className = "card col-3 mb-5"
    nuevaTarjeta.id = `${arr._id}`
    nuevaTarjeta.style.width = "18rem";
    nuevaTarjeta.innerHTML = `<img src="${arr.image}" class="card-img-top imagenH"  alt="${arr.name}">
      <div class="card-body">
          <h5 class="card-title">${arr.name}</h5>
          <p class="card-text"><small class="text-body-secondary">${arr.date}</small></p>
          <p class="card-text">${arr.description}</p>
          
          
      </div>
      <div class="card-footer d-flex justify-content-between">
          <h5 class="p-2">$ ${arr.price}</h5>
          <a href="./details.html?value=${arr._id}" class="btn btn-secondary lol btn-lg">Details</a>
      </div>`
    padre.appendChild(nuevaTarjeta);
}


// crear checkbox
export function crearCheckbox(divCheck, objt) {

    let input = document.createElement('input')
    input.type = `checkbox`
    input.name = objt.name
    input.classList.add("me-1", "checksHome")
    input.id = objt._id

    let label = document.createElement('label')
    label.htmlFor = objt._id
    label.className = "me-4"
    label.textContent = objt.category
    divCheck.appendChild(input);
    divCheck.appendChild(label)
}



//filtrar el texto y los checked

export function filtrarTarjetas(array, buscar) {
  
    let textoBusqueda = buscar.value.toLowerCase()
    let categoriasAA = arrayCheck(array)
  
    let tarjetasFiltradas = array.filter(tarjeta => {
      let cumpleBusqueda = tarjeta.name.toLowerCase().includes(textoBusqueda) || tarjeta.description.toLowerCase().includes(textoBusqueda)
      let cumpleCategoria = categoriasAA.length === 0 || categoriasAA.includes(tarjeta.category)
      return cumpleBusqueda && cumpleCategoria
    });
  
    if (tarjetasFiltradas.length === 0) {
      padreTarjeta.innerHTML = "<h2 class='text-center'>Error en la busqueda, escriba nuevamente sus parametros</h2>"
    } else {
      padreTarjeta.innerHTML = ""
      tarjetasFiltradas.forEach((tarjeta) => creaTarjeta(padreTarjeta, tarjeta))
    }
  }

  

// filtadro de las tarjetas por categoria si dos tarjetas tienen la misma categoria 

function arrayCheck(array) {
    let categoriasAA = []
    let check = document.querySelectorAll("input[type=checkbox]:checked")

    check.forEach((checkbox) => {
      let elemento = array.find((e) => e._id == checkbox.id)

      if (elemento && elemento.category) {
        categoriasAA.push(elemento.category)
      }
    });
    return categoriasAA
  }

