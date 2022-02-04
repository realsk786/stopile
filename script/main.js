let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)',
        tag : 'oneplusnord2',
        price : 500,
        inCart : 0
    },
    {
        name:'boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch',
        tag : 'boatxtend',
        price : 100,
        inCart : 0
    },
    {
        name:'Samsung Galaxy M12 (Blue,6GB RAM, 128GB Storage)',
        tag : 'samsungm12',
        price : 200,
        inCart : 0
    },
    {
        name:'Apple Watch Series 7 (GPS, 45mm) - Midnight Aluminium Case',
        tag : 'applew7',
        price : 600,
        inCart : 0
    }
]

for (let i=0; i<carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNum(products[i]);
        totalCost(products[i])
        // console.log("added to cart")
    })
}

function onLoadCartNum(){
    let productNum = localStorage.getItem('cartNum');

    if(productNum){
        document.querySelector('.cart span').textContent = productNum;
    }
}

function cartNum(product){
    // console.log("The product clicked is", product);
    let productNum = localStorage.getItem('cartNum');
    // console.log(productNum);
    // console.log(typeof productNum)
    productNum = parseInt(productNum);
    // console.log(typeof productNum)

    if( productNum ){
        localStorage.setItem('cartNum', productNum + 1);
        document.querySelector('.cart span').textContent = productNum + 1;
    } else {
        localStorage.setItem('cartNum', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    // console.log("Inside of set items function");
    // console.log("My product is", product);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // console.log("My cart items are", cartItems);

    if(cartItems != null){
        // console.log(cartItems[product.tag])
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}
function totalCost(product){
    // console.log("Product price is:", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("my cartcost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totatCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    // console.log(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer){
        // console.log("running");
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += `
            <div class="product">
                <i class="far fa-times-circle"></i>
                <img src="../img/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price}.00</div>
            <div class="quantity">
                <i class="fas fa-arrow-circle-up"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-arrow-circle-down"></i>
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}.00
                </h4>
        `;
    }
}

onLoadCartNum();
displayCart();