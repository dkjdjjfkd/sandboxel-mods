// Seed Mod for Sandboxels
// Plant life that grows and spreads across the sandbox!

elements.seed = {
    color: "#228B22",           // Forest green
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    density: 600,
    description: "A magical seed that grows into plants!",
    
    tick: function(pixel) {
        // Grow into vines
        if (Math.random() < 0.1) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y - 1;  // Grow upward
            
            if (x >= 0 && y >= 0 && x < width && y < height) {
                let targetPixel = pixelMap[y]?.[x];
                if (!targetPixel || targetPixel.element === "air") {
                    createPixel("seed", x, y);
                }
            }
        }
        
        // Spread horizontally
        if (Math.random() < 0.08) {
            let x = pixel.x + (Math.random() < 0.5 ? 1 : -1);
            let y = pixel.y;
            
            if (x >= 0 && x < width && y >= 0 && y < height) {
                let targetPixel = pixelMap[y]?.[x];
                if (!targetPixel || targetPixel.element === "air") {
                    createPixel("seed", x, y);
                }
            }
        }
        
        // Grow faster in water
        if (Math.random() < 0.05) {
            let x = pixel.x + Math.floor(Math.random() * 3) - 1;
            let y = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (pixelMap[y]?.[x]?.element === "water") {
                createPixel("seed", pixel.x, pixel.y - 1);
            }
        }
    }
};