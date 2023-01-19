// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  price.innerText;
  const quantity = product.querySelector(".quantity input").value;
  const priceArrumado = Number(price.innerText);

  product.querySelector(".subtotal span").textContent =
    priceArrumado * quantity;
  return priceArrumado * quantity;
}

function calculateAll() {
  let resultado = 0;

  const produtos = document.querySelectorAll(".product");
  for (let i = 0; i < produtos.length; i++) {
    const calculo = updateSubtotal(produtos[i]);
    resultado += calculo;
  }

  document.querySelector("#total-value").textContent = `Total: $ ${resultado}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  // const btnRemove = document.getElementsByClassName('btn btn-remove')
  // window.addEventListener('click',btnRemove)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
