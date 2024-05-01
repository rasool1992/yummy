let contentBox = ``;
const ingredienBox = document.querySelector(".ingredient-list");

async function getIngrediensList(base) {
  let response = await fetch(base);
  let data = await response.json();
  return data.meals;
}

async function displayIngrediensList(base) {
  let ingredienList = await getIngrediensList(base);
  ingredienList = ingredienList.filter(
    (ingredient) => ingredient.strDescription,
  );

  if (ingredienBox) {
    ingredienList.forEach((ingredient) => {
      contentBox += `<div class="ingredient-item flex flex-col items-center py-2 text-center overflow-hidden  cursor-pointer" data-ingredien-name="${ingredient.strIngredient.replaceAll(" ", "_")}">
      <p class="place-items-center">
        <svg
          width="100"
          height="100"
          fill="#ffffff"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M462.8 49.57a169.44 169.44 0 0 0-239.5 0C187.82 85 160.13 128 160.13 192v85.83l-40.62 40.59c-9.7 9.69-24 11.07-36.78 6a60.33 60.33 0 0 0-65 98.72C33 438.39 54.24 442.7 73.85 438.21c-4.5 19.6-.18 40.83 15.1 56.1a60.35 60.35 0 0 0 98.8-65c-5.09-12.73-3.72-27 6-36.75L234.36 352h85.89a187.87 187.87 0 0 0 61.89-10c-39.64-43.89-39.83-110.23 1.05-151.07 34.38-34.36 86.76-39.46 128.74-16.8 1.3-44.96-14.81-90.28-49.13-124.56z"
            ></path>
          </g>
        </svg>
      </p>
      <p class="ingredient-name text-xl font-bold my-1">${ingredient.strIngredient}</p>
      <p class="ingredient-des text-base line-clamp-3 mb-2">
        ${ingredient.strDescription}
      </p>
    </div>
`;
    });
    ingredienBox.innerHTML = contentBox || "";
    ingredienBox.addEventListener("click", (e) => {
      let check = e.target.closest(".ingredient-item");
      //
      if (check !== null) {
        let ingredient = check.dataset.ingredienName;
        sessionStorage.setItem("ingredient", ingredient);
        location.href = "./ingredients-meal-list.html";
      }
    });
  }
}

export default { getIngrediensList, displayIngrediensList };
