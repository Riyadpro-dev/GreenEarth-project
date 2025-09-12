
const categoriesSidebar = document.getElementById("categories-sidebar");
const cardContainer = document.getElementById("card-container");


 loadCategories=()=> {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.categories);
    })
}
loadCategories();

 displayCategories=(categories)=> {
  categories.forEach((plant) => {
    const singleCategory = document.createElement("div");
    singleCategory.innerHTML = `
      <div class="hover:bg-[#15803D] hover:text-white p-1 rounded-md cursor-pointer category-item">
        <h1 class="text-[15px]">${plant.category_name}</h1>
      </div>
    `;

  
    singleCategory.addEventListener("click", () => {
      loadTreesByCategory(plant.id);
    });


    categoriesSidebar.appendChild(singleCategory);
  });
  
};

 loadAllTrees=()=> {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayCards(data.plants))
}
loadAllTrees();

 loadTreesByCategory=(id)=> {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        
      cardContainer.innerHTML = "";
      displayCards(data.plants);
      
    })
}


 displayCards=(plants)=> {
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const singleCard = document.createElement("div");
    singleCard.innerHTML = `
      <div class="flex flex-col bg-white rounded-xl shadow-sm">
        <div>
          <img class="h-[200px] w-[100%] object-cover pb-2 rounded-t-md" src="${plant.image}" alt=""/>
        </div>
        <div class="p-4">
          <h1 class="font-bold pb-2">${plant.name}</h1>
          <p class="text-[12px] opacity-80 line-clamp-2">
            ${plant.description}
          </p>
          <div class="flex justify-between pt-2 pb-3">
            <h1 class="bg-[#24e0695a] text-sm py-1 px-2 rounded-2xl text-[#15803D]">${plant.category}</h1>
            <h1 class="font-semibold">৳<span>${plant.price}</span></h1>
          </div>
          <button class="bg-[#15803D] text-white text-[14px] px-3 py-2 rounded-3xl w-full">
            Add to Cart
          </button>
        </div>
      </div>
    `;
    cardContainer.appendChild(singleCard);
  });
}

document.getElementById("all-trees").addEventListener("click", () => {
  cardContainer.innerHTML = "";
  loadAllTrees();
});
