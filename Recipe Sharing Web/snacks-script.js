const modal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close-btn");
const recipeTitle = document.getElementById("recipeTitle");
const recipeInstructions = document.getElementById("recipeInstructions");

// Recipe data
const recipes = {
    lumpiangshanghai: {
        title: "Lumpiang Shanghai",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>500 g ground pork</li>
                <li>1 carrot (grated)</li>
                <li>1 onion (minced)</li>
                <li>1 egg</li>
                <li>Lumpia wrappers</li>
                <li>Oil for frying</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Mix ground pork, carrot, onion, and egg. Wrap in lumpia wrappers.</li>
                <li>Fry until golden brown.</li>
                <li>Serve on a platter with sweet chili sauce in a small bowl.</li>
            </ul>
        `
    },
    turon: {
        title: "Turon",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>6 saba bananas (halved lengthwise)</li>
                <li>1 cup jackfruit (optional)</li>
                <li>1 cup brown sugar</li>
                <li>Lumpia wrappers</li>
                <li>Oil for frying</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Roll bananas and jackfruit in brown sugar. Wrap in lumpia wrappers.</li>
                <li>Fry until golden and caramelized.</li>
                <li>Arrange neatly on a long plate and drizzle with caramel sauce.</li>
            </ul>
        `
    },
    bananacue: {
        title: "Banana Cue",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>6 saba bananas</li>
                <li>1 cup brown sugar</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Fry bananas in hot oil and coat with brown sugar.</li>
                <li>Skewer bananas and serve upright on a plate. Sprinkle extra sugar on top.</li>
            </ul>
        `
    },
    kwekkwek: {
        title: "Kwek-Kwek",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>12 quail eggs</li>
                <li>1 cup batter (flour, water, annatto powder)</li>
                <li>Oil for frying</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Coat boiled quail eggs in batter.</li>
                <li>Deep-fry until crispy.</li>
                <li>Serve on a small plate with sweet vinegar or spicy dipping sauce.</li>
            </ul>
        `
    },
    taho: {
        title: "Taho",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>Silken tofu</li>
                <li>1/2 cup syrup (brown sugar, water)</li>
                <li>1/2 cup cooked sago pearls</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Heat tofu until warm.</li>
                <li>Add syrup and sago pearls on top.</li>
                <li>Serve in small cups with a spoon.</li>
            </ul>
        `
    },
    empanada: {
        title: "Empanada",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 cups flour</li>
                <li>1/4 cup butter</li>
                <li>1/4 cup water</li>
                <li>1 cup ground pork or chicken</li>
                <li>1 carrot (diced)</li>
                <li>Raisins (optional)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Make dough from flour, butter, and water. Rest for 30 minutes.</li>
                <li>Sauté filling ingredients. Wrap in dough and fry or bake until golden.</li>
                <li>Arrange on a plate with parsley garnish.</li>
            </ul>
        `
    },
    puto: {
        title: "Puto",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 cups rice flour</li>
                <li>1 cup coconut milk</li>
                <li>1 cup sugar</li>
                <li>1 tbsp baking powder</li>
                <li>Grated cheese (optional)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Mix ingredients and pour batter into molds.</li>
                <li>Steam for 15 minutes.</li>
                <li>Arrange on a plate and top with cheese slices.</li>
            </ul>
        `
    },
    bibingka: {
        title: "Bibingka",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 cups rice flour</li>
                <li>1 cup coconut milk</li>
                <li>3/4 cup sugar</li>
                <li>1 tbsp baking powder</li>
                <li>Salted egg slices (optional)</li>
                <li>Banana leaves</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Mix ingredients to form a batter. Pour into banana leaf-lined tins.</li>
                <li>Bake at 180°C (350°F) for 20-25 minutes.</li>
                <li>Serve on a banana leaf-lined plate with grated coconut on the side.</li>
            </ul>
        `
    }
};

document.querySelectorAll(".view-recipe-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const recipeKey = e.target.closest(".food-item").dataset.recipe;
        const recipe = recipes[recipeKey];
        
        if (recipe) {
            recipeTitle.textContent = recipe.title;
            recipeInstructions.innerHTML = recipe.instructions; 
            modal.style.display = "flex"; 
        } else {
            recipeTitle.textContent = "Recipe Not Found";
            recipeInstructions.textContent = "The selected recipe is not available.";
            modal.style.display = "flex";
        }
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
