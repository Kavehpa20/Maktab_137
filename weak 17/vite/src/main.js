import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// function reqListener() {
//   console.log(this);
// }

// const req = new XMLHttpRequest();

// req.addEventListener("load", reqListener);

// req.open("GET", "https://dummyjson.com/products");

// req.send();

const URL = "https://dummyjson.com/products";
const root = document.getElementById("app");

const cardHtmlComponent = (img, desc, title, price) => {
  return `
    <div class="card" style="width: 18rem;">
      <img src=${img} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-text">${title}</h5>
        <p class="card-text">${desc}</p>
        <h4 class="card-text">Price: ${price} $</h4>
      </div>
    </div>
`;
};

// fetch(URL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Something went wrong");
//   })
//   .then((responseJson) => {
//     console.log(responseJson);
//   })
//   .catch((error) => {
//     console.log(error + "🧨🧨🧨🧨🧨🧨");
//   });

const getProductList = async () => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      console.log(data.products);
      const mappedProducts = data.products.map((product) =>
        cardHtmlComponent(
          product.images[0],
          product.description,
          product.title,
          product.price
        )
      );
      console.log(mappedProducts.join(""), "mappedProducts");
      root.innerHTML = mappedProducts.join("");
    } else {
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

getProductList();
