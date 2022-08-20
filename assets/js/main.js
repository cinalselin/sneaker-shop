// ============================================ COOKIE FUCNTION ============================================

// request
const modalCookie = document.getElementById("modalCookie");

document.getElementById("acceptCookie").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("du hast geklickt");
  document.cookie = `username=user1; Max-Age=1000000000; path=/`;
  modalCookie.style.display = "none";
  document.getElementById("blurBackground").classList.remove("blur");
});

// if user already visited the site, dont ask for a cookie request

if (document.cookie !== "") {
  modalCookie.style.display = "none";
  document.getElementById("blurBackground").classList.remove("blur");
}

// if user rejects cookies -> do not set any

document.getElementById("rejectCookie").addEventListener("click", (event) => {
  event.preventDefault();
  modalCookie.style.display = "none";
  document.getElementById("blurBackground").classList.remove("blur");
});

// ============================================ NEWSLETTER FUNCTION  ============================================
const formField = document.getElementById("formField");
const formGreeting = document.getElementById("formGreeting");
const formText = document.getElementById("formText");

document.getElementById("emailSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  formField.style.display = "none";
  formGreeting.innerText = "THANK YOU!";
  formText.innerText = "You will get our response shortly.";
});

// ============================================ ARRAY & DOM PROPERTIES  ============================================

const data = [
  {
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Air",
    brand: "Nike",
    price: "120.00 $",
    sizes: ["37", "38", "39"],
  },
  {
    img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Dunk High Pro",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["37", "38", "39", "40", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
    name: "Old Skool",
    brand: "Vans",
    price: "50.00 $",
    sizes: ["37"],
  },
  {
    img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
    name: "Summer Party",
    brand: "Nike",
    price: "100.00 $",
    sizes: ["42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Retro",
    brand: "Adidas",
    price: "149.00 $",
    sizes: ["39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Fancy Doc",
    brand: "Crocs",
    price: "79.00 $",
    sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Classic",
    brand: "Reebok",
    price: "99.00 $",
    sizes: ["43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Jungle",
    brand: "New Balance",
    price: "110.00 $",
    sizes: ["39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Essentials",
    brand: "Errant",
    price: "120.00 $",
    sizes: ["41", "42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Très chic",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
    name: "Plastic Revolution",
    brand: "Adidas",
    price: "180.00 $",
    sizes: ["37", "38", "39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sporty",
    brand: "Asics",
    price: "90.00 $",
    sizes: ["41", "42", "43", "44"],
  },
];

const sneakerItems = document.getElementById("sneaker-items");

data.forEach((item) => {
  // New Dom-Elements
  const divTag = document.createElement("div");
  const divTagNamePlus = document.createElement("div");
  const divTagSizes = document.createElement("div");
  const divTagPrice = document.createElement("div");
  const sneakerImg = document.createElement("img");
  const sneakerName = document.createElement("h4");
  const sneakerPrice = document.createElement("p");
  const sneakerBrand = document.createElement("p");
  const addToCart = document.createElement("p");
  const arrowUp = document.createElement("i");

  // div tag with an img tag & p tags (sneaker details)
  sneakerItems.appendChild(divTag);
  sneakerImg.src = item.img;
  divTag.appendChild(sneakerImg);

  //Sneaker Name as p tag
  sneakerName.innerText = item.name;
  divTag.appendChild(divTagNamePlus);
  divTagNamePlus.setAttribute("id", "sneakerNamePlus");

  divTagNamePlus.appendChild(sneakerName);
  divTagNamePlus.appendChild(addToCart);
  addToCart.innerText = "+";
  addToCart.setAttribute("id", "addToCart");

  //Sneaker Price as p tag
  divTag.appendChild(divTagPrice);
  sneakerPrice.innerText = item.price;
  divTagPrice.appendChild(sneakerPrice);
  divTagPrice.setAttribute("id", "sneakerPrice");

  divTagPrice.appendChild(arrowUp);
  arrowUp.setAttribute("id", "arrowUp");

  arrowUp.innerHTML = `<i class="las la-caret-down"></i>`;

  //Sneaker Brand as p tag
  sneakerBrand.innerText = item.brand;
  divTag.appendChild(sneakerBrand);
  sneakerBrand.setAttribute("class", "accordionNone");

  //Sneaker Sizes as p tag in a new div
  item.sizes.forEach((itemSize) => {
    divTag.appendChild(divTagSizes);
    const sneakerSizes = document.createElement("p");
    sneakerSizes.innerText = itemSize;
    divTagSizes.appendChild(sneakerSizes);
    divTagSizes.setAttribute("id", "sneakerSizes");
  });
});

// ====================== ADD TO SHOPPING CART  ======================
let shoppingCart = 0;
const countItem = document.getElementById("countItem");

document.querySelectorAll("#addToCart").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked");
    shoppingCart++;
    countItem.innerText = shoppingCart;
  });
});

// ====================== ACCORDION  ======================

//TODO doesnt work

const sneakerSizes = document.getElementById("sneakerSizes");

document.querySelectorAll("#arrowUp").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("klick");
    sneakerSizes.style.display = "none";
  });
});
