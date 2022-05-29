$(document).ready(function () {
    /* 
        var object = JSON.stringify([
            {
                "id": 1,
                "productName": "3123",
                "image": "2.jpg",
                "price": "223",
                "quantity": "11"
            },
            {
                "id": 2,
                "productName": "ewqeqwe",
                "image": "3.jpg",
                "price": "123",
                "quantity": "123"
            },
            {
                "id": 3,
                "productName": "sdasd",
                "image": "4.jpg",
                "price": "23",
                "quantity": "13"
            },
            {
                "id": 4,
                "productName": "2313213",
                "image": "5.jpg",
                "price": "3123",
                "quantity": "2323"
            }
        ]
        )
        localStorage.setItem("products",object) */
    var products = [];
    var rs = localStorage.getItem('products');
    if (rs != null) {
        products = JSON.parse(rs);
    }

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var newCol = '<div class="col-md-3 col-sm-6 col-xs-12 product">' +
            '<div class="thumbail product-img">' +
            ' <a href="./productdetail.html?productId=' + product.id + '">' +
            '<img src="img/' + product.image + '">' +
            '</a>' +
            '</div>' +
            '<div class="product-text">' +
            '<h6>' + product.productName + '</h6>' +
            '<h4>' + product.price + ' đ </h4>' +
            '<button id="' + product.id + '" class="btn-cart btn btn-outline-primary">Add to cart</button>' +
            '</div>' +
            '</div>'
        console.log($(".productList .container .row"));
        $("#productList").append(newCol)
    }
    var cart = []
    $('.btn-cart').on("click", function (e) {
        cart.push(e.target.id)
        console.log(e.target.id);
        $('#cart').text(cart.length)
        $('#cart').addClass("bg-danger")
    })
});
