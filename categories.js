const listCategories = document.querySelector(".set_3x3");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showList(data)); /*disse linjer kan bruges hver gang jeg skal hente data, nedenunder spcificere hvilken form for data det er*/

function showList(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (category) => `<div class="clc"><a href="produktliste.html">
                    <p>${category.category}</p>
                </a></div>`
    )

    .join("");
  console.log(markup);
  listCategories.innerHTML = markup; /*HTML SKAL VÆRE MED STORT!!!*/
}
