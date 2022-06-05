var products = [];
function deleteProduct(id) {
    // Xoa mot product trong localstorage
    products.splice(id - 1, 1); // Xoa 1 phan tu trong mang

    // Chuyen bien object thanh chuoi
    var dataStr = JSON.stringify(products);
    // Luu dskh vao local storage
    localStorage.setItem('products', dataStr);

    $("#product-" + id).remove();
    /*  $("#productTableBody").children().remove() */
}

function renderProducts() {

    // Doc tu local storage lay ds kh
    var allProductsStr = localStorage.getItem('products');
    if (allProductsStr != null) {
        products = JSON.parse(allProductsStr);
    }
    for (var i = 0; i < products.length; i++) {
        // truy cap vao vi tri thu i cua mang
        // & luu vao bien object
        var product = products[i];
        var newRow = '<tr id="product-' + product.id + '">' +
            '<th scope="row">' + (i + 1) + '</th>' +
            '<td>' + product.productName + '</td>' +
            '<td>' + product.image + '</td>' +
            '<td>' + product.price + '</td>' +
            '<td>' + product.quantity + '</td>' +
            '<td>' +
            '<button type="button" onclick="deleteProduct(' + product.id + ')" class="btn btn-primary">Xóa</button>' +
            '</td>' +
            '</tr>';
        $("#productTableBody").append(newRow);
    }
}
function randomId() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
}

$(document).ready(function () {
    renderProducts();

    $("#btnNew").click(function () {
        $("#productModal").modal('show');
    });

    // Bat su kien khi dialog mo
    $("#productModal").on("show.bs.modal", function (event) {
        $("#productName").val('')
        $("#image").val('');
        $("#price").val('');
        $("#quantity").val('');
    });

    // Bat su kien khi dialog dong
    $("#saveBtn").on('click', function (event) {
        var productName = $("#productName").val();
        var image = $("#image").val();
        var price = $("#price").val();
        var quantity = $("#quantity").val();
        var allProductsStr = localStorage.getItem('products');
        if (allProductsStr != null) {

            products = JSON.parse(allProductsStr);
        }
        var productInfo = {
            "id": randomId(),
            "productName": productName,
            "image": image,
            "price": price,
            "quantity": quantity
        };

        // Doc tu local storage lay ds kh

        products.push(productInfo);
        // Chuyen bien object thanh chuoi
        var dataStr = JSON.stringify(products);
        // Luu dskh vao local storage
        localStorage.setItem('products', dataStr);
        var newRow = '<tr id="product-' + products.length + '">' +
            '<th scope="row">' + (products.length) + '</th>' +
            '<td>' + productName + '</td>' +
            '<td>' + image + '</td>' +
            '<td>' + price + '</td>' +
            '<td>' + quantity + '</td>' +
            '<td>' +
            '<button type="button" onclick="deleteProduct(' + products.id + ')" class="btn btn-primary">Xóa</button>' +
            '</td>' +
            '</tr>';

        $("#productTableBody").append(newRow);
    });
});