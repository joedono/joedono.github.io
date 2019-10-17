---
title: Angular Design
category: web development
---
I'm kind of at a loss when it comes to getting started on the Dandy Game Shop. I have a decent understand on how an Angular app is made up of views, controllers, and services, but I have no idea how to combine them into the application that I want to build. I keep thinking in terms of web pages and trying to figure out how to convert them.

I know I want a home page/catalog that has some basic information on it about all the items for sale in the system. Maybe it'll have some better ways of finding them. Clicking on one of the items should show the details for that item. Each item should have an equivalent "Add to Cart" button that adds them to a global shopping cart that's with the user as they navigate through the application. The cart will have a Go To Checkout button that sends the user to the checkout page with the contents of the cart there. Going through payment will take them to the confirmation page where they are thanked and shown a summary of their order.

I haven't the foggiest idea how to structure this or get started on building things. I think I need a service for the shopping cart and a controller for the item views. But should the controller be separate from the home catalog view? What should control switching between the home catalog view and the individual item views? I think my professional project uses states or routes, but I haven't found anything in my tutorial yet that talks about those.

...of course, as I write that, I find it here in the tutorial I just lost patience in. Time to start building things...