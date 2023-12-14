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

const apiUrl = 'https://crudcrud.com/api/9c669dbbbf5a431db3e71e8e9592ac42/products'; // Ganti YOUR_API_KEY dengan API key yang Anda dapatkan dari crudcrud.com

async function addProductToApi(product) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();
        console.log('Product added to API successfully:', data);
    } catch (error) {
        console.error('Error adding product to API:', error);
    }
}

// Menambahkan setiap produk ke API
products.forEach(product => {
    addProductToApi(product);
});

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