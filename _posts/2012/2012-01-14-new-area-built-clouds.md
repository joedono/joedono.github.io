---
title: "New Area Built - Clouds"
category: archive
---
I think I'm going to stick to the Run upgrade. Being able to move at 2.5x speed when the player is already so slow is a great improvement. So great, in fact, that I'm starting to consider upping the player's initial movement speed. It just doesn't seem natural that the character can jump 5x his height but can only travel 2 tiles horizontally when jumping. Here are some screenshots of the new area, without textures:

I've also gone back and moved the boundedBoxes for the room transitions off-screen. You may notice that they don't show up as the ugly red boxes anymore. This makes it so that the player doesn't transition between rooms until they actually touch the border of the window. I had to retouch up a few of the platforms so that navigation between all the rooms was still possible, but I think it functions a lot better now.