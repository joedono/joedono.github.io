---
title: "August 1GAM - Beginning"
category: game development
---
I've got my idea for August 1GAM. I wanted to build something extremely simple, yet with one challenging aspect, and I found it. The title is Filling in the Music, and the toolset is C++ &amp; Haaf's Game Engine. I dabbled in C++ for a little while, back when I was positive it was supposed to be the be-all-end-all of programming. I learned that it isn't really a good place to start for a complete novice unless you're sure this is what you want to do. Not to mention that, the way my career ended up, it wouldn't have been the best choice.

Anyway, I'm not here to debate the pros and cons of a language I've barely used. I'm going to try it out this month and see how easy things are. I've heard good things about Haaf's Game Engine. It's a bit on the older side, but that won't stop me.

The concept of the game is essentially just filling in holes. The game will randomly generate square holes that may or may not overlap and will be different sizes. Clicking inside one of the holes will create a square that grows until it hits the edge of the hole. The player will have to position their growing squares and time when they create new ones to fill in as much of the space as possible before overlapping with the edge. Short, but sweet. And it has that one challenge I was looking for. Generating the level to the precision that I need is going to be kinda tough. I'll have to generate squares that grow for a specified number of steps. Then I have to convert the negative space around those squares into more squares that don't overlap. THEN I'll present the level to the player. I'll be able to check collisions against the negative squares and I'll be able to use the fact that they don't overlap to calculate the area the player has to cover, along with how much they end up covering.

I'm going to try to adhere to the February 1GAM Theme: Sound, by making the square creation sound effect tonal and pleasant to listen to over and over again. I'll probably end up downloading a piano scale and using that or something.

So that's the idea. I'm one weekend deep into August, and I'm not going to have any time this coming weekend or the weekend after, so finding time to work on this is going to be a challenge.