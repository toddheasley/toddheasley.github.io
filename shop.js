var Shop = {

};

Shop.update = function(html) {
    document.getElementById("cart").innerHTML = html;
};

Shop.refresh = function() {
    var script = document.createElement("script");
    script.src = "https://toddheasley.bigcartel.com/contact";
    document.head.appendChild(script);
};

Shop.redirect = function() {
    window.location.href = "http://toddheasley.github.io";
};

Shop.refresh();
