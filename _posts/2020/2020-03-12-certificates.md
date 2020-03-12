---
title: Certificates
category: web development
---
I don't think I'll ever really understand certificates....

So my wife has a website. I helped set it up for her using a hosting provider that a friend recommended to her. We bought a domain and some server space, set up a blog platform, and I left her to her devices. Much later in my career (ie, now), I have a much better handle on the options that are out there for web hosting for small sites with few requirements and low usage. This site is hosted for free on GitHub pages. I have a number of other sites here that are also hosted for free, but require at least knowledge of Git to maintain. I have at least one Rails web application running on Heroku, also for free. We're currently paying a relatively cheap amount to my wife's hosting provider for monthly hosting. I think I can get it done for cheaper.

So, I migrated all the software to Heroku, currently hosting on a Free Dyno, and I'm tackling what appears to be the biggest barrier between me and getting this site hosted for free: the custom domain. I've already settled that we're going to have to pay for the domain name registration every year. That's easy. Getting it to point to the site hosted on Heroku is also relatively easy. The problem now is securing it. With the new age of enforced https all over the web, I understand that it's necessary even for the smallest websites. Fortunately, the providers I use all offer that for free as well.... for their own domains. In order for me to get this bad boy secured all the way down, I have to upgrade to the paid Heroku dyno. Alright, that's $7/month. That's doable and still cheaper than what we're paying for current hosting.

But now I find out that the certificates they issue to the paid dynos are still only good for the domains they give you. I either have to pay through the nose for a certificate from one of the vendors, or I have to figure out how to generate one myself. And I'm still not sure how they work. Ugh.

Fortunately, after 3 days of research, I think I've finally cleared all the obstacles. Nothing super sensitive is going out through this website. All I want is to just have the certificate so that people visiting don't get the stupid warning all the time. The last obstacle I have to clear in order to generate the certificate myself is to get home to my Linux machine and use certbot to create the certificate for me. Then I can finally say goodbye to the bill I've been getting surprised with every 3 months.
