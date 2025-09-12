const categoriesSidebar = document.getElementById("categories-sidebar");
const cardContainer = document.getElementById("card-container");

loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.categories);
    });
};
loadCategories();

displayCategories = (categories) => {
  categories.forEach((plant) => {
    const singleCategory = document.createElement("div");
     singleCategory.className =
      "category-item hover:bg-[#15803D] hover:text-white p-1 rounded-md cursor-pointer";
    singleCategory.innerHTML = `
      <div class=" hover:bg-[#15803D] hover:text-white p-1 rounded-md cursor-pointer">
        <h1 class="text-[15px]">${plant.category_name}</h1>
      </div>
    `;

    singleCategory.addEventListener("click", () => {
      setActiveCategory(singleCategory);
      loadTreesByCategory(plant.id);
    });


    categoriesSidebar.appendChild(singleCategory);
  });
};

loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayCards(data.plants));
};
loadAllTrees();

loadTreesByCategory = (id) => {
  showSpinner();
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      cardContainer.innerHTML = "";
      displayCards(data.plants);
      hideSpinner();
    });
};

displayCards = (plants) => {
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const singleCard = document.createElement("div");
    singleCard.innerHTML = `
      <div class="flex flex-col bg-white rounded-xl shadow-sm">
        <div>
          <img class="h-[200px] w-[100%] object-cover pb-2 rounded-t-md" src="${plant.image}" alt=""/>
        </div>
        <div class="p-4">
          <h1 class="font-bold pb-2 tree-name cursor-pointer text-green-700 hover:underline">${plant.name}</h1>
          <p class="text-[12px] opacity-80 line-clamp-2">${plant.description}</p>
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


    singleCard.querySelector(".tree-name").addEventListener("click", () => {
      openTreeModal(plant);
    });

    cardContainer.appendChild(singleCard);
  });
};


document.getElementById("all-trees").addEventListener("click", () => {
  cardContainer.innerHTML = "";
  showSpinner();
  loadAllTrees();
  hideSpinner();
});



document.getElementById("all-trees").addEventListener("click", (e) => {
  setActiveCategory(e.currentTarget);
  loadAllTrees();
});

// Active Category Function
function setActiveCategory(activeDiv) {
  const allCategories = document.querySelectorAll(".category-item, #all-trees");
  allCategories.forEach((item) => {
    item.classList.remove("bg-[#15803D]", "text-white" ,"rounded-sm");
  });
  activeDiv.classList.add("bg-[#15803D]", "text-white", "rounded-sm");
}






const treeModal = document.getElementById("treeModal");
const closeModal = document.getElementById("closeModal");
const modalContent = document.getElementById("modalContent");

// Close modal
closeModal.addEventListener("click", () => {
  treeModal.classList.add("hidden");
});


openTreeModal=(plant)=> {
  modalContent.innerHTML = `
    <img src="${plant.image}" class="w-full h-60 object-cover rounded-md mb-3" alt="${plant.name}">
    <h1 class="text-2xl font-bold mb-2">${plant.name}</h1>
    <p class="text-gray-700 mb-3">${plant.description}</p>
    <div class="flex justify-between mb-3">
      <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full">${plant.category}</span>
      <span class="font-semibold text-lg">৳${plant.price}</span>
    </div>
    <button class="bg-[#15803D] text-white px-4 py-2 rounded-lg w-full">Add to Cart</button>
  `;
  treeModal.classList.remove("hidden");
}




const spinner = document.getElementById("loading-spinner");

function showSpinner() {
  spinner.classList.remove("hidden");
  cardContainer.classList.add("hidden");
}

function hideSpinner() {
  spinner.classList.add("hidden");
  cardContainer.classList.remove("hidden");
}


