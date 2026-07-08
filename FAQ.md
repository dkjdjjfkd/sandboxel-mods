# ❓ Frequently Asked Questions (FAQ)

## Getting Started

### Q: What is Sandboxels?
**A:** Sandboxels is a free 2D falling sand simulation game where you create, destroy, and experiment with physics. It's like a digital sandbox where you can paint with different materials and watch them interact!

**Link:** https://sandboxels.r74n.com/

---

### Q: What are mods?
**A:** Mods (modifications) are custom code that adds new elements, creatures, and interactions to Sandboxels. These mods extend the game without changing the official game files.

---

### Q: Do I need to download anything?
**A:** No! Everything is browser-based. Just visit Sandboxels and paste code into the console. No downloads, no installation software needed.

---

## Installation & Setup

### Q: How do I install these mods?
**A:** Three methods:

**Method 1 - Console (Easiest):**
1. Open Sandboxels
2. Press `F12` → go to **Console** tab
3. Copy code from a `.js` file
4. Paste & press Enter

**Method 2 - Tampermonkey (Persistent):**
1. Install Tampermonkey extension
2. Create new script
3. Paste mod code
4. Save - loads automatically!

**Method 3 - Bookmarklet (No Extensions):**
1. Create a bookmark with the mod code URL
2. Click bookmark to load instantly

---

### Q: Which method should I use?
**A:** 
- **School/Restricted Computer?** → Console method
- **Want mods every visit?** → Tampermonkey
- **Quick testing?** → Bookmarklet
- **Can't use any of these?** → Test at home later

---

### Q: Can I use this on my school computer?
**A:** The console method should work! Just open Sandboxels and F12. If F12 is blocked, try one of these:
- Right-click → Inspect
- Ctrl+Shift+I
- Different browser
- Try at home on unrestricted network

---

### Q: My school computer blocks F12. What do I do?
**A:** 
1. Try right-clicking and selecting "Inspect Element"
2. Try `Ctrl+Shift+I` instead
3. Use a different browser (Firefox, Safari, Edge)
4. Test the mods at home on your personal device
5. Ask your IT department (unlikely to work, but worth asking!)

---

## Mods & Features

### Q: What mods are included?
**A:** 8 creature mods:
- 👶 **Baby** - Cute, explores sandbox
- 🐛 **Ant** - Tunnels through sand
- 🔥 **Phoenix** - Fire creature, resurrects
- 💧 **Water Spirit** - Intelligent liquid creature
- ⚡ **Spark** - Electrical creature, causes fire
- 🌱 **Seed** - Plants that grow
- 👻 **Ghost** - Phases through walls
- 🤖 **Robot** - Mechanical worker

See README.md for full details!

---

### Q: Where do I find my mod once it's loaded?
**A:** Look in the **Life** category in the element menu. All these mods appear there!

---

### Q: Can I combine multiple mods?
**A:** **YES!** Load multiple mods in the console one after another:
```javascript
// Load baby
[paste baby.js code]
// Then load ant
[paste ant.js code]
// Then load phoenix
[paste phoenix.js code]
```

Now all three interact in your sandbox! 🎉

---

### Q: Do the creatures interact with each other?
**A:** Some do! For example:
- **Baby + Water** → Baby reproduces
- **Phoenix + Ash** → Phoenix resurrects
- **Spark + Flammable** → Creates fire
- **Seed + Water** → Grows faster

Try different combinations!

---

### Q: Why isn't my creature appearing?
**A:** 
1. Check the **Life** category (not other categories)
2. Did the code paste completely?
3. Are you in the **Console** tab (not Elements)?
4. Try refreshing and re-pasting
5. Check for red errors in console (screenshot and ask for help)

---

## Troubleshooting

### Q: The mod code gives an error. Help!
**A:** Common fixes:
1. **Copy-paste error?** → Copy the ENTIRE code from start to finish
2. **Wrong tab?** → Make sure you're in **Console**, not Elements
3. **Corrupted copy?** → Try copying again
4. **Browser issue?** → Try a different browser
5. **Share the error** → Screenshot and ask on Discord/GitHub

---

### Q: My mod disappeared after I refreshed the page!
**A:** That's normal. Console mods are temporary. To make them permanent:
- Use **Tampermonkey** for auto-loading
- Or bookmark the code for quick re-pasting
- Or create a bookmarklet

---

### Q: The creature isn't moving. It's just sitting there.
**A:** 
1. School network might block certain JavaScript functions
2. Try on a different network (home, library, mobile hotspot)
3. Try a different browser
4. Check the browser console for errors (F12)

---

### Q: Can I use these mods on mobile?
**A:** 
- **Desktop browsers:** Yes, works great
- **Mobile Safari/Chrome:** Limited - hard to access console
- **Recommendation:** Use desktop/laptop for best experience

---

### Q: Is this legal/allowed?
**A:** 
- **Yes!** Sandboxels allows and encourages mods
- These mods are free to use and share
- No credit needed (but appreciated!)
- No malicious code - all open source on GitHub

---

## Customization & Advanced

### Q: Can I change a mod's colors?
**A:** **YES!** 
```javascript
elements.baby = {
    color: "#ff00ff",  // Change this hex code!
    // ...rest of code
}
```

Find hex colors here: https://www.color-hex.com/

---

