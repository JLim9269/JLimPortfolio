const titles = [
    {
        title: "Gryphon Knight Epic",
        image: "gryphon_knight_epic.jpg",
        role: "Localization Specialist",
        description: "Korean ↔ English localization and LQA."
    },
    {
        title: "I Was Here",
        image: "i_was_here.jpg",
        role: "Localization Specialist",
        description: "Translation and linguistic QA."
    },
    {
        title: "Dungeon Rushers",
        image: "dungeon_rushers.jpg",
        role: "Localization Specialist",
        description: "Localization and terminology review."
    },
    {
        title: "Dragon Age: Inquisition",
        image: "dragon_age_inquisition.jpg",
        role: "Localization Specialist",
        description: "English → Korean localization."
    }

    // Keep adding games here
];

const grid = document.getElementById("grid");

titles.forEach((game, i) => {
    grid.innerHTML += `
        <div class="cover" onclick="selectTitle(${i})">
            <img src="images/${game.image}" alt="${game.title}">
        </div>
    `;
});

function selectTitle(i) {
    const game = titles[i];

    document.getElementById("panel").innerHTML = `
        <h4>${game.title}</h4>

        <p><b>Role</b><br>${game.role}</p>

        <p>${game.description}</p>
    `;
}
