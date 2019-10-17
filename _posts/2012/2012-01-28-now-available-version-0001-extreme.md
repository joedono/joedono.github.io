---
title: "Now Available!! Version 0.0.0.1 (Extreme Alpha)"
category: archive
---
First a general progress report. Level 5 has been ink-tested. It is possible to navigate your way through the level without being able to see all the platforms. So that's nice.

I realized that I was going to have to do something about the way my levels were stored. Currently, they're just plain text. Anybody with ANY knowledge of computers (can you open a .txt file?) would be able to open my levels.dat file and get a complete map of the levels. That would be a big hit to a game where the whole gimmick is based around not knowing your way around the levels. I didn't need to put too much thought into it. If someone really tried, they would have no problem extracting my level data from the distributable. I just wanted it to be a little harder than "open text file. Oh, THAT'S where the platform is". So I built a quick little script that loads the data for each level, then <a href="http://docs.python.org/tutorial/inputoutput.html#the-pickle-module">pickles</a> them. The size of the game went up by about a MB after that, but what's memory cost nowadays?

One last thing. Here's the credits screen I put together.

Finally, here is the alpha release for your viewing pleasure. I have chosen Google Code for my project hosting. This version has no enemies, no checkpoints, and no sound. It does, however, have God Mode activated, so you don't have to worry about losing great swaths of progress. This is strictly to see if the gameplay itself is fun, without the story and without the suspense, and if it'll run on someone else's computer. Just download, unzip, and run main.exe. Hopefully, this will work on anyone's Windows setup. <a href="http://code.google.com/p/the-great-inkscape/downloads/list">ENJOY!!</a>