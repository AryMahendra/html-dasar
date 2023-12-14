const products = [{
        id: 1,
        name: "Converse",
        image: "../asset/img/shoe1.jpg",
        price: 600000,
    },
    {
        id: 2,
        name: "Jordan",
        image: "../asset/img/shoe2.jpg",
        price: 800000,
    },
    {
        id: 3,
        name: "Adidas",
        image: "../asset/img/shoe3.jpg",
        price: 500000,
    },
    {
        id: 4,
        name: "Reebok",
        image: "../asset/img/shoe4.jpg",
        price: 300000,
    }
];

const productContainer = document.getElementById("product-container");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("card");

    productDiv.innerHTML = `
        <div class="card-body">
            <img src="${product.image}" alt="${product.name}" style="width: 236px">
            <h4><b>${product.name}</b></h4>
            <h3>${product.price}</h3>
        </div>
`;

    productContainer.appendChild(productDiv);
});