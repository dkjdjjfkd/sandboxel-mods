// Robot Mod for Sandboxels
// A mechanical creation that performs automated tasks!

elements.robot = {
    color: "#C0C0C0",           // Silver/metallic
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    density: 1500,              // Heavy
    description: "A mechanical robot with systematic movement!",
    
    tick: function(pixel) {
        // Systematic, organized movement
        if (Math.random() < 0.35) {
            // Move in a somewhat predictable pattern
            let move = Math.floor(pixel.x / 10) % 4;  // Create zones
            let newX = pixel.x;
            let newY = pixel.y;
            
            if (move === 0) newX += 1;      // Move right
            else if (move === 1) newY += 1; // Move down
            else if (move === 2) newX -= 1; // Move left
            else newY -= 1;                 // Move up
            
            if (newX >= 0 && newY >= 0 && newX < width && newY < height) {
                let targetPixel = pixelMap[newY]?.[newX];
                if (!targetPixel || targetPixel.element === "air") {
                    pixel.x = newX;
                    pixel.y = newY;
                }
            }
        }
        
        // Push other elements
        if (Math.random() < 0.1) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (pixelMap[y]?.[x] && pixelMap[y][x].element !== "air" && pixelMap[y][x].element !== "robot") {
                // Gently push the element
                if (Math.random() < 0.5) {
                    pixelMap[y][x].x += 1;
                }
            }
        }
        
        // Create order by clearing sand around it
        if (Math.random() < 0.05) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (pixelMap[y]?.[x]?.element === "sand" && Math.random() < 0.3) {
                pixelMap[y][x].element = "air";
            }
        }
    }
};