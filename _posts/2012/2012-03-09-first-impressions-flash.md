---
title: "First Impressions - Flash"
category: archive
---
So I've started up at my new job. They're hopefully going to keep me busier than my old one. The bad news is, that leave less time for personal projects. So this blog is going to see a very big decline in frequency of posts (if it hasn't already). So as something I can work on in the small amount of spare time I have, I've decided to take the plunge and try learning Flash.

My biggest issue with Flash is that there isn't very much choice when it comes to tools to use. Sure, you can use Notepad++ to write ActionScript documents, but whatever software you need to compile them into an .fla file, and then into a .swf file for use in the real world is incredibly limiting. Your only choice is Adobe Flash Professional. The full version costs about $700 and the trial only lasts 30 days. This limitation put me off from learning Flash until now.

Yesterday, I discovered <a href="http://www.flashdevelop.org/">FlashDevelop</a>. A free Flash IDE. HOORAY!!! I downloaded immediately and dove right in. There are a number of differences between FlashDevelop and Adobe Flash Professional. FD doesn't have a timeline or any graphics creation tools built in. The layout and functionality is almost identical to Visual Studio. I suppose that'll make it easier to learn, but I'm a little put off by the lack of uniqueness.

After searching around for some tutorials, I found <a href="http://flashgamedojo.com/">Flash Game Dojo</a>, which eventually led me to <a href="http://flixel.org/">Flixel</a>. I followed their tutorial for the EZPlatformer and found it to be surprisingly intuitive. Most game development libraries separate the game loop into an Update function and a Render/Draw function. Flixel (and Flash in general) just has an Update function. Everything is drawn for each game loop unless it is specifically set to invisible or moved out of the Stage area.

So it's not the best language I've ever encountered, but it probably has the best chance of fitting in with my pitiful excuse for a distribution model. I'll give it a shot and see what I can come up with.