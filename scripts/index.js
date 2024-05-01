// Import Home
import homePage from "./home/home-list.js";
import previewDetails from "./preview/preview-meal-detials.js";
import contact from "./contact.js";

// Import Search
import search from "./search/search.js";
// Import Category
import categoryList from "./categories/category-list.js";
import categoryMeal from "./categories/category-meal.js";

// Import Area JS
import areaCountries from "./area/area-country-list.js";
import areaMeal from "./area/area-meal-list.js";
// Import Ingredient
import IngredientList from "./ingredients/ingredients-list.js";
import ingredientMeal from "./ingredients/ingredients-meal-list.js";

const base = "";
const catName = sessionStorage.getItem("catName") || "";
const area = sessionStorage.getItem("country") || "";
let ingredient = sessionStorage.getItem("ingredient") || "";
let mealId = sessionStorage.getItem("mealId") || "";
let home = sessionStorage.getItem("home") || "";

document.addEventListener("DOMContentLoaded", () => {
  contact.initApp();
  //   Display Home
  homePage.displayHomeList(
    "https://www.themealdb.com/api/json/v1/1/search.php?s",
  );

  //   Display Search
  search.dispayMeal(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
  // Dispay Category
  categoryList.displayCategories(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  if (catName) {
    categoryMeal.diplayCategoryList(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + catName,
    );
    previewDetails.diplayDetails(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`,
      catName,
    );
  }
  //   Dispay Area

  areaCountries.displayCountries(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
  );

  //   Display Meals From Area
  areaMeal.diplayAreaMealList(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
  );
  //   Display Ingradient
  IngredientList.displayIngrediensList(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`,
  );
  //   Display Ingredient By Meal Name
  if (ingredient) {
    ingredientMeal.diplayIngredientMeal(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
  }

  //   Preview Details
  if (mealId) {
    previewDetails.diplayDetails(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`,
      mealId,
    );
  }
});
