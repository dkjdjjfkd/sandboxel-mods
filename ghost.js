// Ghost Mod for Sandboxels
// A mysterious spectral entity that phases through solid objects!

elements.ghost = {
    color: "#F0F8FF",           // Alice blue / ghostly white
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    density: 50,               // Very light
    description: "A spectral ghost that phases through walls!",
    
    tick: function(pixel) {
        // Move through ANY material (even solids!)
        if (Math.random() < 0.25) {
            let directions = [
                {x: 1, y: 0},
                {x: -1, y: 0},
                {x: 0, y: 1},
                {x: 0, y: -1},
                {x: 1, y: -1},
                {x: -1, y: 1}
            ];
            
            let dir = directions[Math.floor(Math.random() * directions.length)];
            let newX = pixel.x + dir.x;
            let newY = pixel.y + dir.y;
            
            if (newX >= 0 && newY >= 0 && newX < width && newY < height) {
                // PHASE THROUGH ANYTHING!
                pixel.x = newX;
                pixel.y = newY;
            }
        }
        
        // Leave shimmering trails
        if (Math.random() < 0.2) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (x >= 0 && y >= 0 && x < width && y < height) {
                if (Math.random() < 0.5) {
                    createPixel("air", x, y);  // Create ethereal effect
                }
            }
        }
        
        // Unpredictable teleportation
        if (Math.random() < 0.02) {
            pixel.x = Math.floor(Math.random() * width);
            pixel.y = Math.floor(Math.random() * height);
        }
    }
};