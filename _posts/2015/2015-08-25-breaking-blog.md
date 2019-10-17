---
title: Breaking Blog
category: web development
---
Just spent the better part of two hours fixing bugs with this blog. Maybe I should install Jekyll locally so I can troubleshoot this a little better.

It all started when I wanted to change the Archive to have 100% width buttons has section headers rather than links. I wrestled with the code snippet I copied from SO. I finally tracked the issue down to a missing curly-brace. It's always something simple and stupid, isn't it?

While I was working on that, I discovered that the individual post view wasn't working. If you clicked on the title to any of my posts, you got a mostly blank page. It was missing actual post content. Turns out the error was in my post include file. It was trying to display post data instead of page data. Which is confusing because the page *is* the post in this case. Oh well. I've been desperately trying to avoid any duplicate code on this site through creative use of the layouts and includes. But I had to split the post include into a post and a post-single include. I suppose it's okay. They're not technically being used in the same situations and there are some key differences between them. I guess I can live with it.

But all this arose from me trying to make my Archive look just a *little* bit better.