const modal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close-btn");
const recipeTitle = document.getElementById("recipeTitle");
const recipeInstructions = document.getElementById("recipeInstructions");

// Recipe data
const recipes = {
    champorado: {
        title: "Champorado",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 cup glutinous rice</li>
                <li>4 cups water</li>
                <li>1/2 cup cocoa powder (unsweetened)</li>
                <li>1/2 cup sugar (adjust to taste)</li>
                <li>Evaporated milk or condensed milk (for serving)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>In a pot, bring 4 cups of water to a boil.</li>
                <li>Add glutinous rice and reduce heat to medium. Cook while stirring occasionally until the rice becomes soft.</li>
                <li>Mix in the cocoa powder and sugar, stirring continuously until fully dissolved.</li>
                <li>Serve hot in bowls with a drizzle of evaporated or condensed milk on top.</li>
            </ul>
        `
    },
    longsilog: {
        title: "Longsilog",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 pieces longganisa (Filipino sausage)</li>
                <li>1 cup garlic fried rice</li>
                <li>1 fried egg (sunny-side-up preferred)</li>
                <li>Optional: sliced tomatoes or atchara (pickled papaya) for garnish</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Cook longganisa in a pan over medium heat until golden brown and fully cooked. Set aside.</li>
                <li>Prepare garlic fried rice by sautéing minced garlic in oil until golden, then mix in cooked rice and season with salt.</li>
                <li>Fry the egg to your preferred doneness.</li>
                <li>Plate the longganisa, garlic rice, and fried egg. Serve with optional tomatoes or atchara.</li>
            </ul>
        `
    },
    tapsilog: {
        title: "Tapsilog",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 cup beef tapa (thinly sliced marinated beef)</li>
                <li>1 cup garlic fried rice</li>
                <li>1 fried egg</li>
                <li>Optional: atchara (pickled papaya) or vinegar dipping sauce</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Heat a pan over medium heat and cook the beef tapa until caramelized and tender. Set aside.</li>
                <li>Prepare garlic fried rice as described above.</li>
                <li>Fry the egg to your liking.</li>
                <li>Plate the beef tapa, garlic rice, and fried egg. Add optional garnishes like atchara or vinegar.</li>
            </ul>
        `
    },
    tosilog: {
        title: "Tosilog",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 cup tocino (sweet cured pork)</li>
                <li>1 cup garlic fried rice</li>
                <li>1 fried egg</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Cook tocino in a pan over low heat with a small amount of water. Allow the water to evaporate, then let the tocino caramelize. Set aside.</li>
                <li>Prepare garlic fried rice as above.</li>
                <li>Fry the egg to your preference.</li>
                <li>Serve tocino, garlic rice, and fried egg together. Enjoy!</li>
            </ul>
        `
    },
    pandesal: {
        title: "Pandesal",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 cups all-purpose flour</li>
                <li>1/2 cup breadcrumbs</li>
                <li>1/4 cup sugar</li>
                <li>1/2 tsp salt</li>
                <li>1 tsp instant yeast</li>
                <li>3/4 cup warm milk</li>
                <li>1 egg</li>
                <li>2 tbsp melted butter</li>
            </ul>
            <h3>How to Make:</h3>
            <ul>
                <li>In a bowl, mix flour, sugar, salt, and yeast.</li>
                <li>Add warm milk, egg, and melted butter. Knead until smooth and elastic.</li>
                <li>Let the dough rise in a warm place until it doubles in size.</li>
                <li>Shape into small rolls, coat with breadcrumbs, and place on a baking sheet.</li>
                <li>Bake at 350°F (175°C) for 15-20 minutes or until golden brown.</li>
            </ul>
        `
    },
    bangsilog: {
        title: "Bangsilog",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 piece bangus (milkfish), cleaned and marinated</li>
                <li>1 cup garlic fried rice</li>
                <li>1 fried egg</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Fry the marinated bangus in oil until golden brown and crispy. Set aside.</li>
                <li>Prepare garlic fried rice as above.</li>
                <li>Fry the egg and serve with bangus and rice.</li>
            </ul>
        `
    },
    filipinoSandwich: {
        title: "Filipino Style Sandwich",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 slices of pandesal or bread rolls</li>
                <li>1 tbsp mayonnaise</li>
                <li>1 tbsp cheese spread</li>
                <li>Ham or sweet pork slices</li>
                <li>Slices of cheese</li>
                <li>Optional: Lettuce or tomato slices</li>
            </ul>
            <h3>How to Make:</h3>
            <ul>
                <li>Slice the pandesal in half or use sandwich bread.</li>
                <li>Spread mayonnaise and cheese spread evenly on one side of the bread.</li>
                <li>Layer with ham or sweet pork slices, cheese, and optional lettuce or tomato.</li>
                <li>Close the sandwich and toast lightly if desired. Serve immediately.</li>
            </ul>
        `
    },
    hotsilog: {
        title: "Hotsilog",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 pieces hotdogs</li>
                <li>1 cup garlic fried rice</li>
                <li>1 fried egg</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Pan-fry the hotdogs until cooked and slightly crispy. Set aside.</li>
                <li>Prepare garlic fried rice as described above.</li>
                <li>Fry the egg to your preference.</li>
                <li>Serve hotdogs, garlic rice, and fried egg together. Enjoy your hotsilog!</li>
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
