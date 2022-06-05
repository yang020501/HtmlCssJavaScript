
$('document').ready(
    () => {
        cart = loadCart();
        if (cart) {
            renderCartProducts(cart)
        }
        $('.btn-plus').on("click", function (e) {
            var quantityInput = document.getElementsByClassName("quantity-form-control")
            let id = this.id
            cart.map((item, index) => {
                if (id === item.product.id) {
                    item.quantity++
                    quantityInput[index].value = item.quantity
                }
            })
            setCart(cart)
            renderHomeShoppingCart(cart)
        })
        $('.btn-minus').on("click", function (e) {
            var quantityInput = document.getElementsByClassName("quantity-form-control")
            let id = this.id
            cart.map((item, index) => {
                if (id === item.product.id) {
                    item.quantity--
                    quantityInput[index].value = item.quantity
                }
            })
            setCart(cart)
            renderHomeShoppingCart(cart)

        })
        $('.btn-cart-delete-product').on("click", function () {
            let id = this.id
            let product = cart.filter((item) => item.product.id === id)[0]
            cart.splice(cart.indexOf(product), 1)
            setCart(cart)
            $(`#product-${id}`).remove()
            renderHomeShoppingCart(cart)

        })
        $('.checkbox').on("click", function (e) {
            // get all check box to sum pricce 
            var check = document.getElementsByClassName("checkbox")
            $('#sumPrice').text(sumPrice(cart, check) + " VND")

        })

    }
)