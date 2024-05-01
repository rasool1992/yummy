let contentBox = ``;
const areaBoxList = document.querySelector(".area-box-list");
async function getAreaListByCountryName(base) {
  const response = await fetch(base);
  let data = await response.json();
  return data.meals;
}

async function diplayAreaMealList(base) {
  let listOfMeal = await getAreaListByCountryName(base);
  if (areaBoxList) {
    listOfMeal.forEach((meal) => {
      contentBox += `
            <div class="area-item group relative overflow-hidden rounded-lg " data-meal-id=${meal.idMeal}>
          <div class="area-img cursor-pointer overflow-hidden" >
            <img class="block w-full h-full object-cover object-center" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          </div>
              <div
            class=" img-overlay absolute inset-0 grid translate-y-full bg-transparent cursor-pointer  text-black duration-500 group-hover:translate-y-0 group-hover:bg-overrlay"
          >
            <div class="py-3 text-center flex justify-center items-center">
              <p
                class="area-title py-2 text-xl font-bold tracking-wider md:font-medium"
              >
                ${meal.strMeal}
              </p>
              
            </div>
          </div>
      
        </div>
      `;
    });

    areaBoxList.innerHTML = contentBox || "";
    areaBoxList.addEventListener("click", (e) => {
      let check = e.target.closest(".area-item");
      if (check !== null) {
        let mealId = check.dataset.mealId;
        sessionStorage.setItem("mealId", mealId);
        location.href = "../preview/preview-meal-details.html";
      }
    });
  }
}

export default { getAreaListByCountryName, diplayAreaMealList };
