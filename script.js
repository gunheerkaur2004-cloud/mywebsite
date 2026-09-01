const products = {

    skincare: [
        "Face Wash",
        "Moisturizer",
        "Sunscreen"
    ],

    home: [
        "Wall Decor",
        "LED Light",
        "Storage Box"
    ],

    clothes: [
        "T-Shirt",
        "Jeans",
        "Jacket"
    ],

    jewellery: [
        "Gold Ring",
        "Necklace",
        "Bracelet"
    ],

    footwear: [
        "Shoes",
        "Sandals",
        "Sneakers"
    ]

};


function showProducts(category) {

    const productContainer =
        document.getElementById("products");

    const title =
        document.getElementById("category-title");


    if (!productContainer) return;


    productContainer.innerHTML = "";


    title.innerText =
        category.toUpperCase() + " PRODUCTS";


    products[category].forEach(function(product) {

        productContainer.innerHTML += `

            <div class="category-card">

                <h3>${product}</h3>

                <p>High quality product</p>

                <br>

                <button class="btn">
                    Add to Cart
                </button>

            </div>

        `;

    });

}


// Show Skin Care products by default
if (document.getElementById("products")) {
    showProducts("skincare");
}