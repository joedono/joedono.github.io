---
title: "Filling in the Music - Post Mortem"
category: game development
---
Another month has come and gone, and that means another game has been designed and built. This month's title was Filling in the Music. This month's engine was C++ &amp; Haaf's Game Engine. Now that this whole thing is over, I have one thing to say:

I MISS DYNAMIC LISTS!!!

Seriously. I've never missed a feature more than I missed dynamically allocated lists. C++ does have a vector class that is supposed to fulfill this purpose, but I didn't have enough time to figure out how to use it. So I had to work with static arrays where I kept track of the last active index. I made the arrays big enough so that they'd never fill up, but I have no idea what kinds of memory leaks the final program had.

Now that I think about it, nearly all my trouble this month came out of not having experience with C++. I wrestled with header files and classes before deciding to just put all my code into one big file. I lost hours of work trying to figure out why my method parameters weren't being passed correctly. And don't even get me started on the pointer logic. I still don't fully understand it. What's up with not having a good number-to-string converter? I couldn't even output things to the log file because I couldn't figure out an easy way to convert numbers into strings.

In any case, the game is up and playable. It doesn't have sound and it doesn't show you your score, but it is semi-playable. You can check it out over on the Projects page.

I expect next month's project to be even simpler, since I have a lot of other things to focus on during the month.