// Initialize survival save data if it doesn't exist
if (!window.survivalData) {
    window.survivalData = {
        coins: 10,
        iron: 0,
        wood: 0
    };
}

// Create a UI display for resources in the top menu corner
function updateSurvivalUI() {
    let ui = document.getElementById("survival-ui");
    if (!ui) {
        ui = document.createElement("div");
        ui.id = "survival-ui";
        ui.style.position = "fixed";
        ui.style.top = "10px";
        ui.style.right = "10px";
        ui.style.background = "rgba(0,0,0,0.8)";
        ui.style.color = "white";
        ui.style.padding = "10px";
        ui.style.fontFamily = "monospace";
        ui.style.zIndex = "9999";
        ui.style.borderRadius = "5px";
        document.body.appendChild(ui);
    }
    ui.innerHTML = `
        <h3>SURVIVAL STATS</h3>
        🪙 Coins: ${window.survivalData.coins}<br>
        🪵 Wood: ${window.survivalData.wood}<br>
        ⛓️ Iron: ${window.survivalData.iron}
    `;
}
updateSurvivalUI();

// 1. SURVIVAL RESOURCE NODES
elements.raw_log = {
    color: "#5c4033",
    behavior: behaviors.WALL, // Stays in place like a tree trunk
    category: "solids",
    state: "solid",
    density: 1000,
    breakInto: "wood_scrap"
};

elements.iron_ore_node = {
    color: "#7a6b68",
    behavior: behaviors.WALL, // Stationary rock node
    category: "solids",
    state: "solid",
    density: 5000,
    breakInto: "iron_scrap"
};

// 2. COLLECTIBLE DROPS
elements.wood_scrap = {
    color: "#b5651d",
    behavior: behaviors.POWDER, // Drops like sand when harvested
    category: "powders",
    state: "solid",
    density: 600,
    reactions: {
        // Automatically harvested when touching the player's cursor tool
        "crafting_tool": { 
            "elem1": null, 
            "func1": function() { 
                window.survivalData.wood += 1; 
                updateSurvivalUI();
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
                updateSurvivalUI();
            } 
        }
    }
};

// 3. HARVESTING / CRAFTING TOOL
elements.crafting_tool = {
    color: "#ff0055",
    behavior: behaviors.POWDER,
    category: "tools",
    state: "solid",
    desc: "Click resource scraps to collect them, or touch Ores/Logs to break them down.",
    reactions: {
        "raw_log": { "elem2": "wood_scrap" },
        "iron_ore_node": { "elem2": "iron_scrap" }
    }
};

// 4. THE MARKET / SHOP SYSTEM (Sells Cloners or custom items)
elements.coin_shop = {
    color: "#ffd700",
    behavior: behaviors.WALL,
    category: "special",
    desc: "Touch wood or iron here to sell them automatically for 5 coins each.",
    reactions: {
        "wood_scrap": { 
            "elem1": null, 
            "func1": function() { 
                window.survivalData.coins += 5; 
                updateSurvivalUI();
            } 
        },
        "iron_scrap": { 
            "elem1": null, 
            "func1": function() { 
                window.survivalData.coins += 5; 
                updateSurvivalUI();
            } 
        }
    }
};
