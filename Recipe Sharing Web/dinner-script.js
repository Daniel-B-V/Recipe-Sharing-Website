const modal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close-btn");
const recipeTitle = document.getElementById("recipeTitle");
const recipeInstructions = document.getElementById("recipeInstructions");

// Recipe data
const recipes = {
    pinakbet: {
        title: "Pinakbet",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1/4 kg pork belly (cubed)</li>
                <li>1 cup squash (cubed)</li>
                <li>1 cup eggplant (sliced)</li>
                <li>1 cup okra</li>
                <li>1 cup sitaw (string beans)</li>
                <li>3 tbsp bagoong (shrimp paste)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Sauté garlic and onion, then add ¼ kg cubed pork belly. Cook until browned.</li>
                <li>Stir in 3 tbsp bagoong and mixed vegetables (squash, eggplant, okra, sitaw). Simmer until tender.</li>
                <li>Serve in a shallow bowl with the vegetables neatly arranged. Garnish with fried garlic bits on top.</li>
            </ul>
        `
    },
    porksisig: {
        title: "Pork Sisig",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>500 g pork face and ears</li>
                <li>1 onion (chopped)</li>
                <li>2 chilies (chopped)</li>
                <li>Calamansi juice</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Boil pork until tender. Chop into small pieces and fry until crispy.</li>
                <li>Mix with chopped onions, chilies, and calamansi juice.</li>
                <li>Serve on a sizzling plate. Garnish with chopped spring onions and sliced chilies. Add a raw egg on top for presentation.</li>
            </ul>
        `
    },
    crispypata: {
        title: "Cryspy Pata",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg pork knuckle</li>
                <li>Salt and pepper</li>
                <li>Oil for frying</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Boil pork knuckle with salt until tender. Let it cool and pat dry.</li>
                <li>Deep-fry until crispy and golden.</li>
                <li>Place the crispy pata on a serving platter. Garnish with fried garlic flakes and serve with soy-vinegar dipping sauce.</li>
            </ul>
        `
    },
    chopsuey: {
        title: "Chop Suey",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 cup mixed vegetables (cauliflower, carrots, cabbage)</li>
                <li>200 g shrimp or pork</li>
                <li>Soy sauce and oyster sauce</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Sauté shrimp or pork. Add mixed vegetables.</li>
                <li>Stir in soy sauce and oyster sauce. Simmer until cooked.</li>
                <li>Serve on a flat plate, arranging vegetables neatly. Garnish with sliced red bell peppers for color.</li>
            </ul>
        `
    },
    embotido: {
        title: "Embotido",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>2 500 g ground pork</li>
                <li>1/2 cup breadcrumbs</li>
                <li>1 carrot (grated)</li>
                <li>1 egg</li>
                <li>Raisins (optional)</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Mix all ingredients. Wrap in foil and steam for 1 hour.</li>
                <li>Cool before slicing.</li>
                <li>Arrange embutido slices on a plate. Garnish with parsley and serve with ketchup or gravy.</li>
            </ul>
        `
    },
    dinuguan: {
        title: "Dinuguan",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>500 g pork (cubed)</li>
                <li>1 cup pork blood</li>
                <li>Vinegar and garlic</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Sauté pork and garlic. Add pork blood and vinegar. Simmer until thickened.</li>
                <li>Serve in a deep bowl. Garnish with chopped chilies and pair with steamed rice or puto on the side.</li>
            </ul>
        `
    },
    bistektagalog: {
        title: "Bistek Tagalog",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>500 g beef (sliced thin)</li>
                <li>1/4 cup soy sauce</li>
                <li>Calamansi juice</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Marinate beef in soy sauce and calamansi juice.</li>
                <li>Fry beef slices and top with sautéed onions.</li>
                <li>Serve on a flat plate. Arrange beef slices neatly and top with caramelized onions.</li>
            </ul>
        `
    },
    inihawnaliempo: {
        title: "Inihaw na Liempo",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>1 kg pork belly (sliced)</li>
                <li>1/4 cup soy sauce</li>
                <li>1/4 cup calamansi juice</li>
                <li>3 cloves garlic (minced)</li>
                <li>1 tbsp sugar</li>
                <li>Salt and pepper</li>
            </ul>
            <h3>How to Cook:</h3>
            <ul>
                <li>Marinate pork belly in soy sauce, calamansi, garlic, sugar, salt, and pepper for 2 hours.</li>
                <li>Grill over hot charcoal until cooked and slightly charred.</li>
                <li>Serve grilled liempo slices on a banana leaf-lined plate. Add dipping sauce on the side and grilled eggplant or tomatoes for garnish.</li>
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
