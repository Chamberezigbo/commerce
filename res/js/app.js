//  "use script"


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
      return;
   }

   for (const product of allProducts) {
      let tag = document.createElement("p");
      tag.classList.add("border")
      tag.classList.add("border-dark")
      tag.classList.add("py-1")
      let text = document.createTextNode(`
         Product Name:${product.name}, Product Price:${product.price}, Product Quantity: ${product.quantity} 
      `);
      tag.appendChild(text);
      var element = document.getElementById("checkoutItem");
      element.appendChild(tag);


   }

   for (let index = 0; index < allProducts.length; index++) {
      
      totalPrice +=parseInt(allProducts[index].price);
      totalQuantity +=parseInt(allProducts[index].quantity)
      // console.log(totalPrice)
      // console.log(totalQuantity)

      
   }
   document.getElementById('totalPrice').innerHTML = totalPrice ;
   document.getElementById('totalQuantity').innerHTML = totalQuantity;
   divCart.classList.remove('d-none');
   mainBody.classList.replace('mainbody','d-none')

   
   
}

function payment() {
   let error = document.getElementById('error-msg');
   let devCheckoutCart = document.getElementById('cartCheckout')
   let PayStack = document.getElementById('paystack');
   let fullName = document.forms["paymentForm"]["fName"].value;
   let email = document.forms["paymentForm"]["email"].value;
   let address = document.forms["paymentForm"]["address"].value
   let alphabets =  /^[A-Za-z ]+$/;
   let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (fullName.trim() == '' || fullName.search(alphabets) == -1) {
      error.classList.remove('d-none');
      error.innerHTML = 'Please enter a valid name';
   }else if (fullName.split(' ').length < 2){
      error.classList.remove('d-none');
      error.innerHTML = 'Please enter a valid name';
   } else if (email.trim() == '' || email.search(re) == -1) {
      error.classList.remove('d-none');
      error.innerHTML = 'Please enter a valid email';
   } else if (address.trim() == ''){
      error.classList.remove('d-none');
      error.innerHTML = 'Please enter an email';
   }else {
      PayStack.classList.remove('d-none')
      devCheckoutCart.classList.add('d-none');
      document.getElementById('clientName'). innerHTML = fullName;
      document.getElementById('clientEmail'). innerHTML = email;
      document.getElementById('amount'). innerHTML = totalPrice;
     
   }


 
   return false ;
}

// paystack //


var paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', payWithPaystack, false);
function payWithPaystack() {
  let handler = PaystackPop.setup({
    key: 'pk_test_b4ef67ba382c06d51a7f34ccf5108776fc17625c', // Replace with your public key
    email: document.getElementById("clientEmail").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });
  handler.openIframe();
}

   
  
