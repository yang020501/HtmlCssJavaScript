const loadCart = () => {
    var rs = localStorage.getItem('cart');
    if (rs) {
        return JSON.parse(rs);
    }
    else {
        return null
    }
}
const setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
const loadProductbyId = (id) => {
    var rs = localStorage.getItem('products')
    if (rs) {
        return JSON.parse(rs).filter(item => item.id === id)[0]
    }
}
const count = (cart) => {
    let count = 0;
    cart.map(item => {
        count += item.quantity
    })
    return count
}
const sumPrice = (cart, checklist) => {
    // checklist and cart is the same index 
    let sum = 0;
    cart.map((item, index) => {
        if (checklist[index].checked)
            sum += item.quantity * item.product.price

    })
    return sum
}
const addCart = (cart, id) => {
    let product = loadProductbyId(id)
    let tmp = {
        product: product,
        quantity: 1
    }
    if (cart) {
        var rs = cart.filter(item => {
            return id === item.product.id;
        })
        if (rs.length > 0) {
            cart.map(item => {
                if (item.product.id === id) {
                    item.quantity++;
                }
            })
        }
        else {
            cart.push(tmp)
        }
    }
    else {
        cart = [tmp]
    }
}
// render shopping cart bagdes
const renderHomeShoppingCart = (cart) => {
    if (count(cart) > 0) {
        $('#cart').text(count(cart))
        $('#cart').addClass("bg-danger")
    }
    else {
        $('#cart').text("")
        $('#cart').removeClass("bg-danger")
    }
}
//render products at cart page
const renderCartProducts = (cart) => {
    cart.map((item) => {
        var product = `<div id="product-${item.product.id}" class="p-2 d-flex flex-row align-items-center">
                        <div class="flex-grow p-2">
                            <input id="${item.product.id}" type="checkbox" class="form-check-input checkbox" />
                        </div>
                        <div class="flex-shrink-0 p-2">
                            <img class="img" src="img/${item.product.image}" />
                        </div>
                        <div class="flex-fill  p-2">
                            ${item.product.productName}
                        </div>
                        <div class="p-2">${item.product.price}</div>
                        <div class=" flex-grow d-flex  align-items-center ">
                            <button id="${item.product.id}" class="btn-secondary btn px-1 py-0 btn-minus">
                                <i class="bi bi-dash-lg text-black"></i>
                            </button>
                            <div class="p-2" style="width: 70px;">
                                <input id="${item.product.id}"  type="number" class="quantity-form-control form-control" value="${item.quantity}"/>
                            </div>
                            <button id="${item.product.id}" class="btn-secondary btn px-1 py-0 btn-plus">
                                <i class="bi bi-plus-lg text-black"></i>
                            </button>
                        </div>
                        <div class="p-2">
                            <button  id="${item.product.id}" class="btn btn-secondary btn-cart-delete-product">
                                <i class="bi bi-trash text-black"></i>
                            </button>
                        </div>

                    </div>`

        $('#left-content-product').append(product)
    })
}
// redner products at home page
const renderHomeProducts = (rs) => {
    var products = JSON.parse(rs);
    products.map((item, index) => {
        var product = item;
        var newCol = '<div class="col-md-3 col-sm-6 col-xs-12 product">' +
            '<div class="thumbail product-img">' +
            ' <a href="./productdetail.html?productId=' + (index + 1) + '">' +
            '<img src="img/' + product.image + '">' +
            '</a>' +
            '</div>' +
            '<div class="product-text text-center">' +
            '<h6>' + product.productName + '</h6>' +
            '<h4>' + product.price + ' đ </h4>' +
            '<button id="' + product.id + '"  class="btn-addcart btn btn-outline-primary">Add to cart</button>' +
            '</div>' +
            '</div>'
        $("#productList").append(newCol)
    })
}
$(document).ready(function () {
    //change products list to cart page
    $('#btn-cart').on("click", function () {
        $('#page').load("cart.html")
    })
    // load products at home page
    var rs = localStorage.getItem('products');
    if (rs) {
        renderHomeProducts(rs)
    }
    // load cart
    var cart = loadCart();
    if (cart) {
        renderHomeShoppingCart(cart)
    }
    // add product to cart when click btn add
    $('.btn-addcart').on("click", function (e) {
        addCart(cart, e.target.id)
        setCart(cart)
        renderHomeShoppingCart(cart)
    })
});

