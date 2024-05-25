const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

//function crear tarjetas
function creaTarjeta(padre, arr) {
  let nuevaTarjeta = document.createElement('div')
  nuevaTarjeta.className = "card col-3 mb-5"
  nuevaTarjeta.id = `${arr._id}`
  nuevaTarjeta.style.width = "18rem";

  nuevaTarjeta.innerHTML = `<img src="${arr.image}" class="card-img-top imagenH " alt="${arr.name}">
    <div class="card-body">
        <h5 class="card-title">${arr.name}</h5>
        <p class="card-text"><small class="text-body-secondary">${arr.date}</small></p>
        <p class="card-text">${arr.description}</p>
        
        
    </div>
    <div class="card-footer d-flex justify-content-between">
        <h5 class="p-2">$ ${arr.price}</h5>
        <a href="#" onclick="obtenerElementoUrl('${arr._id}')" class="btn btn-secondary btn-lg">Details</a>
    </div>`
  padre.appendChild(nuevaTarjeta);
}


// fuction crear tarjetas futuras
let divPadre = document.getElementById("padreTarjeta")
let array = data.events
recorrerArray(array, divPadre)
function recorrerArray(array1, divPadre) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i].date < data.currentDate) {
      creaTarjeta(divPadre, array1[i])
    }
  }
}


// fujncion crear checkbox 

let divCheck = document.getElementById("divCheck")

function crearCheck(div, array) {
  let input = document.createElement("input")
  input.type = "checkbox"
  input.name = array.category
  input.id = array._id
  input.classList.add("me-1")

  let label = document.createElement("label")
  label.htmlFor = array._id
  label.classList.add("me-4")
  label.textContent = array.category

  div.appendChild(input)
  div.appendChild(label)
}

// crear el array de eventos pasados

let arrayPast = []
array.forEach( (e, i) =>{
  if(e.date < data.currentDate){
    arrayPast.push(e)
  }
})


// recorre el array en past event solo eventos pasados y hace la funcion crearcheck solo para eventos pasados

for (let i = 0; i < arrayPast.length; i++) {
  crearCheck(divCheck, arrayPast[i])
}






//barra de busqueda
let buscarl = document.getElementById("search")

buscarl.addEventListener("keyup", (e)=>{

  let arrayBusqueda = arrayPast.filter( letra => letra.name.toLowerCase().includes(e.target.value.toLowerCase())|| letra.description.toLowerCase().includes(e.target.value.toLowerCase()) )
  if (arrayBusqueda.length === 0) {
    padreTarjeta.innerHTML = "<h2 class='text-center'>Error en la busqueda, escriba nuevamente sus parametros</h2>"
  }else{
    padreTarjeta.innerHTML = ""
    arrayBusqueda.forEach((ele) => creaTarjeta(padreTarjeta, ele))
  }

})




//barra check true

divCheck.addEventListener("change", (ele)=>{
   
  let categoriasAA =[]
  let check = document.querySelectorAll("input[type=checkbox]:checked")
  
  check.forEach((checkbox) => {
    let elemento = arrayPast.find((e) => e._id === checkbox.id);
    if (elemento && elemento.category) {
      categoriasAA.push(elemento.category)
    }
  })

  // imprime tarjetas guaradads en el array de categorias
  padreTarjeta.innerHTML = ""
    categoriasAA.forEach( categoria => {
    //verifica si la categoria la tiene otro elemnto de  array categorias
      for (let i = 0; i < arrayPast.length; i++) {
        if(arrayPast[i].category === categoria){
          creaTarjeta(padreTarjeta, arrayPast[i])
        }
      
      }
    })

    //si no hay nodos 
   if(check.length == 0){

      arrayPast.forEach( tarjeta => {
      creaTarjeta(padreTarjeta, tarjeta)
    })
  }
  
})

//ir a la pagina details con el id

let urlDetails = new URL("http://127.0.0.1:5500/details.html")


function obtenerElementoUrl(id) {
  let ancor = document.getElementById(id)
  ancor.href =  urlDetails + "?value="+id
  window.location.href = ancor.href
}
