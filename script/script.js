const categoriesSidebar = document.getElementById("categories-sidebar");
const cardContainer =document.getElementById('card-container');

loadcatagory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displaycatagory(data.categories));
};
loadcatagory();

displaycatagory = (plants) => {
  plants.forEach((plant) => {
    const singlecategory = document.createElement("div");
    singlecategory.innerHTML = `
        <div class="hover:bg-[#15803D] hover:text-white p-1 rounded-md">
                <h1 class="text-[15px]">${plant.category_name}</h1>
            </div>
        `;
        categoriesSidebar.appendChild(singlecategory);
  });
};

loadtree=()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displaycard(data.plants));
    

};
loadtree();

displaycard =(cards)=>{
    cards.forEach((card)=>{
        const singlecard =document.createElement('div');
        singlecard.innerHTML =`
        <div class="flex flex-col bg-white  rounded-xl shadow-sm">
            <div>
              <img class="h-[200px] w-[260px] pb-2 rounded-t-md" src="${card.image}" alt=""/>
            </div>
            <div class="p-4">
              <h1 class="font-bold pb-2">${card.name}</h1>
                    <p class="text-[12px] opacity-80 line-clamp-2">
                    ${card.description}
                    </p>

              <div class="flex justify-between pt-2 pb-3">
                <h1 class="bg-[#24e0695a] text-sm py-1 px-2 rounded-2xl text-[#15803D]">${card.category}</h1>
                <h1 class="font-semibold">৳<span>${card.price}</span></h1>
              </div>
              <button class="bg-[#15803D] text-white text-[14px] px-3 py-2 rounded-3xl w-full">
                Add to Cart</button>
            </div>
          </div>
        `;
        cardContainer.appendChild(singlecard);

    });


};
