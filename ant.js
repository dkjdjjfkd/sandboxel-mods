// Ant Mod for Sandboxels
// Tiny worker creatures that tunnel through sand and move in swarms

elements.ant = {
    color: "#8B4513",           // Brown color
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    density: 300,
    description: "Tiny ant creature that tunnels and swarms!",
    
    tick: function(pixel) {
        // Swarm behavior - move towards other ants
        if (Math.random() < 0.4) {
            let directions = [
                {x: 1, y: 0},
                {x: -1, y: 0},
                {x: 0, y: 1},
                {x: 0, y: -1},
                {x: 1, y: 1},
                {x: -1, y: -1}
            ];
            
            let dir = directions[Math.floor(Math.random() * directions.length)];
            let newX = pixel.x + dir.x;
            let newY = pixel.y + dir.y;
            
            if (newX >= 0 && newY >= 0 && newX < width && newY < height) {
                let targetPixel = pixelMap[newY]?.[newX];
                
                // Tunnel through sand and powder
                if (!targetPixel || targetPixel.element === "sand" || targetPixel.element === "powder" || targetPixel.element === "air") {
                    pixel.x = newX;
                    pixel.y = newY;
                }
            }
        }
        
        // Create tunnels by removing sand
        if (Math.random() < 0.1) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (pixelMap[y]?.[x]?.element === "sand") {
                pixelMap[y][x].element = "air";
            }
        }
        
        // Reproduce near other ants
        if (Math.random() < 0.0005) {
            createPixel("ant", pixel.x + Math.floor(Math.random() * 3) - 1, pixel.y + Math.floor(Math.random() * 3) - 1);
        }
    }
};