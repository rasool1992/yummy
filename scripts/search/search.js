const formSearch = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");
let contentBox = ``;

async function getMeal(base, query) {
  let response = await fetch(base + query);
  let data = await response.json();
  return data.meals;
}
function dispayMeal(base) {
  if (formSearch) {
    let getMealByName = formSearch.filterByName;
    let getMealByLetter = formSearch.filterByLetter;

    // For getMealByName Input
    getMealByName.addEventListener("input", (e) => {
      if (getMealByName.value.length > 0) {
        getMealByLetter.value = "";
        searchBox.classList.add("grid");
        searchBox.classList.remove("hidden");
      } else {
        getMealByLetter.value = "";
        searchBox.classList.remove("grid");
        searchBox.classList.add("hidden");
      }
      contentBox = ``;
      let query = getMealByName.value;
      getMeal(base, query)
        .then((mealList) => {
          if (mealList !== null) {
            mealList.forEach((meal) => {
              contentBox += `
                      <div class="meal-item group relative overflow-hidden rounded-lg cursor-pointer " data-meal-id=${meal.idMeal}>
              <div class="search-img cursor-pointer overflow-hidden" >
                <img class="block w-full h-full object-cover object-center" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              </div>
                  <div
                class=" img-overlay absolute inset-0 grid translate-y-full bg-transparent cursor-pointer  text-black duration-500 group-hover:translate-y-0 group-hover:bg-overrlay"
              >
                <div class="py-3 text-center flex justify-center items-center">
                  <p
                    class="search-title py-2 text-xl font-bold tracking-wider md:font-medium"
                  >
                    ${meal.strMeal}
                  </p>
                  
                </div>
              </div>
          
            </div>
                      `;
              searchBox.innerHTML = contentBox;
            });
          }
        })
        .catch((err) => {});
    });
    // For getMealByLetter Input
    getMealByLetter.addEventListener("input", (e) => {
      if (getMealByLetter.value.length > 0) {
        getMealByName.value = "";
        searchBox.classList.add("grid");
        searchBox.classList.remove("hidden");
      } else {
        getMealByName.value = "";
        searchBox.classList.remove("grid");
        searchBox.classList.add("hidden");
      }
      contentBox = ``;
      let query = getMealByLetter.value;
      getMeal(base, query)
        .then((mealList) => {
          if (mealList !== null) {
            mealList.forEach((meal) => {
              contentBox += `
                        <div class="meal-item group relative overflow-hidden rounded-lg cursor-pointer " data-meal-id=${meal.idMeal}>
                <div class="search-img cursor-pointer overflow-hidden" >
                  <img class="block w-full h-full object-cover object-center" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                </div>
                    <div
                  class=" img-overlay absolute inset-0 grid translate-y-full bg-transparent cursor-pointer  text-black duration-500 group-hover:translate-y-0 group-hover:bg-overrlay"
                >
                  <div class="py-3 text-center flex justify-center items-center">
                    <p
                      class="search-title py-2 text-xl font-bold tracking-wider md:font-medium"
                    >
                      ${meal.strMeal}
                    </p>
                    
                  </div>
                </div>
            
              </div>
                        `;
              searchBox.innerHTML = contentBox;
            });
          }
        })
        .catch((err) => {});
    });

    // Preview Clicked Meal
    if (searchBox) {
      searchBox.addEventListener("click", (e) => {
        let check = e.target.closest(".meal-item");
        if (check !== null) {
          let mealId = check.dataset.mealId;
          sessionStorage.setItem("mealId", mealId);
          //   Make input empty when come back from another page
          formSearch.filterByName.value = "";
          formSearch.filterByLetter.value = "";
          location.href = "../preview/preview-meal-details.html";
        }
      });
    }
  }
}

export default { dispayMeal };
