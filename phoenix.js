// Phoenix Mod for Sandboxels
// A mystical fire creature that rises from ashes!

elements.phoenix = {
    color: "#FF6347",           // Fiery red
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    density: 400,
    description: "A legendary phoenix that resurrects from ashes!",
    
    tick: function(pixel) {
        // Move around like fire
        if (Math.random() < 0.3) {
            let directions = [
                {x: 1, y: 0},
                {x: -1, y: 0},
                {x: 0, y: 1},
                {x: 0, y: -1},
                {x: 1, y: -1},
                {x: -1, y: -1}
            ];
            
            let dir = directions[Math.floor(Math.random() * directions.length)];
            let newX = pixel.x + dir.x;
            let newY = pixel.y + dir.y;
            
            if (newX >= 0 && newY >= 0 && newX < width && newY < height) {
                pixel.x = newX;
                pixel.y = newY;
            }
        }
        
        // Create fire around it
        if (Math.random() < 0.2) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (x >= 0 && y >= 0 && x < width && y < height) {
                createPixel("fire", x, y);
            }
        }
        
        // Occasionally die and become ash
        if (Math.random() < 0.001) {
            pixel.element = "ash";
        }
    },
    
    reactions: {
        "ash": { elem2: "phoenix", chance: 0.3 }  // Phoenix resurrects from ash!
    }
};