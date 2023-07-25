function changeimage(i,img){
    if(i==1){
      img.src ="images/p1-2.jpg";
    }
    if(i==12){
      img.src ="images/p1.jpg";
    }
    if(i==2){
      img.src ="images/p2-2.jpg";
    }
    if(i==22){
      img.src ="images/p2.jpg";
    }
    if(i==3){
      img.src ="images/p3-2.webp";
    }
    if(i==32){
      img.src ="images/p3.jpg";
    }
    if(i==4){
      img.src ="images/p4-2.jpg";
    }
    if(i==42){
      img.src ="images/p4.jpg";
    }
    if(i==5){
      img.src ="images/p5-2.jpg";
    }
    if(i==52){
      img.src ="images/p5.jpg";
    }
    if(i==6){
      img.src ="images/p6-2.webp";
    }
    if(i==62){
      img.src ="images/p6.jpg";
    }
  }
  
  let cart = [];
  function showCartModule(productName) {
    let cartModule = document.getElementById("cart-module");
    let cartMessage = document.getElementById("cart-message");
    cartMessage.textContent = `${productName} has been added to the cart.`;
    cartModule.style.display = "block";
    setTimeout(() => {
      cartModule.style.display = "none";
    }, 3000);
  }
  document.addEventListener("DOMContentLoaded", () => {
    let productLinks = document.getElementsByClassName("product-link");
    for (let i = 0; i < productLinks.length; i++) {
      let link = productLinks[i];
      link.addEventListener("click", (event) => {
        event.preventDefault();
        let productName = link.querySelector("h4").textContent;
        if (!cart.includes(productName)) {
          cart.push(productName);
          showCartModule(productName);
        }
      });
    }
  });