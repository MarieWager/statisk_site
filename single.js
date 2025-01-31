let productId = 1163;
let set_1 = document.querySelector(".set_1");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    set_1.innerHTML = `
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="1163">

            <div>
                <p class="bold">MODEL NAME</p>
                <p>${data.productdisplayname}</p>

                <p class="bold">COLOR</p>
                <p>${data.basecolour}</p>

                <p class="bold">INVENTORY NUMBER</p>
                <p>${productId}</p>

                <p class="bold">BRANDS</p>
                <p>${data.brandname}</p>
            </div>

            <div class="order">
                <p>${data.productdisplayname}</p>
                <p class="cat">${data.subcategory}</p>
                <p class="article">${data.articletype}</p>

                <p class="discount">Discount:
                <br>
                ${data.discount}</p>
                <p class="soldout">Soldout:
                <br>${data.soldout}</p>
                
                <p>Price:
                <br>
                ${data.price}
                </p>

                <div class="add">Add to basket</div>
    </div> `;
  });

/*null=none - der burde være en "show" med ifelse i think*/
/*0=no - 1=yes*/
