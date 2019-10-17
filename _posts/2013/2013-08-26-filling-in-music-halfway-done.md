---
title: "Filling in the Music - Halfway Done"
category: game development
---
It's been a rough month. I haven't had much time to work on 1GAM. I finally managed to make some progress despite Final Fantasy XIV launching this past weekend (my first MMO!! Yay!!). I'm keeping this game really simple, which means I've managed to get about halfway done with just a couple days work.

The game has a fairly complex algorithm for generating the holes that the player has to fill in. I could have gone with pixel perfect collision. The game area is only 400x400, but I wanted this simple concept to have some challenge.

The level generation works like this. The game generates a series of squares at random intervals that grow at a set rate. These form the "positive" squares for the game area. In the screenshot, these squares are a greenish-blue and have red Xs in them. The problem comes when I have to generate the "negative" space that will be used for collision and score calculation. This space cannot have any overlapping boxes. The boxes I have so far are black with white Xs in them in the screenshot.

I take all the "positive" boxes and create "events" for their tops and bottoms. Then, I start at the top of the game area and create a negative box that spans the area. I extend that negative box down until it hits an "event." If the event is the top of a positive box, I split the negative box into two new negative boxes and continue growing them. If the event is the bottom of a positive box, I combine the two boxes that hit it and start growing that one. Now, there is some special logic for when the positive boxes overlap, which is where I'm currently having trouble. I've got it worked out, but it's harder to implement in C++ since I don't know it as well.

In any case, I've got the level generation to the point where it processed top events without too much trouble. After I get it processing bottom events, it will be easy to process player input and calculate score. The final piece will be adding sound. I'll probably use a piano scale and pick a random note every time the player creates a new box.