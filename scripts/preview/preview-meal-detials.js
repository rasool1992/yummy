let contentBox = ``;
const homeDetailsBox = document.querySelector(".preview-meal");

async function getDetails(base, query) {
  const response = await fetch(base + query);
  let data = await response.json();
  return data.meals;
}

async function diplayDetails(base, query) {
  let meal = await getDetails(base, query);
  if (homeDetailsBox && meal !== null) {
    let strTags = null;
    let strTagsContent = ``;
    if (meal[0].strTags !== null) {
      let strTags = meal[0].strTags;
      //convert tag to array
      strTags = strTags.split(",");
      //convert strMeasure to array
      strTags.forEach((tag) => {
        strTagsContent += `
        <div class="text-center tag px-3 py-2 my-2  bg-red-300 inline-block text-rose-800 rounded-md  ">${tag}</div>
        `;
      });
    }

    let strMeasure = [];
    for (let i = 0; i < 20; i++) {
      let key = `strMeasure${i + 1}`;
      try {
        if (meal[0][key].trim() !== "") {
          strMeasure.push(meal[0][key]);
        }
      } catch (err) {}
    }

    let strMeasuretContent = ``;
    strMeasure.forEach((item) => {
      strMeasuretContent += `
        <div class="text-center inline-block tag px-3 py-2 my-2 text-black  bg-[#CFF4FC] min-w-10 rounded-md ">${item}</div>
        `;
    });
    contentBox += `
            <div class="meal-img py-1 md:py-4">
                <img
                class="w-full rounded-lg object-cover"
                src="${meal[0].strMealThumb}"
                alt="${meal[0].strMeal}"
                />
                <h2 class="meal-name py-2 font-bold text-3xl">${meal[0].strMeal}</h2>
             </div>
            <div class="meal-info">
                <p class=" py-2 instructions text-bold text-2xl">Instructions</p>
                <p class="details line-clamp-5 cursor-pointer">
                ${meal[0].strInstructions}
                </p>
                <h2 class="Area pb-2 mt-3 text-bold text-2xl ">Area:  ${meal[0].strArea}</h2>
                <h2 class="Catigory py-2 text-bold text-2xl">Category: ${meal[0].strCategory}</h2>
                <h2 class="recipes-title "> <span class="text-bold text-2xl" >Recipes :  </span>
                    <p> ${strMeasuretContent} </p>
                </h2>
                
                <h2 class="tags text-bold py-3 ">Tags: 
                    <p>${strTagsContent}</p>
                </h2>
                <ul class="tags-con flex gap-x-2">
                <li class="source rounded-md bg-green-700 px-4 py-2 my-2"><a href="${meal[0].strSource}">Source</a>  </li>
                <li class="youtube rounded-md bg-orange-700 px-4 py-2 my-2"><a href="${meal[0].strYoutube}">YouTube</a></li>
                </ul>
            </div>

    `;

    homeDetailsBox.innerHTML = contentBox || "";
    let details = document.querySelector(".details");
    details.addEventListener("click", (e) => {
      details.classList.toggle("line-clamp-5");
    });
  }
}

export default { getDetails, diplayDetails };