### Q: Can I make creatures move faster/slower?
**A:** **YES!** Look for `Math.random() < 0.3` in the code:
```javascript
if (Math.random() < 0.3) {  // Change 0.3!
    // 0.5 = faster
    // 0.1 = slower
}
```

---

### Q: Can I make creatures bigger?
**A:** **YES!** But it's more complex. Look for the `behavior` line and modify the pattern. Ask on Discord for help!

---

### Q: Can I create my own mod?
**A:** **YES!** 
1. Learn basic JavaScript
2. Check the Sandboxels wiki: https://sandboxels.wiki
3. Look at these mod examples
4. Start simple (single element)
5. Test in console
6. Share on GitHub!

---

### Q: How do I submit my mod?
**A:** 
1. Create a `.js` file
2. Push to GitHub
3. Share the link
4. Ask to be included in this collection (via GitHub issue)
5. Or start your own mod pack!

---

## Technical Questions

### Q: What language are these mods written in?
**A:** **JavaScript!** The same language that powers web browsers. No special tools needed - just JavaScript!

---

### Q: Can mods break Sandboxels?
**A:** No! Mods only affect your browser session. Refresh the page and everything is back to normal. No permanent damage possible!

---

### Q: How do tick functions work?
**A:** `tick` is a function that runs **every frame** (60 times per second) for each pixel:
```javascript
tick: function(pixel) {
    // This runs 60 times per second for each creature
    // pixel.x, pixel.y = location
    // pixel.element = what it is
}
```

---

### Q: What are reactions?
**A:** Reactions define what happens when elements touch:
```javascript
reactions: {
    "water": { elem2: "mud", chance: 0.5 }  
    // When this touches water, 50% chance water becomes mud
}
```

---

### Q: Can I make elements that react with each other?
**A:** **YES!** Add reactions to your mod. Example:
```javascript
reactions: {
    "fire": { elem2: "ash", chance: 0.8 },     // Fire turns to ash
    "water": { elem2: "steam", chance: 0.5 }   // Water becomes steam
}
```

---

## GitHub & Sharing

### Q: How do I share my mods?
**A:** 
1. Create a GitHub repository (free!)
2. Add your `.js` files
3. Write a good README
4. Share the GitHub link with friends
5. More people = more feedback!

---

### Q: Can I fork this repository?
**A:** **YES!** Feel free to:
- Fork and modify
- Add your own mods
- Improve documentation
- Submit pull requests
- Create your own version

---

### Q: Where's the Discord?
**A:** Join the Sandboxels community:
- **Official Discord:** https://discord.gg/4YtWtS7P53
- Share mods, get help, meet other creators!

---

## Performance & Optimization

### Q: Why is my game lagging with these mods?
**A:** 
- **Many creatures?** → They use CPU power
- **Solution:** Reduce the number of creatures or their speed
- **Adjust:** Change `Math.random() < 0.3` to a lower number like `0.1`

---

### Q: How many mods can I load at once?
**A:** Theoretically unlimited, but:
- 2-3 mods = smooth
- 4-6 mods = might lag
- 8+ mods = probably laggy
- Depends on your computer

**Tip:** Use fewer creatures initially!

---

### Q: Can I reduce lag?
**A:** 
1. Load fewer mods
2. Lower the `Math.random()` values
3. Make creatures less active
4. Reduce creature count
5. Use a faster computer

---

## Still Have Questions?

### Where can I get help?

1. **GitHub Issues** → https://github.com/dkjdjjfkd/sandboxel-mods/issues
2. **Sandboxels Discord** → https://discord.gg/4YtWtS7P53
3. **Sandboxels Wiki** → https://sandboxels.wiki
4. **This README** → https://github.com/dkjdjjfkd/sandboxel-mods/blob/main/README.md

---

### How can I contribute?

1. **Found a bug?** → Report it on GitHub
2. **Have ideas?** → Submit suggestions
3. **Made improvements?** → Submit a pull request!
4. **Created a mod?** → Share it!

---

## Quick Troubleshooting Flowchart

```
Is the mod not appearing?
├─ Yes → Check "Life" category
│       └─ Still not there? → Try refreshing & re-pasting
│
Is there an error message?
├─ Yes → Take a screenshot
│       └─ Post on Discord for help
│
Is the creature not moving?
├─ Yes → Try at home on unrestricted network
│       └─ Still stuck? → Check browser console (F12)
│
Everything working?
└─ YES! 🎉 Have fun and create awesome things!
```

---

## Pro Tips 🌟

1. **Mix elements** - Baby + Fire = chaos!
2. **Create ecosystems** - Ants + Plants + Robots
3. **Watch patterns** - Emergent behavior is cool!
4. **Modify colors** - Make your own look
5. **Share videos** - Record your creations!
6. **Experiment** - Try weird combinations
7. **Read code** - Learn how mods work
8. **Make your own** - You can do it!

---

## Resources

- 📖 **Sandboxels Official Wiki:** https://sandboxels.wiki
- 💬 **Discord Community:** https://discord.gg/4YtWtS7P53
- 🎮 **Play Sandboxels:** https://sandboxels.r74n.com/
- 💻 **Our GitHub:** https://github.com/dkjdjjfkd/sandboxel-mods
- 🎨 **Hex Color Picker:** https://www.color-hex.com/

---

**Last Updated:** 2026-07-08  
**Have fun modding! 🚀✨**
