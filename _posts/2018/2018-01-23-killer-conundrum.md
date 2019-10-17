---
title: Killer Conundrum
category: game development
---
I finished up the Arsonist scenario this week. I think I've been doing a pretty good job so far of keeping the scenarios balanced. The wolves hunt by sound and there are three of them. The panther is just one, can hunt by scent, and is stealthy. The burglar knows where you are immediately after using the cell phone. The arsonist also knows where you are, but moves slower and sets your house on fire. The killer...is turning out to be identical to the burglar with several upgrades. He has a gun and is immune to the taser unless you know about the heater in the basement. I had thought about making his sight cone shorter, but any shorter than the burglar seems too short. One thing I could do is add a second burglar, but that would make the end chase weird as hell. Maybe it'll be enough if I just find a good length for the killer's sight cone and slow his normal movement speed. Actually...I just got another idea. What if there was no fuse in the basement. I just remove the taser from the equation and force the player to evade the killer until the police arrived. Right now, the two scenarios that involve calling the police have the threat immediately know where you are when you place the call. I could make it so the killer moves much faster when panicked, but doesn't actually know where you are. I can balance that by not including the taser and letting the killer keep his gun. And then I can keep the thread up by letting the killer have the same ability when panicked as the panther has normally. Every so often, his "killer instincts" will home in on your position, so you have to keep moving.

Ok, so the new behavior for the killer scenario is:
* Walks around randomly, more slowly than the burglar
* Hunts by sight
* Has a gun. Can kill the player from a distance
* Can be seen at all times by the player (no stealth)
* Calling the police will panic the killer
* When panicked, move randomly around the level, but faster than the walk speed
* When panicked, every so often, home in on the player's location via "killer instinct" so that the player can't just sit still

I'm starting to really like this. It takes care of the biggest issue where the killer would actively hunt the player in the second half with a weapon that severely outclasses the taser. The one downside here is that I've found an excuse to put off learning how to write shaders. I'm pretty sure I was going to have to write a shader in order to get the wobbly "heated" effect I wanted.