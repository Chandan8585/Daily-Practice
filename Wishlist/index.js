import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const inputData = document.querySelector(".input");
const AddBtn = document.querySelector(".add-btn");
// const wishlistContainer = document.querySelector(".wishlist-container");

let wishlistItem="";
let wishlist = [];
AddBtn.addEventListener("click", (e)=>{
   e.preventDefault();
   wishlistItem = inputData.value ; 
   if(wishlistItem.length > 0){
    wishlist.push({
        id: uuidv4(),
        wishlistItem,
        isChecked: false
    })
   }
//    renderWishlist(wishlist);
})


// const renderWishlist = (wishlist)=>{
//     wishlistContainer.innerHTML = wishlist.map(({
//         wishlistItem,
//         id,
//         isChecked,
//     })=> 
//   {  return(
//     `<div class="wishlist-item" key=${id}>
//     <input type="checkbox" value=${isChecked} }>
//         <h1>${wishlistItem}</h1>
//     <span class="material-icons">
//         delete
//         </span>
// </div>`)

        
// }
//  )
// }
console.log("wishlist",wishlist);

