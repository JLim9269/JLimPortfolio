const titles = [
    {
        title: "Gryphon Knight Epic",
        image: "gryphon_knight_epic.jpg",
        role: "Translator",
        description: "English → Korean translation and LQA."
    },
    {
        title: "I Was Here",
        image: "i_was_here.jpg",
        role: "Translator",
        description: "English → Korean translation."
    },
    {
        title: "Dungeon Rushers",
        image: "dungeon_rushers.jpg",
        role: "Translator",
        description: "English → Korean translation."
    },
    {
        title: "Ragnarok Online",
        image: "ragnarok_online.jpg",
        role: "Translator",
        description: "Korean → English translation."
    }
    {
        title: "Space Crew",
        image: "space_crew.jpg",
        role: "Translator",
        description: "English → Korean translation."
    }
    {
        title: "Monster Super League",
        image: "monster_super_league.jpg",
        role: "Community Manager",
        description: "Korean → English translation and NA community management."
    }
    {
        title: "Dragon Age: Inquisition",
        image: "dragon_age_inquisition.jpg",
        role: "Translator",
        description: "English → Korean translation."
    }
    {
        title: "Eve Online",
        image: "eve_online.jpg",
        role: "Localization Specialist",
        description: "English → Korean translation and LQA."
    }
    {
        title: "Lineage W",
        image: "lineage_w.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Black Survival",
        image: "black_survival.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "TRAHA",
        image: "traha.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Counterside",
        image: "counterside.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Blades of Three Kingdoms",
        image: "3kb.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Dekaron M",
        image: "dekaron_m.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Destiny Child Defense War",
        image: "destiny_child_defense_war.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Cats & Soup",
        image: "cats_soup.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "BTS Island: In the SEOM",
        image: "bts_island.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Puzzle SEVENTEEN",
        image: "puzzle_seventeen.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Rhythm Hive",
        image: "rhythm_hive.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Play Together",
        image: "play_together.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Homerun Clash",
        image: "homerun_clash.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Kill the Crows",
        image: "kill_the_crows.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Black Stigma",
        image: "black_stigma.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Carrie Verse",
        image: "carrie_verse.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Lord of Heroes",
        image: "lord_of_heroes.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Dragon Village",
        image: "dragon_village.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Nightmare: The Lunatic",
        image: "nightmare_the_lunatic.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Seven Deadly Sins: Idle",
        image: "seven_deadly_sins_idle.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Lord Nine",
        image: "lord_nine.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Epic Seven",
        image: "epic_seven.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "OUTERPLANE",
        image: "outerplane.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Goddess Order",
        image: "goddess_order.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation and LQA."
    }
    {
        title: "Odin: Valhalla Rising",
        image: "odin_valhalla_rising.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation."
    }
    {
        title: "Archeage Chronicles",
        image: "archeage_chronicles.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation, LQA, and VO."
    }
    {
        title: "Chrono Odyssey",
        image: "chrono_odyssey.jpg",
        role: "Localization Specialist",
        description: "Korean → English translation, LQA, and VO."
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
