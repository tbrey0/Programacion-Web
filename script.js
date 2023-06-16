let products = {
    data: [
      {
        productName: "Toyota SW4",
        category: "Camionetas",
        price: "62000",
        image: "toyota-sw4.jpg",
      },
      {
        productName: "Volkswagen Tiguan",
        category: "Camionetas",
        price: "42000",
        image: "vw-tiguan.jpg",
      },
      {
        productName: "Volkswagen Polo",
        category: "Compactos",
        price: "19000",
        image: "vw-polo.jpg",
      },
      {
        productName: "Porsche 911 GT3",
        category: "Deportivos",
        price: "650000",
        image: "porsche-GT3.jpg",
      },
      {
        productName: "Peugeot 208",
        category: "Compactos",
        price: "19500",
        image: "peugeot-208.jpg",
      },
      {
        productName: "Ducati Panigale V4",
        category: "Motos",
        price: "59000",
        image: "ducati-panigale.png",
      },
      {
        productName: "Ferrari SF90",
        category: "Deportivos",
        price: "840000",
        image: "ferrari-sf90.jpg",
      },
      {
        productName: "MV Agusta Brutale",
        category: "Motos",
        price: "72000",
        image: "mv-agusta-brutale.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Crear Card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //nombre 
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //precio
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //verificar si value es igual al innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //seleccionar todas las cards
    let elements = document.querySelectorAll(".card");
    //recorrer todas las cards
    elements.forEach((element) => {
      //Mostrar todas las publicaciones cuando apretas todos
      if (value == "Todos") {
        element.classList.remove("hide");
      } else {
        //verificar si contiene una categoria
        if (element.classList.contains(value)) {
          //mostrar elemento en base a la categoria
          element.classList.remove("hide");
        } else {
          //esconder otros elementos
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Botón buscar
  document.getElementById("search").addEventListener("click", () => {
    //inicializaciones
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //recorrer todo
    elements.forEach((element, index) => {
      //verificar si el texto incluye el valor de busqueda
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //mostrar la card que va
        cards[index].classList.remove("hide");
      } else {
        //esconder otras
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Mostrar todos los productos al principio
  window.onload = () => {
    filterProduct("Todos");
  };