let set_1 = document.querySelector(".set_1");

const myProduct = new URLSearchParams(window.location.search).get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}/`)
  .then((response) => response.json())
  .then((data) => {
    set_1.innerHTML = `
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${myProduct}.webp" alt="${myProduct}">

            <div>
                <p class="bold">MODEL NAME</p>
                <p>${data.productdisplayname}</p>

                <p class="bold">COLOR</p>
                <p>${data.basecolour}</p>

                <p class="bold">INVENTORY NUMBER</p>
                <p>${data.id}</p>

                <p class="bold">BRAND</p>
                <p>${data.brandname}</p>
            </div>

            <div class="order">
                <p>${data.productdisplayname}</p>
                <p class="cat">${data.subcategory}</p>
                <p class="article">${data.articletype}</p>

                <p class="soldout ${data.soldout && "vis"}">Soldout:
                <br>Yes</p>
                
                <p>Price:
                <br>
                ${data.price}
                </p>
                <p class="discount ${data.discount && "vis"}">Discount:
                <br>
                ${data.discount}%</p>

                <div class="add">Add to basket</div> `;
  });

/*null=none - der burde være en "show" med ifelse i think*/
/*0=no - 1=yes*/
