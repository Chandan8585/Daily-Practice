/*
Assignment 1: Here is a list of items. Add a remove button for every item. 
With every click of the remove button, remove one item from the list.
*/


let products = [
    {
      id: "1",
      item: "Shirt"
    },
    {
      id: "2",
      item: "Jeans"
    },
    {
      id: "3",
      item: "T-shirt"
    },
    {
      id: "4",
      item: "Denim Jacket"
    },
    {
      id: "5",
      item: "Casual Shoes"
    }
   ];

const productContainer = document.getElementById("product-container");

const handleRemoveCard = (_id)=> {
  let index = products.findIndex((product)=> product.id === _id);
  if(index !== -1){
    products.splice(index, 1);
    renderProducts();
  }
 
  
}


renderProducts =() => {
  productContainer.innerHTML ="";
products.forEach((cloth)=> {

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  const productTitle = document.createElement("h3");
  productTitle.innerText = cloth.item;
  
 let removeButton = document.createElement("button");
  removeButton.classList.add("remove-card");
  removeButton.innerText = "Remove Card"



  removeButton.addEventListener("click", ()=> handleRemoveCard(cloth.id));


  productContainer.appendChild(productCard);
  productCard.appendChild(productTitle);
  productCard.appendChild(removeButton);
})
}

renderProducts();
