const listContainer = document.querySelector(".set_container");

fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((response) => response.json())
  .then((data) => showList(data)); /*disse linjer kan bruges hver gang jeg skal hente data, nedenunder spcificere hvilken form for data det er*/

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => ` <div class="card">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.id}">

                <p class="title">${product.productdisplayname}</p>
                <p class="cat">${product.subcategory}</p>
                <p class="article">${product.articletype}</p>
                <p class="price">${product.price}</p>
                <a href="produkt.html" class="link">Read More</a>
            </div>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup; /*HTML SKAL VÆRE MED STORT!!!*/
}

/*this works*<div class="card">
<img class="img_so" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.id}">
               <p class="title">${product.productdisplayname}</p>
                <p class="cat">${product.subcategory}</p>
                <p class="article">${product.articletype}</p>
                <p class="price">${product.price}</p>
                <div class="dis">
                    <p>${product.discount}%</p>
                </div>
                <div class="so">
                    <p>${product.soldout}</p>
                </div>
                <a href="produkt.html" class="link">Read More</a>


    </div>
*/
