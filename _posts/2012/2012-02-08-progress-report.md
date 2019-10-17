---
title: "Progress Report"
category: archive
---
So I've been working on this for about 3 days, and it's looking pretty good. Candlehead marks a couple of firsts for me. This is the first time that I've given the player the ability to customize their controls. It is also the first time that I've done anything with lighting and shadows. I had to increase the size of the screen a little. It turns out that an 800x600 resolution isn't evenly dividable into 32x32 tiles.

There isn't much to the lighting code. It's just a screen-sized image that's drawn in a semi-transparent black. I have a sprite of a transparent radial gradient (goes from black to transparent as you move to the center) that I scale based on the strength of the light. I don't know if other game libraries do this, but Pygame's default scaling transform asks for a specific size rather than a multiplier. So that's nice. I realize that not all computers have the same brightness, so I'll be adding a slider to the options screen so the player can change the brightness.

I built the basic platforming engine and implemented a simple tileset. The player can also adjust the strength of the candle flame at the cost of changing the rate at which they run out of wax. There is going to be a lot of tweaking as far as the wax drain rate, the player movement speed, and the flame strength. But they all work.

Finally, I have the basic classes for the two (technically, three) types of enemies: Timid Monstrosity Walk, Timid Monstrosity Fly, and Roaming Monstrosity. They're just placeholders for now. I've only really drawn the main character.

Now...SCREENSHOTS

The start of a game screen. The player is visible in the middle with a light source. The three enemies are visible at the bottom. The two Timid monstrosities are marked by their white eyes that you will be able to see in the dark.