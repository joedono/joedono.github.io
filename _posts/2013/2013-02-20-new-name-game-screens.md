---
title: "New Name & Game Screens"
category: game development
---
Given the way the particle system affected the general flavor of the game, I decided it needed a name change. After much deliberation (read, about 10 minutes), I decided on "Smoke Rush." Of course, this meant that I had to track down everywhere within the project that the word "Constriction" would be exposed to the player and change it without breaking anything. The actual project files will probably still say "Constriction" but it was only a working title anyway.

In other news, I have new screenshots. It's looking like I'll be using the same flow I used for Inkscape: Title Screen -&gt; Controls -&gt; Play -&gt; Game Over -&gt; Title Screen. It seems to work well, it's quick and easy, it tells the player what they need to know, and it doesn't take up too much of the player's time.

Pretty much all I have left are effects and some balance tweaking. I'm going to refactor the way the game handles its state. Currently, game state is just a variable in the MainGame class and the Update and Draw functions have big switch statements in them. I'm going to break out an IGameState class that each state will inherit from. This should make it easier to have more complex effects on each screen and a splash screen or two. I have an entire Trello task for "Add Juice to Title Screen." I'm thinking something like having a big smoke-ball shoot over the screen that the title will appear behind, or maybe have the smokey darkness constrict on the screen, then pull away to reveal the title. I'm not sure.

The very last thing I want to try is converting the player to use mouse control instead of keyboard control. That will probably make the game too easy, but it will make the game more accessible to my playtesters, most of whom are not hard-core PC gamers.