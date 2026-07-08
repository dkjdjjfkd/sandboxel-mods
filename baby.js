// Baby Mod for Sandboxels
// A cute pixel-sized creature that moves around the sandbox

elements.baby = {
    color: "#ffb3d9",           // Cute pink color
    behavior: [
        ["XX", "XX"],           // 2x2 pixel baby
    ],
    category: "life",            // Put it in the Life category
    state: "solid",
    density: 500,
    description: "A tiny baby that moves around!",
    
    // Custom tick function to make it move
    tick: function(pixel) {
        // Move randomly in a direction
        if (Math.random() < 0.3) {
            let directions = [
                {x: 1, y: 0},   // Right
                {x: -1, y: 0},  // Left
                {x: 0, y: 1},   // Down
                {x: 0, y: -1}   // Up
            ];
            
            let dir = directions[Math.floor(Math.random() * directions.length)];
            let newX = pixel.x + dir.x;
            let newY = pixel.y + dir.y;
            
            // Check if space is empty or has something it can move to
            if (newX >= 0 && newY >= 0 && newX < width && newY < height) {
                let targetPixel = pixelMap[newY]?.[newX];
                
                // Move if space is empty or it's a liquid
                if (!targetPixel || targetPixel.element === "water" || targetPixel.element === "air") {
                    pixel.x = newX;
                    pixel.y = newY;
                }
            }
        }
        
        // Occasionally create more babies (reproduction)
        if (Math.random() < 0.001) {
            createPixel("baby", pixel.x + Math.floor(Math.random() * 3) - 1, pixel.y + Math.floor(Math.random() * 3) - 1);
        }
    },
    
    // Baby reacts with food (optional - you can remove this)
    reactions: {
        "water": { elem2: "baby", chance: 0.1 }  // Grows when touching water
    }
};
