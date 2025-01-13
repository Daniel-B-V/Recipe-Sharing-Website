const modal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close-btn");
const recipeTitle = document.getElementById("recipeTitle");
const recipeInstructions = document.getElementById("recipeInstructions");

// Recipe data
const recipes = {
    adobo: {
        title: "Adobo",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg chicken or pork (cut into pieces)</li>
                <li>1/2 cup soy sauce</li>
                <li>1/2 cup vinegar</li>
                <li>1 cup water</li>
                <li>5 cloves garlic (minced)</li>
                <li>2 bay leaves</li>
                <li>1 tsp whole peppercorns</li>
                <li>1 tbsp sugar (optional)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Marinate meat in soy sauce, vinegar, and garlic for 1 hour.</li>
                <li>Heat oil in a pan, sauté garlic until fragrant. Add marinated meat (reserve marinade) and cook until browned.</li>
                <li>Add marinade, bay leaves, peppercorns, and water. Simmer for 30–40 minutes or until meat is tender.</li>
                <li>Optional: Add sugar for a slightly sweet flavor.</li>
                <li>Serve in a shallow dish with steamed rice. Garnish with whole peppercorns and a sprig of parsley.</li>
            </ul>
        `
    },
    sinigang: {
        title: "Sinigang",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg pork ribs or shrimp</li>
                <li>1 liter water</li>
                <li>2 tomatoes (quartered)</li>
                <li>1 onion (sliced)</li>
                <li>1 radish (sliced)</li>
                <li>1 cup kangkong (water spinach)</li>
                <li>1 cup sitaw (string beans)</li>
                <li>1 taro (gabi)</li>
                <li>1 pack tamarind soup mix or fresh tamarind</li>
                <li>Fish sauce to taste</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Boil pork ribs or shrimp in water with onions and tomatoes until tender.</li>
                <li>Add taro and cook until soft.</li>
                <li>Stir in tamarind mix or fresh tamarind. Add radish, sitaw, and fish sauce. Simmer for 5 minutes.</li>
                <li>Add kangkong last and serve hot.</li>
                <li>Use a deep bowl, place the meat or shrimp on top of the vegetables, and pour the broth over. Garnish with fresh tomatoes or herbs.</li>
            </ul>
        `
    },
    karekare: {
        title: "Kare-Kare",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg oxtail (or beef)</li>
                <li>1/2 cup peanut butter</li>
                <li>1/4 cup toasted rice flour</li>
                <li>1/4 cup annatto oil</li>
                <li>2 cups water</li>
                <li>1 eggplant (sliced)</li>
                <li>1 cup string beans (cut into 2-inch pieces)</li>
                <li>1 banana blossom (sliced)</li>
                <li>Bagoong (fermented shrimp paste) for dipping</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Boil oxtail until tender and set aside broth.</li>
                <li>Sauté annatto oil, garlic, and onions. Add peanut butter and toasted rice flour dissolved in water. Simmer until thickened.</li>
                <li>Add cooked oxtail and vegetables. Cook until tender.</li>
                <li>Arrange oxtail and vegetables neatly on a serving platter. Pour peanut sauce over the meat and vegetables. Serve bagoong in a small ramekin.</li>
            </ul>
        `
    },
    lechonkawali: {
        title: "Lechon Kawali",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg pork belly</li>
                <li>1 tbsp salt</li>
                <li>1 tsp peppercorns</li>
                <li>3 cloves garlic (crushed)</li>
                <li>Water for boiling</li>
                <li>Oil for frying</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Boil pork belly with salt, peppercorns, and garlic until tender. Let cool.</li>
                <li>Pat dry the pork and refrigerate for at least 1 hour.</li>
                <li>Deep-fry until crispy and golden.</li>
                <li>Slice pork and arrange on a wooden board or platter. Add a small dish of dipping sauce and garnish with cucumber slices or pickled vegetables.</li>
            </ul>
        `
    },
    bulalo: {
        title: "Bulalo",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg beef shank (with marrow)</li>
                <li>1 liter water</li>
                <li>1 corn (sliced)</li>
                <li>1 cup cabbage</li>
                <li>1 onion (quartered)</li>
                <li>Fish sauce to taste</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Boil beef shank with onions and fish sauce until tender. Skim off excess fat.</li>
                <li>Add corn and simmer for 10 minutes.</li>
                <li>Add cabbage before serving.</li>
                <li>Use a large bowl, place beef shank in the center, and arrange vegetables and corn around the meat. Ladle broth over everything.</li>
            </ul>
        `
    },
    tinola: {
        title: "Tinola",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg chicken (cut into pieces)</li>
                <li>1 green papaya (sliced)</li>
                <li>1 bunch malunggay leaves</li>
                <li>1 thumb-sized ginger (sliced)</li>
                <li>1 onion (sliced)</li>
                <li>Fish sauce</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Sauté ginger and onions. Add chicken and cook until lightly browned.</li>
                <li>Add water and simmer until chicken is tender.</li>
                <li>Add green papaya and cook until soft, then stir in malunggay.</li>
                <li>Serve in a deep bowl. Place chicken pieces on top of the papaya slices and ladle broth over everything. Garnish with fresh malunggay leaves.</li>
            </ul>
        `
    },
    laing: {
        title: "Laing",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 cups dried taro leaves</li>
                <li>1 cup coconut milk</li>
                <li>1 cup coconut cream</li>
                <li>1/2 cup pork (diced)</li>
                <li>Chilies (to taste)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Sauté pork until browned. Add coconut milk and simmer.</li>
                <li>Add taro leaves and simmer without stirring. Pour in coconut cream and cook until thickened.</li>
                <li>Serve on a flat plate. Neatly layer taro leaves and drizzle additional coconut cream over the dish. Garnish with red chilies.</li>
            </ul>
        `
    },
    paksiwnabangus: {
        title: "Paksiw ns Bangus",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 milkfish (cleaned and sliced)</li>
                <li>1/2 cup vinegar</li>
                <li>1/4 cup water</li>
                <li>3 cloves garlic (crushed)</li>
                <li>1 small ginger (sliced)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Layer fish in a pot, add garlic, ginger, onion, vinegar, and water.</li>
                <li>Season with salt, pepper, and add eggplants/chili if desired.</li>
                <li>Simmer for 15-20 minutes until cooked.</li>
                <li>Arrange the fish on a shallow dish with the sauce. Garnish with fresh ginger slices and serve with steamed rice.</li>
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
