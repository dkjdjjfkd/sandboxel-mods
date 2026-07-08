// Water Spirit Mod for Sandboxels
// A fluid, ethereal creature that flows like water but thinks!

elements.water_spirit = {
    color: "#00CED1",           // Cyan/turquoise
    behavior: behaviors.LIQUID,
    category: "life",
    state: "liquid",
    density: 800,
    description: "A mystical water spirit that flows and adapts!",
    
    tick: function(pixel) {
        // Move more intelligently than regular water
        if (Math.random() < 0.35) {
            let directions = [
                {x: 0, y: 1},   // Down (priority)
                {x: 1, y: 1},
                {x: -1, y: 1},
                {x: 1, y: 0},
                {x: -1, y: 0},
                {x: 0, y: -1}
            ];
            
            for (let dir of directions) {
                let newX = pixel.x + dir.x;
                let newY = pixel.y + dir.y;
                
                if (newX >= 0 && newY >= 0 && newX < width && newY < height) {
                    let targetPixel = pixelMap[newY]?.[newX];
                    if (!targetPixel || targetPixel.element === "air" || targetPixel.element === "water") {
                        pixel.x = newX;
                        pixel.y = newY;
                        break;
                    }
                }
            }
        }
        
        // Freeze when touching cold
        if (Math.random() < 0.05) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (pixelMap[y]?.[x]?.element === "ice") {
                pixel.element = "ice";
            }
        }
        
        // Reproduce in water
        if (Math.random() < 0.0003) {
            createPixel("water_spirit", pixel.x, pixel.y - 1);
        }
    },
    
    reactions: {
        "fire": { elem2: "steam", chance: 0.5 }
    }
};