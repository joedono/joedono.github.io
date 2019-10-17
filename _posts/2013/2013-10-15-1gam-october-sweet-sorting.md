---
title: "1GAM October - Sweet Sorting"
category: game development
---
Whee! Another semi-throwaway month! This month's theme for 1GAM was Candy. Appropriate considering the season. I was originally not going to use the theme, but I was running short on ideas that would be feasible with the engine I chose for this month.

The engine for this month was <a href="http://zgameeditor.org/">ZGameEditor</a>. This is a 3D game engine, the first 3D engine I've used since trying to learn Unity back in January. It's greatest feature is supposed to be that the executables it exports are 64KB maximum. I gotta say, the engine itself wasn't very easy to work with.

It operates in a tree structure. The OnStart, OnUpdate, OnRender, and other game loop methods are nodes in a tree that you add components to. One big issue is that all the components are in one big menu. When you go to add a component to a tree, you have to look through ALL the available components to find the one you're looking for. Nevermind that you can't actually add a "RenderMesh" component to the OnUpdate node. Sure, the components you can't use are greyed out, but it'd be better if they didn't show at all.

Another problem I had was that I couldn't figure out how to import external resources. I had a few sounds and models and a different font that I wanted imported into the engine, but when they came in, it looked like they had been corrupted during the export/import process. The game is a lot simpler and lacks some juice because of that.

The site says that ZGameEditor lends itself well to games with procedural content or screensavers. The simplicity shows in the engines design.

In any case, the game! The game is called Sweet Sorting and is extremely simple. Candy is falling from the sky and you have to move the divider to sort each piece into the appropriate bin. Red on the left and blue on the right. There is not scaling difficulty, so even a beginner could play forever. All the models were created from within ZGameEditor itself, so they're just basic shapes. I couldn't figure out how to have a single Model render different Meshes at different positions. I originally wanted it to be falling ice cream. I figured a simple ice cream cone would just be a sphere, and one or two cylinders. But I couldn't figure out how to render the cylinder meshes anywhere other than the center of the model, where they would end up rendering INSIDE the sphere mesh. So I stuck with solid candy. I like to think of them as jawbreakers.

So that's it. Another month down and only two more to go. I'm starting to get tired of doing this every month. I'm not nearly as excited as I was in the beginning. However, I am glad that I finally managed to try out all these engines I've been collecting. Next month will be RPGMaker VX Ace.

Also, submitting this game put me back in 2nd place on the 1GAM High Scores board.