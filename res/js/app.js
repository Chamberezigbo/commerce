 "use script"
// cart = () => {

//    let currentCart = parseInt(document.getElementById('cart').innerHTML);
//    currentCart = currentCart+1
//    document.getElementById('cart').innerHTML = currentCart;

// }

const allProducts = [] ;
const divCart = document.getElementById('checkout');
const mainBody = document.getElementById('mainbody');
let currentCart = parseInt(document.getElementById('cart').innerHTML);
let totalPrice = 0;
let totalQuantity = 0;


function cart(id, name, price) {
   
   currentCart = parseInt(document.getElementById('cart').innerHTML);
   currentCart = currentCart+1
   document.getElementById('cart').innerHTML = currentCart;

      const items = {
            id,
            name,
            price,
            quantity: 1
         }

  
      for (let index = 0; index < allProducts.length; index++) {

         if (allProducts[index].id == items.id) {
            let itemInfo = {
               id :items.id,
               name :items.name, 
               price: allProducts[index].price += price,
               quantity : +allProducts[index].quantity + 1
            };
            allProducts[index] = itemInfo;
            console.log(allProducts);
            return;
         }
         
      }
  
      allProducts.push(items) 
      
   }

   function showCart() {

      if (currentCart == 0) {
         alert('cart is empty please add product to cart thank you')
      }else{

         for (let index = 0; index < allProducts.length; index++) {
            
            
            totalPrice +=parseInt(allProducts[index].price);
            totalQuantity +=parseInt(allProducts[index].quantity)
            // console.log(totalPrice)
            // console.log(totalQuantity)

            
         }
         
         divCart.classList.remove('d-none');
         mainBody.classList.replace('mainbody','d-none')
      }
      
      console.log(totalPrice)
      console.log(totalQuantity)
   }
   
  
