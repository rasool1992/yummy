let contentBox = ``;
const catBoxList = document.querySelector(".cat-box-list");
async function getCategoryListByName(base) {
  const response = await fetch(base);
  let data = await response.json();
  return data.meals;
}

async function diplayCategoryList(base) {
  let listByName = await getCategoryListByName(base);
  if (catBoxList !== undefined) {
    listByName.forEach((meal) => {
      contentBox += `
      <div class="cat-item group relative overflow-hidden rounded-lg " data-cat-id=${meal.idMeal}>
    <div class="cat-img cursor-pointer overflow-hidden" >
      <img class="block w-full h-full object-cover object-center" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    </div>
        <div
      class=" img-overlay absolute inset-0 grid translate-y-full bg-transparent cursor-pointer  text-black duration-500 group-hover:translate-y-0 group-hover:bg-overrlay"
    >
      <div class="py-3 text-center flex justify-center items-center">
        <p
          class="cat-title py-2 text-xl font-bold tracking-wider md:font-medium"
        >
          ${meal.strMeal}
        </p>
        
      </div>
    </div>

  </div>
`;
    });
    if (catBoxList) {
      catBoxList.innerHTML = contentBox || "";
      catBoxList.addEventListener("click", (e) => {
        let check = e.target.closest(".cat-item");
        if (check) {
          let mealId = check.dataset.catId;
          sessionStorage.setItem("mealId", mealId);
          location.href = "../preview/preview-meal-details.html";
        }
      });
    }
  }
}

export default { getCategoryListByName, diplayCategoryList };
