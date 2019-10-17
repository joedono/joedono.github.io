---
title: Ray Gun Behavior
category: game development
---
Here it is! Another brainstorming post!!

I need to decide how I want the alien ray gun to behave during the game. The main concept I want to use is that this has to be easy to avoid when the controls are normal, but really hard to avoid if the controls are reversed. That lands me on a projectile that's large enough to take up an entire hallway so that it cannot be dodged by moving a little to the side, and one that tracks the player a little, so they have to make, at minimum, two changes in direction.

My first idea would have required some smart grid snapping so that the projectile was always in the center of the hallway, and two colliders so that if the alien fired it in a smaller hallway, it wouldn't collide with the walls around it before it could get going and threaten the player. Another idea was to have the projectile use the same pathfinding code as the rest of the monsters and ignore collisions with the walls. If I set it on a good enough timer, or made it smart enough, I could make it force the player to make a couple of turns before the projectile dissipates. The problem then is what happens if the projectile is fired from one of the wider rooms. I've already had a couple of times where the paths that I've set up in rooms have caused enemies to juke the player and cause a quick loss. I plan on eventually fixing that...somehow, but I want to try to avoid that with these projectiles. Or do I? Do I bother trying to fix that now?

I also don't want the pathfinding to be TOO smart. Having the projectile juke this way and that could appear extremely weird in some situations. Maybe I have the projectile move more slowly the closer it gets to the player. Or maybe I could have the projectile only redirect itself at the player when it bounces off a wall. The bouncing doesn't seem like a good idea. There are too many corners too close together for the bouncing to work without more complicated pathfinding.

This is tough...

I think pathfinding, direct and continuous player chasing, and a slow-ish movement speed will probably be the way to go for a first pass at this. The projectile will be 32*3 wide and tall and not bother interacting with walls since it's going to use the same paths as the rest of the monsters and I don't want it to get stuck. It's life will be determined by a semi-random timer rather than having it live through a certain number of turns. 