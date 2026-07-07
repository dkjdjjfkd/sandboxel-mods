// 1. SETUP GAME BEHAVIORS AND STORAGE
if (!window.survivalData) {
    window.survivalData = { coins: 10, wood: 0, iron: 0 };
}

// 2. RESOURCE NODES
elements.raw_log = {
    color: "#5c4033",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 1000,
    breakInto: "wood_scrap"
};

elements.iron_ore_node = {
    color: "#7a6b68",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 5000,
    breakInto: "iron_scrap"
};

// 3. DROPPED ITEMS
elements.wood_scrap = {
    color: "#b5651d",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 600,
    reactions: {
        "crafting_tool": { 
            "elem1": null, 
            "func1": function() { 
                window.survivalData.wood += 1; 
                console.log("Wood Collected! Total: " + window.survivalData.wood);
            } 
        }
    }
};

elements.iron_scrap = {
    color: "#d3d3d3",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 7000,
    reactions: {
        "crafting_tool": { 
            "elem1": null, 
            "func1": function() { 
                window.survivalData.iron += 1; 
                console.log("Iron Collected! Total: " + window.survivalData.iron);
            } 
        }
    }
};

// 4. HARVEST TOOL
elements.crafting_tool = {
    color: "#ff0055",
    behavior: behaviors.POWDER,
    category: "tools",
    state: "solid",
    reactions: {
        "raw_log": { "elem2": "wood_scrap" },
        "iron_ore_node": { "elem2": "iron_scrap" }
    }
};
