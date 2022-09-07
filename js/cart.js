let productList = document.getElementsByClassName('price')
let addCartBtn = document.getElementsByClassName('add-cart-btn')



for (let i = 0; i < addCartBtn.length; i++) {

    addCartBtn[i].addEventListener('click', function () { 
       
        let price = document.getElementsByClassName('price-amount')[i].innerHTML
        let price_header = document.getElementsByClassName('price-header')[i].innerHTML
        // document.getElementsByClassName('price-amount')[i].innerHTML = "You added me to cart"
        console.log(price_header, price)

        
})

}


