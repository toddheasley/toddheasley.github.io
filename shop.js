function updateCart(html) {
    document.getElementById("cart").innerHTML = html;
}

function refreshCart() {
    var script = document.createElement("script");
    script.src = "https://toddheasley.bigcartel.com/contact";
    document.head.appendChild(script);
}

refreshCart();
