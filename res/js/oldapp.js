function validateForm() {
       let firstName = document.forms["loginForm"]["firstName"].value;
       let lastName = document.forms["loginForm"]["lastName"].value;
       let phone = document.forms["loginForm"]["phone"].value;
       let address = document.forms["loginForm"]["address"].value;
       let city = document.forms["loginForm"]["city"].value;
       let country = document.forms["loginForm"]["country"].value;
       let alphabets =  /^[A-Za-z ]+$/;
    
       if (firstName == "" || firstName == null ) {
          document.getElementById("nameError").innerHTML = "*required";
          return false;
       }else if (lastName == "" || lastName == null) {
          document.getElementById("LastnameError").innerHTML = "*required";
          return false;   
       }else if (!(firstName.match(alphabets)) ) {
          document.getElementById("nameError").innerHTML = "sorry only alphabets are allowed in name field";
          return false;
       }else if (!(lastName.match(alphabets))) {
          document.getElementById("LastnameError").innerHTML = "sorry only alphabets are allowed in name field";
          return false;
       }else if(firstName.length < 5 ){
          document.getElementById("nameError").innerHTML = "Name must be 5 characters and above";
          return false;
       }else if (lastName.length < 5) {
          document.getElementById("LastnameError").innerHTML = "Name must be 5 characters and above";   
       }else if (phone == "" || phone == null) {
          document.getElementById("phoneError").innerHTML = "*required";
          return false;
       }else if (isNaN(phone)) {
          document.getElementById("phoneError").innerHTML = "Please enter a valid number";
          return false;
       }else if (address == "" || address == null) {
          document.getElementById("addressError").innerHTML = "*required";
          return false;
       }else if(address < 8 ){
          document.getElementById("addressError").innerHTML = "address must be 8 characters and above";
          return false;
       }else if (city == "" || city == null) {
          document.getElementById("cityError").innerHTML = "*required";
          return false;
       }else if(city < 3 ){
          document.getElementById("cityError").innerHTML = "city must be 3 characters and above";
          return false;
       }else if (country == "" || city == null) {
          document.getElementById("cityError").innerHTML = "*required";
          return false;
       }else if(country < 3 ){
          document.getElementById("cityError").innerHTML = "country must be 8 characters and above";
          return false;
          
       }
       else{
          setTimeout(function(){
             window.location="index.html";
          },1000)
          alert("Registration Successful...")
       }
    }
    
    function validateContact() {
       let firstName = document.forms["contactForm"]["firstName"].value;
       let lastName = document.forms["contactForm"]["lastName"].value;
       let email = document.forms["contactForm"]["email"].value;
       let alphabets =  /^[A-Za-z ]+$/;
    
       if (firstName == "" || firstName == null ) {
          document.getElementById("error").innerHTML = "*required";
          return false;
       }else if (lastName == "" || lastName == null) {
          document.getElementById("lastError").innerHTML = "*required";
          return false;   
       }else if (!(firstName.match(alphabets)) ) {
          document.getElementById("error").innerHTML = "sorry only alphabets are allowed in name field";
          return false;
       }else if (!(lastName.match(alphabets))) {
          document.getElementById("lastError").innerHTML = "sorry only alphabets are allowed in name field";
          return false;
       }else if(firstName.length < 5 ){
          document.getElementById("error").innerHTML = "Name must be 5 characters and above";
          return false;
       }else if (lastName.length < 5) {
          document.getElementById("lastError").innerHTML = "Name must be 5 characters and above";   
       }else if (email == "" || email == null) {
          document.getElementById("emailError").innerHTML = "*required";
          return false   
       }
       else{
          setTimeout(function(){
             window.location="index.html";
          },1000)
          alert("We will Contact You Soon")
       }
    }
    
    cart = () => {
    
       let currentCart = parseInt(document.getElementById('cart').innerHTML);
       currentCart = currentCart+1
       document.getElementById('cart').innerHTML = currentCart;
    
    }
    
    // Getting the price of products //
    let price = document.querySelectorAll('#price')
       
    let productOnePrice = parseInt(price[0].innerText);
    let productTwoPrice = parseInt(price[1].innerText)
    let productThreePrice = parseInt(price[2].innerText)
    let productFourPrice = parseInt(price[3].innerText)
    let productFivePrice = parseInt(price[4].innerText)
    let productSixPrice = parseInt(price[5].innerText)
    let productSevenPrice = parseInt(price[6].innerText)
    let productEarthPrice = parseInt(price[7].innerText)
    
    // getting items //
    
    let items = document.querySelectorAll('#item');
    let itemOne = items[0].textContent;
    let itemTwo = items[1].textContent;
    let itemThree = items[2].textContent;
    let itemFour = items[3].textContent;
    let itemFive = items[4].textContent;
    let itemSix = items[5].textContent;
    let itemSeven = items[6].textContent;
    let itemEarth = items[7].textContent;
    
    
    
    let data = {
      data:{
         id: "ab1"
         productName : itemOne,
         productPrice : productOnePrice,
      },
      data:{
       productName : itemTwo,
       productPrice : productTwoPrice
      }
    }
    
    let AllItems = [] ;
    
    
    function sample(id) {
       
       id = "ab1";
       let currentCart = parseInt(document.querySelectorAll('cart').innerHTML);
       currentCart = currentCart+1
       document.getElementById('cart').innerHTML = currentCart;
    
       if (id == productIds.abi) {
          AllItems.push(productIds.id1)
          console.log(AllItems)
       }else {
          console.error(404);
       }
    
     
    }