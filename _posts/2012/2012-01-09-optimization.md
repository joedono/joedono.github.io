---
title: "Optimization"
category: archive
---
I successfully optimized Wizard Plumber. I used implement the pipes as Node objects. Each Node had a main Particle Receiver so that Particles couldn't just breeze on through in the wrong direction, and at least 2 Receiver/Emitter pairs for each end of the pipe. That meant that an X-pipe junction had 9 objects to keep track of, and each one had to be checked for collisions with the Particles.

Now, the pipes are the much simpler Pipe objects. They have one bounded box and a list of acceptable directions. Whenever a particle collides with the Pipe object, the object checks the Particle's direction. If the direction is on the Pipe's list of acceptable directions, the Pipe emits particles in each other direction on its list. I may not have improved the efficiency a whole lot (It didn't go from O(n2) to O(log(n))), but the difference between being able to only have 2000 particles on screen before the frame rate starts to suffer and having 8000 particles is huge! And just what I needed to keep things smooth.

The next change will be to fix the code that creates the Magic Pipes. Currently, the game checks if the line you draw intersects the emit-line that comes out of any of the pipes, regardless if there's another pipe in between or if you're drawing between two pipes. I'm going to have it track the flow of water instead. The Water System is going to build an array of lines each time you try creating a Magic Pipe that will represent the flow of water, and THAT is the array that will be checked for intersections.