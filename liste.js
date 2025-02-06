const myCategory = new URLSearchParams(window.location.search).get("category");

const listContainer = document.querySelector(".set_container");

const filterSelect = document.querySelector("#filterSelect");

const overskrift = document.querySelector("h2");
overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=40&category=${myCategory}`)
  .then((response) => response.json())
  .then((products) => {
    showList(products); /*disse linjer kan bruges hver gang jeg skal hente data, nedenunder spcificere hvilken form for data det er*/

    /* LISTEN FOR CHANGES*/
    filterSelect.addEventListener("change", () => {
      applyFilter(products);
    });
  });

/** FILTER FUNKTION - BASED ON SELCTION **/
function applyFilter(products) {
  const filterValue = filterSelect.value;
  let filterProducts = products;

  if (filterValue === "discount") {
    filterProducts = products.filter((product) => product.discount);
  } else if (filterValue === "soldout") {
    filterProducts = products.filter((product) => product.soldout);
  } else if (filterValue === "puma") {
    filterProducts = products.filter((product) => product.brandname === "Puma");
  } else if (filterValue === "nike") {
    filterProducts = products.filter((product) => product.brandname === "Nike");
  } else if (filterValue === "women") {
    filterProducts = products.filter((product) => product.gender === "Women");
  } else if (filterValue === "men") {
    filterProducts = products.filter((product) => product.gender === "Men");
  }

  showList(filterProducts); /** UPDATES UI WITH THE FILTERED PRODUCTS **/
}

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => ` <div class="card">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.id}">

                <p class="title">${product.productdisplayname}</p>
               
                <p class="cat">${product.subcategory}</p>
                <p class="article">${product.articletype}</p>
                <p class="brand">${product.brandname}</p>
                <p class="gender">${product.gender}</p>

                <p class="price">${product.price}</p>


                <div class="dis ${product.discount && "vis"}">
                    <p>${product.discount}%</p>
                </div>
                <div class="so ${product.soldout && "vis"}">
                    <p>Sold Out</p>
                </div>

                <a href="produkt.html?id=${product.id}" class="link">Read More</a>
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
