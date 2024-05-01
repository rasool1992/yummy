let contentBox = ``;
const area = document.querySelector(".area");

async function getAreaCountries(base) {
  let response = await fetch(base);
  let data = await response.json();
  return data.meals;
}

async function displayCountries(base) {
  let countries = await getAreaCountries(base);
  if (area) {
    countries.forEach((country) => {
      contentBox += `
      <div class="area cursor-pointer flex flex-col items-center py-2" data-country-name=${country.strArea}>
            <p class="place-items-center">
              <svg
                width="100"
                height="100"
                fill="#FFF"
                viewBox="0 -64 640 640"
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
                    d="M272,288H208a16,16,0,0,1-16-16V208a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v37.12C299.11,232.24,315,224,332.8,224H469.74l6.65-7.53A16.51,16.51,0,0,0,480,207a16.31,16.31,0,0,0-4.75-10.61L416,144V48a16,16,0,0,0-16-16H368a16,16,0,0,0-16,16V87.3L263.5,8.92C258,4,247.45,0,240.05,0s-17.93,4-23.47,8.92L4.78,196.42A16.15,16.15,0,0,0,0,207a16.4,16.4,0,0,0,3.55,9.39L22.34,237.7A16.22,16.22,0,0,0,33,242.48,16.51,16.51,0,0,0,42.34,239L64,219.88V384a32,32,0,0,0,32,32H272ZM629.33,448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91,0-28.8,14.33-28.8,32V448H266.67A10.67,10.67,0,0,0,256,458.67v10.66A42.82,42.82,0,0,0,298.6,512H597.4A42.82,42.82,0,0,0,640,469.33V458.67A10.67,10.67,0,0,0,629.33,448ZM544,448H352V304H544Z"
                  ></path>
                </g>
              </svg>
            </p>
            <p class="area-name text-xl font-bold">${country.strArea}</p>
          </div>
`;
    });
    area.innerHTML = contentBox || "";
    area.addEventListener("click", (e) => {
      let check = e.target.closest(".area");
      if (check !== null) {
        let country = check.dataset.countryName;
        if (country) {
          sessionStorage.setItem("country", country);
          location.href = "./area-meal-list.html";
        }
      }
    });
  }
}

export default { getAreaCountries, displayCountries };
