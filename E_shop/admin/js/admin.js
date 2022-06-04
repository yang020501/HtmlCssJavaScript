
$('document').ready(function () {
    $('#product').on("click", function () {
        $('#content').load("product.html")
        $('#product').addClass("active")
    })

})

