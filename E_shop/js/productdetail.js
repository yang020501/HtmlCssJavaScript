$(function () {
    $('.image-link').viewbox({
        setTitle: true,
        margin: 20,
        resizeDuration: 300,
        openDuration: 200,
        closeDuration: 200,
        closeButton: true,
        navButtons: true,
        closeOnSideClick: true,
        nextOnContentClick: true
    });
});
$(document).ready(function () {
    var param = location.search
    var productId = param.substring(param.indexOf("productId=") + 10)
    var rs = localStorage.getItem("products")
    var products = []
    if (rs) {
        products = JSON.parse(rs)
    }
    var product = products.filter((item,index) => (index+1) == productId)[0]
    if (product) {
        $('#productPrice').append(`<del>999.999 VND</del>&nbsp;<span
        class="specialPrice" >`+ `<span
         class="ms-3"   itemprop="price">`+ `${product.price}` + ` VND</span></span ></span >`)
        $('#productName').text(product.productName)
        $("#productImg img").attr("src", `img/${product.image}`)
        $("#productImg").attr("href", `img/${product.image}`)
    }

})