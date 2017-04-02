var Shop = {
    
};

Shop.update = function(html) {
    document.getElementById("cart").innerHTML = html;
};

Shop.refresh = function() {
    var script = document.createElement("script");
    script.src = "http://toddheasley.bigcartel.com/contact";
    document.head.appendChild(script);
};

Shop.refresh();