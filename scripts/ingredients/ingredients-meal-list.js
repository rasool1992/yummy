let contentBox = ``;
const ingredientMealBox = document.querySelector(".ingredient-meal-list");

async function getIngredientMeal(base) {
  const response = await fetch(base);
  let data = await response.json();
  return data.meals;
}

async function diplayIngredientMeal(base) {
  let listOfMeal = await getIngredientMeal(base);
  if (ingredientMealBox) {
    listOfMeal.forEach((meal) => {
      contentBox += `
      <div class="ingredient-item group relative overflow-hidden rounded-lg cursor-pointer " data-ingredient-id=${meal.idMeal}>
    <div class="ingredient-img cursor-pointer overflow-hidden" >
      <img class="block w-full h-full object-cover object-center" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    </div>
        <div
      class=" img-overlay absolute inset-0 grid translate-y-full bg-transparent cursor-pointer  text-black duration-500 group-hover:translate-y-0 group-hover:bg-overrlay"
    >
      <div class="py-3 text-center flex justify-center items-center">
        <p
          class="ingredient-title py-2 text-xl font-bold tracking-wider md:font-medium"
        >
          ${meal.strMeal}
        </p>
        
      </div>
    </div>

  </div>
`;
    });

    ingredientMealBox.innerHTML = contentBox || "";
    if (ingredientMealBox) {
      ingredientMealBox.addEventListener("click", (e) => {
        let check = e.target.closest(".ingredient-item");
        if (check !== null) {
          let mealId = check.dataset.ingredientId;

          sessionStorage.setItem("mealId", mealId);
          location.href = "../preview/preview-meal-details.html";
        }
      });
    }
  }
}

export default { getIngredientMeal, diplayIngredientMeal };
