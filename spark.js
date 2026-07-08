// Spark Mod for Sandboxels
// Tiny electrical creatures that travel through conductive materials!

elements.spark = {
    color: "#FFFF00",           // Bright yellow
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    density: 200,
    description: "An electrical spark creature that glows!",
    
    tick: function(pixel) {
        // Move erratically like electricity
        if (Math.random() < 0.5) {
            let directions = [
                {x: 2, y: 0},
                {x: -2, y: 0},
                {x: 0, y: 2},
                {x: 0, y: -2},
                {x: 1, y: 1},
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
        
        // Light up surroundings
        if (Math.random() < 0.15) {
            let x = pixel.x + Math.floor(Math.random() * 4) - 2;
            let y = pixel.y + Math.floor(Math.random() * 4) - 2;
            if (x >= 0 && y >= 0 && x < width && y < height) {
                if (Math.random() < 0.3) {
                    createPixel("fire", x, y);
                }
            }
        }
        
        // Travel through metal
        if (Math.random() < 0.1) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (pixelMap[y]?.[x]?.element === "metal") {
                pixel.x = x;
                pixel.y = y;
            }
        }
    }
};