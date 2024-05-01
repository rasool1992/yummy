let contentBox = ``;
const catBox = document.querySelector(".cat-box-items");
async function getCategories(base) {
  const response = await fetch(base);
  const data = await response.json();
  return data.categories;
}

async function displayCategories(base) {
  let catMeal = await getCategories(base);
  if (catBox) {
    catMeal.forEach((cat) => {
      contentBox += `
      <div class="cat-item group relative overflow-hidden rounded-lg " data-cat-name=${cat.strCategory}>
    <div class="cat-img cursor-pointer overflow-hidden" >
      <img class="block w-full h-full object-cover object-center" src="${cat.strCategoryThumb}" alt="${cat.strCategory}" />
    </div>
        <div
      class=" img-overlay absolute inset-0 grid translate-y-full bg-transparent cursor-pointer  text-black duration-500 group-hover:translate-y-0 group-hover:bg-overrlay"
    >
      <div class="py-3 text-center">
        <p
          class="cat-title py-2 text-xl font-bold tracking-wider md:font-medium"
        >
          ${cat.strCategory}
        </p>
        <p
          class="cat-desc text-base font-normal tracking-wider md:font-sm line-clamp-3 md:line-clamp-2"
        >
          ${cat.strCategoryDescription}
        </p>
      </div>
    </div>

  </div>
`;
    });
    if (catBox) {
      catBox.innerHTML = contentBox || "";
      catBox.addEventListener("click", (e) => {
        let check = e.target.closest(".cat-item");
        if (check) {
          let catName = check.dataset.catName;
          sessionStorage.setItem("catName", catName);
          location.href = "./category-meal.html";
        }
      });
    }
  }
}

export default { getCategories, displayCategories };
