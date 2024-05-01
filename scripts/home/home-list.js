let contentBox = ``;
const homeBox = document.querySelector(".home-list");

async function getHomeList(base) {
  let response = await fetch(base);
  let data = await response.json();
  return data.meals;
}

async function displayHomeList(base) {
  let homeList = await getHomeList(base);
  if (homeBox) {
    homeList.forEach((meal) => {
      contentBox += `
      <div class="home-item group relative overflow-hidden rounded-lg " data-meal-id=${meal.idMeal}>
      <div class="home-img cursor-pointer overflow-hidden" >
        <img class="block w-full h-full object-cover object-center" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      </div>
          <div
        class=" img-overlay absolute inset-0 grid translate-y-full bg-transparent cursor-pointer  text-black duration-500 group-hover:translate-y-0 group-hover:bg-overrlay"
      >
        <div class="py-3 text-center flex justify-center items-center">
          <p
            class="home-title py-2 text-xl font-bold tracking-wider md:font-medium"
          >
            ${meal.strMeal}
          </p>
          
        </div>
      </div>
  
    </div>
`;
    });
    homeBox.innerHTML = contentBox || "";
    homeBox.addEventListener("click", (e) => {
      let check = e.target.closest(".home-item");
      if (check !== null) {
        let mealId = check.dataset.mealId;
        sessionStorage.setItem("mealId", mealId);
        location.href = "./views/preview/preview-meal-details.html";
      }
    });
  }
}

export default { getHomeList, displayHomeList };
