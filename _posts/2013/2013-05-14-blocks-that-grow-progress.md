---
title: "Blocks that Grow - Progress"
category: game development
---
So far, I'm glad to be back behind the wheel of nitty-gritty coding. Especially because FlashDevelop includes IntelliSense code completion. There are a few nuances of ActionScript that have taken me a while to get used to. Mostly, it's the placement of the type declarations. In most of the other languages I've worked in, the order goes:

    public int DoThingsWithNumbers(int num1, int num2)

But, in ActionScript, there's an extra word, and the return type goes at the end:

    public function DoThingsWithNumbers(num1:int, num2:int):int

There have been multiple times where this has tripped me up with syntax errors.

But enough about that. Here are some screenshots!!!

So there you have it. The month is almost halfway done, and I'm coming up on what will be the most difficult feature to implement: the Growing Platforms. Flixel has a relatively good collision library. I don't think I'll have trouble making the platforms push the player. The complicated part will be letting the player ride on the Growing Platforms. Moving Platforms in general have historically been the hardest feature to implement in a 2D platformer, right up there with slopes and ladders. Fortunately for me, they're the last and only complicated piece of this game, other than actually designing the levels to be fun, that is.