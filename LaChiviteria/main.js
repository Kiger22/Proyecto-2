// Array de Productos
const PRODUCTS = [
  {
    name: 'Completo',
    price: 3.50,
    stars: 3,
    ingredients: "Lechuga, Tomate, Jamon, Huevo frito",
    Family: 'Chivito',
    image: './assets/chivito2.png'
  },
  {
    name: 'Comun',
    price: 9.50,
    stars: 2,
    ingredients: "",
    Family: 'Chivito',
    image: './assets/chivito.png'
  },
  {
    name: 'X2',
    price: 5.50,
    stars: 5,
    ingredients: "",
    Family: 'Chivito',
    image: './assets/chivitox2.png'
  },
  {
    name: 'Completa',
    price: 8.50,
    stars: 4,
    ingredients: "",
    Family: 'Hamburguesa',
    image: './assets/Hamburguesa.png'
  },
  {
    name: 'Especial',
    price: 2.50,
    stars: 3,
    ingredients: "",
    Family: 'Pancho',
    image: './assets/pancho.png'
  },
  {
    name: 'Margarita',
    price: 11.50,
    stars: 4,
    ingredients: "",
    Family: 'Pizzas',
    image: './assets/pizzeta.png'
  },
  {
    name: 'Completa',
    price: 10.50,
    stars: 4,
    ingredients: "",
    Family: 'Hamburguesa',
    image: './assets/chivito.png'
  },
  {
    name: 'Completa',
    price: 9.50,
    stars: 4,
    ingredients: "",
    Family: 'Hamburguesa',
    image: './assets/chivito.png'
  },
  {
    name: 'Completa',
    price: 7.50,
    stars: 4,
    ingredients: "",
    Family: 'Hamburguesa',
    image: './assets/chivito.png'
  },
  {
    name: 'Completa',
    price: 3.50,
    stars: 4,
    ingredients: "",
    Family: 'Hamburguesa',
    image: './assets/chivito.png'
  },
];

// conjunto de familias de productos
const FAMILIES = [
  'Hamburguesa',
  'Chivito',
  'Pancho',
  'Pizzas'
];

let family = ""
let price = 0


// Seccion de Productos
const products = document.querySelector(".products");

const printProduct = (Products) => {

  for (const Product of Products) {

    /* const products = document.querySelector(".products"); */
    const divProduct = document.createElement("div");

    const divImgProduct = document.createElement("div");
    const imgProduct = document.createElement("img");

    const divInfoProduct = document.createElement("div");
    const nameProduct = document.createElement("h2");
    const ingredientsProduct = document.createElement("p");
    const priceProduct = document.createElement("h3");
    const divStarsProduct = document.createElement("div");
    const cestaImg = document.createElement("img");
    const cestaImg2 = document.createElement("img");

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("div");
      star.className = "Star";

      if (Product.stars >= i) {
        star.classList.add("Rellena");
      }

      divStarsProduct.append(star);

    }

    imgProduct.src = Product.image;
    nameProduct.textContent = Product.name;
    ingredientsProduct.textContent = Product.ingredients;
    priceProduct.textContent = `${Product.price} €`;
    cestaImg.src = "./assets/bolsa-de-la-compra.png"
    cestaImg2.src = "./assets/bolsa-de-la-compra-II.png"


    divImgProduct.append(imgProduct);

    divInfoProduct.append(nameProduct);
    divInfoProduct.append(ingredientsProduct);
    divInfoProduct.append(priceProduct);

    divProduct.append(divImgProduct);
    divProduct.append(divInfoProduct);
    divProduct.append(divStarsProduct);
    divProduct.append(cestaImg);
    divProduct.append(cestaImg2);
    products.append(divProduct);

    divProduct.className = "cardProduct";
    imgProduct.className = "Image";
    nameProduct.className = "Name";
    priceProduct.className = "Price";
    cestaImg.className = "cestaCompra"
    cestaImg2.className = "cestaCompraOk"

    ingredientsProduct.className = "Ingredients";
    divStarsProduct.classList.add("Stars");
    divStarsProduct.classList.add("flex-container");

  }
}
printProduct(PRODUCTS);



//Filtro por familia de productos
const createFilterFamily = () => {

  const aside = document.querySelector(".Services")

  const selectFamily = document.querySelector(".select");
  selectFamily.id = "familyService"

  const Option = document.createElement('option');
  Option.disabled = true;
  Option.value = '';
  Option.defaultSelected = true;
  Option.textContent = "Elije que comer"
  selectFamily.appendChild(Option);

  for (const family of FAMILIES) {
    const option = document.createElement('option');
    option.textContent = family;
    option.className = 'family';
    option.value = family;
    selectFamily.append(option);
  }

  selectFamily.addEventListener("change", (e) => {
    family = e.target.value;
    filterProduct(family);
  });

}
createFilterFamily();

const filterProduct = (selectedFamily) => {

  const FILTERED = [];

  for (const product of PRODUCTS) {

    if (product.Family === selectedFamily) {
      FILTERED.push(product);
    }
  }
  products.innerHTML = "";
  printProduct(FILTERED);
}


//Filtro por Precio
const createFilterPrice = () => {

  const aside = document.querySelector(".Services")

  const selectPrice = document.querySelector(".select");

  const labelPrice = document.createElement("label");
  labelPrice.className = "labelPrice";
  labelPrice.classList.add("flex-container");

  const inputPrice = document.createElement("input");
  inputPrice.id = "inputPrice";
  inputPrice.type = "number";
  inputPrice.className = "inputPrice";
  inputPrice.placeholder = "Busca por precio";
  inputPrice.step = 2;
  inputPrice.min = 0;
  inputPrice.max = 20;
  labelPrice.append(inputPrice);

  const buttonPrice = document.createElement("button");
  buttonPrice.id = "buttonPrice";
  buttonPrice.className = "inButton";
  buttonPrice.textContent = "Buscar";
  buttonPrice.type = "button";
  labelPrice.append(buttonPrice);

  aside.insertBefore(labelPrice, selectPrice);
}
createFilterPrice();

const selectByPrice = (PRODUCTS, maxPrice) => {
  const filterProducts = PRODUCTS.filter(product => product.price <= maxPrice);

  products.innerHTML = "";
  printProduct(filterProducts);
};

const filterByPrice = document.querySelector("#buttonPrice");

filterByPrice.addEventListener('click', () => {
  const priceFilter = document.querySelector(".inputPrice");
  const maxPrice = priceFilter.value;

  selectByPrice(PRODUCTS, maxPrice);
});



// Limpiar el filtrado
const createCleanButton = () => {

  const aside = document.querySelector(".Services");
  const cleanFilter = document.querySelector(".select");

  const buttonClean = document.createElement("button");
  buttonClean.id = "buttonClean";
  buttonClean.className = "cleanButton";
  buttonClean.textContent = "Limpiar busqueda";
  buttonClean.type = "button";

  aside.insertBefore(buttonClean, cleanFilter);
}
createCleanButton();

const filterClean = document.querySelector(".cleanButton");

filterClean.addEventListener('click', () => {
  products.innerHTML = "";
  printProduct(PRODUCTS);
});




