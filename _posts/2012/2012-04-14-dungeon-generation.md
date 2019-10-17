---
title: "Dungeon Generation"
category: archive
---
The first obstacle I wanted to tackle was how to actually generate a dungeon. The dungeon in Quill's Gambit is going to be a randomly generated set of square rooms that can be connected at the top, bottom, left, or right.

My first idea for an algorithm was a "budding" system. Where the game would randomly pick an inactive room on a grid of rooms and make it the "bud". It would then "grow" rooms in a random direction, essentially building a "branch" that twists and turns in random directions. It generated dungeons that looked like this:

Not too shabby. The issue that I had is that my initial algorithm wouldn't connect a new room to an already active room if the right direction was picked. So map generation time varied a lot, and trying to create too many rooms would result in what appeared to be an infinite loop that *might* exit at some point.

The solution was to put in a "connection chance". Some small decimal, something like 0.1, that would dictate the chance that a "branch" would connect to an existing active room if the right direction was chosen. If the chance failed, then the "bud" for generation would be placed in a random active room. This proved a much better solution and created dungeons with longer hallways and loops.

So now I have my basic room layout generator. Now I get to add all the little things in between. As you can see in the second set of pictures above, I already experimented with selecting a start location. It's just the last room that was created. That guarantees that it will only have one exit, so as not to make the player choose right off the bat.