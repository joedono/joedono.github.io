---
title: Actually Brainstorming
category: game development
---
Hokay. Now I'm actually going to buckle down and work through this. What kind of behavior do I want from my Ghost? I know that I want him to be able to move through walls, but I'm not sure how to have him detect the player. Maybe I don't. Maybe the real meat of this scenario is in the second phase, like it is with the Burglar. The ghost will come directly for you while you're reading the book. Maybe that's enough. Maybe I can finally include a mechanic that involves turning off your flashlight. Maybe the ghost has a random chance to go chasing after you, but will only interact with you if you leave your flashlight on or move. So...

* Idle - Ghost isn't moving. Randomly choose between moving to a random node and chasing the player.
* Moving - Moving to a random node.
* Chasing - Run after the player. Update the target to the player's current location so long as the player leaves their flashlight on.
* Patrolling - Was chasing after the player, but reached target spot and can't find the player. Move around randomly a little and then switch to Moving.

And...I think that's it? It seems like it might be too easy. All the player has to do is turn off their flashlight and they'll completely avoid detection. Is there a way I can make this more suspenseful? Maybe have the ghost have a random chance to see the player? I don't like that. It takes away player agency completely. Maybe I give the ghost a detection radius, like the vampire has. That might make it more suspenseful. If you have your flashlight on when the ghost gets a random whiff of you, he'll come after you. If you move while within his aura, he'll come after you. If you do neither, he can't see or hear you and won't interact with you at all. Maybe I don't need the "randomly go straight after the player" thing. All I need is the detection aura. Make that auras. If you're in the bigger one and your flashlight is on, the ghost will come after you. If you're in the smaller one and you move, the ghost will come after you.

Now, what to do about visibility? Do I make the ghost always visible? Maybe I could make it fade in and out of visibility. It'll just sort of pulse every so often, kind of like the vampire, but more accurate. I can probably change the coloring of the light instead of the size. I should probably do that with the items too. They're pulsing size plays weird tricks when trying to figure out which items are which. I'll have to play with the flash rate for the ghost, and maybe make it show brightly if it's actively coming after the player.

Let's give that a try and see how it works.