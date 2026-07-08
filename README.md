# 🎮 Sandboxels Mods Collection

Welcome to an awesome collection of custom mods for **[Sandboxels](https://sandboxels.r74n.com/)**! This repo contains creative, fun, and interactive elements to enhance your sandbox experience.

---

## 📚 Table of Contents

- [About](#about)
- [Mods Included](#mods-included)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Credits](#credits)

---

## 🌟 About

**Sandboxels** is a 2D falling sand simulation game where you create, destroy, and experiment with physics. These mods add new elements, creatures, and interactions to expand your creative possibilities!

This collection is designed to be easy to use and beginner-friendly while offering enough depth for advanced players.

---

## 🎯 Mods Included

### 1. 👶 **Baby** (Life Category)
A cute, pixel-sized creature that explores your sandbox!

**Features:**
- 🏃 Moves autonomously around the sandbox
- 🔄 Reproduces when near water
- 💕 Pink, adorable 2x2 pixel design
- 🧠 Smart pathfinding (avoids obstacles)

**Visual:**
```
[██] ← Baby creature exploring!
```

**Example Interactions:**
- Baby walks around freely
- Babies can pass through water
- Multiple babies can form colonies!

---

### 2. 🐛 **Ant** (Life Category)
Tiny worker creatures that tunnel through sand and move in swarms!

**Features:**
- 🚶 Moves through sand and powder
- 👥 Swarm behavior (follows other ants)
- 🏗️ Creates tunnels as it moves
- ⚡ Fast and energetic

**Example Interactions:**
- Ants create pathways through sand
- Multiple ants coordinate movement
- Fascinating emergent behavior!

---

### 3. 🔥 **Phoenix** (Life Category)
A mystical creature made of fire that rises from ashes!

**Features:**
- 🔥 Made of pure fire
- 💀 Dies and turns to ash
- 🌅 Resurrects from its own ashes
- 🌡️ Melts nearby materials

**Example Interactions:**
- Phoenix ignites flammable materials
- Creates beautiful fire trails
- Watch it cycle through rebirth!

---

### 4. 💧 **Water Spirit** (Life Category)
A fluid, ethereal creature that flows like water but thinks like a creature!

**Features:**
- 💦 Flows and adapts to terrain
- 🌊 Moves faster in water
- ❄️ Can freeze into ice temporarily
- 🎭 Changes form based on environment

**Example Interactions:**
- Flows downhill intelligently
- Merges with water bodies
- Creates ice sculptures when cold

---

### 5. ⚡ **Spark** (Life Category)
Tiny electrical creatures that travel through conductive materials!

**Features:**
- ⚡ Travels through metal and sand
- 💡 Lights up surroundings
- 🔌 Jumps between conductive paths
- 🌟 Glows brightly

**Example Interactions:**
- Creates electrical chains
- Illuminates dark areas
- Can ignite flammable materials

---

### 6. 🌱 **Seed** (Life Category)
Plant life that grows and spreads across your sandbox!

**Features:**
- 🌿 Grows into vines
- 🌳 Spreads to adjacent areas
- 💚 Green and vibrant
- 🍃 Creates forests

**Example Interactions:**
- Seeds grow faster in water
- Can spread across solid ground
- Creates intricate plant networks

---

### 7. 👻 **Ghost** (Life Category)
A mysterious spectral entity that phases through solid objects!

**Features:**
- 👻 Passes through walls
- 🌀 Floating, ethereal movement
- 🎆 Leaves shimmering trails
- 🕯️ Slightly translucent

**Example Interactions:**
- Can move through any material
- Creates haunting visual effects
- Unpredictable movement patterns

---

### 8. 🤖 **Robot** (Life Category)
A mechanical creation that performs automated tasks!

**Features:**
- ⚙️ Systematic, organized movement
- 🎯 Follows programmed paths
- 🔧 Can move heavy objects
- 🤖 Metallic appearance

**Example Interactions:**
- Pushes other elements
- Creates orderly structures
- Excellent for building projects

---

## 🚀 Installation

### Method 1: Browser Console (Simplest)

1. **Open Sandboxels**
   - Go to https://sandboxels.r74n.com/

2. **Open Developer Console**
   - Press `F12` (or `Ctrl+Shift+I` on Windows, `Cmd+Option+I` on Mac)
   - Click the **Console** tab

3. **Load a Mod**
   - Copy the code from any `.js` file in this repo
   - Paste it into the console
   - Press **Enter**
   - Your mod is now active!

4. **Find Your Element**
   - Look in the appropriate category (usually **Life**)
   - Start painting with your new element!

### Method 2: Tampermonkey (Persistent - Recommended)

**For Home Use:**

1. **Install Tampermonkey**
   - [Chrome/Edge](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobp)
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
   - [Safari](https://www.tampermonkey.net/safari.php)

2. **Create New Script**
   - Click Tampermonkey icon → **Create a new script**

3. **Paste This Template:**
```javascript
// ==UserScript==
// @name         Sandboxels Baby Mod
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a baby creature to Sandboxels
// @author       You
// @match        https://sandboxels.r74n.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // PASTE THE MOD CODE HERE
})();
```

4. **Paste mod code between the parentheses**

5. **Save and reload Sandboxels** - Mod loads automatically!

### Method 3: Direct Copy (No Tools Needed)

1. Open this repo
2. Click any `.js` file
3. Copy the raw code
4. Paste into Sandboxels console
5. Done!

---

## 📖 Usage Guide

### Basic Usage

**Step 1: Load a Mod**
```
Console → Paste Code → Press Enter
```

**Step 2: Find Your Element**
- Open the element menu
- Look in the **Life** category
- Select your new element

**Step 3: Paint & Experiment**
- Click to place elements
- Watch them interact!
- Combine with other elements

### Advanced: Combining Mods

Load multiple mods at once for emergent gameplay:

```javascript
// Load Baby
elements.baby = { /* code */ }

// Load Ant
elements.ant = { /* code */ }

// Load Fire
elements.fire = { /* code */ }

// Now all three interact!
```

### Creating Interactions

Mods interact based on reactions defined in the code. For example:

- **Baby + Water** → Baby reproduces
- **Ant + Sand** → Ant tunnels
- **Phoenix + Ash** → Phoenix resurrects

Experiment with combinations!

---

## 🎨 Customization

Want to modify a mod? Easy!

### Change Colors
```javascript
elements.baby = {
    color: "#ff00ff",  // Change this hex code
    // ...
}
```

**Color Picker:** Use [this tool](https://www.color-hex.com/) to find hex codes!

### Adjust Speed
```javascript
if (Math.random() < 0.3) {  // Change 0.3 to adjust speed
    // Higher = faster
    // Lower = slower
}
```

### Modify Size
```javascript
behavior: [
    ["XX", "XX"],  // 2x2 pixels
    // Add more X's for larger creatures
]
```

---

## 🐛 Troubleshooting

### "The mod isn't appearing in my menu"
- Make sure you're looking in the **Life** category
- Try reloading the page and re-pasting the code

### "The mod code gives an error"
- Check that you copied the **entire** code
- Make sure you're in the **Console** tab (not Elements)
- Try pasting into a text editor first to check for corruption

### "My mod disappeared after reload"
- Console mods are temporary! Use Tampermonkey for persistence
- Or bookmark the code for quick re-pasting

### "The creature isn't moving"
- School network might block certain functions
- Try at home on an unrestricted network
- Check browser console for error messages

---

## 📝 Tips & Tricks

1. **Mix Multiple Mods** - Load several mods for complex interactions
2. **Adjust Speed** - Modify the `Math.random()` values to change speeds
3. **Color Coordination** - Use complementary colors for visual appeal
4. **Create Ecosystems** - Build food chains with multiple creatures
5. **Experiment** - Sandboxels is about creativity, so have fun!

---

## 🤝 Contributing

Want to add your own mod? Great!

1. **Create your mod** following the existing structure
2. **Test it thoroughly**
3. **Add documentation** explaining what it does
4. **Submit a pull request** with your changes

Or just share your ideas in the issues!

---

## 📜 How Mods Work (Technical)

Sandboxels mods are JavaScript objects that extend the `elements` global:

```javascript
elements.my_element = {
    color: "#ff0000",              // Hex color code
    category: "life",              // Where it appears
    behavior: behaviors.POWDER,    // How it moves (POWDER, LIQUID, etc.)
    density: 1000,                 // Weight/density
    state: "solid",                // State of matter
    description: "My element",     // Tooltip text
    
    tick: function(pixel) {
        // Called every frame - add custom behavior here
    },
    
    reactions: {
        "water": { elem2: "mud", chance: 0.5 }  // Element interactions
    }
};
```

**Key Properties:**
- `color` - Hex color code (#RRGGBB)
- `category` - Where it appears (life, powders, liquids, etc.)
- `behavior` - Movement type
- `density` - How heavy it is
- `tick()` - Custom logic each frame
- `reactions` - What happens when it touches other elements

---

## 🎓 Learning Resources

- **[Sandboxels Wiki](https://sandboxels.wiki)** - Official documentation
- **[Element Reference](https://sandboxels.wiki/w/Elements)** - All element properties
- **[Behavior Guide](https://sandboxels.wiki/w/Behaviors)** - How elements move
- **[Official Discord](https://discord.gg/4YtWtS7P53)** - Community help

---

## 📊 Mod Statistics

| Mod | Category | Type | Complexity |
|-----|----------|------|------------|
| Baby | Life | Creature | Easy |
| Ant | Life | Creature | Medium |
| Phoenix | Life | Creature | Medium |
| Water Spirit | Life | Creature | Hard |
| Spark | Life | Creature | Medium |
| Seed | Life | Plant | Easy |
| Ghost | Life | Creature | Hard |
| Robot | Life | Creature | Medium |

---

## 🎉 Gallery

Check out what others have created with these mods:
- Ant colonies forming intricate tunnel systems
- Baby creatures multiplying and creating societies
- Phoenix cycles creating hypnotic patterns
- Water spirits flowing through complex mazes
- Spark networks lighting up the sandbox

---

## 📞 Support

Having issues? Here's what to do:

1. **Check the FAQ above** - Most common issues are solved there
2. **Check the Sandboxels Discord** - Ask the community
3. **Create an Issue** - Report bugs with details
4. **Test on Different Browsers** - Chrome, Firefox, Safari, Edge
5. **Test on Personal Device** - School networks may have restrictions

---

## 📄 License

These mods are free to use, modify, and share! No credit needed, but it's appreciated.

---

## 🌟 Credits

**Created by:** dkjdjjfkd  
**Inspired by:** The Sandboxels community  
**Special thanks to:** All the sandbox enthusiasts out there!

---

## 🚀 What's Next?

- 🎨 Create your own custom colors and behaviors
- 🔄 Combine mods for emergent gameplay
- 📚 Learn JavaScript to create advanced mods
- 🌍 Share your creations with the community
- 🎮 Have fun!

---

**Happy modding! 🎮✨**

*Last updated: 2026-07-08*
