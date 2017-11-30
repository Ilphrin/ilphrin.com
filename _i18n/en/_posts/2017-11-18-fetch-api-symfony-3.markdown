---
layout: post_kevin
title: "Making a JS request with the Fetch API in Symfony 3"
author: kevin
---

Hey! It has been a while, isn't it? ;)

After this long pause of two months without a bit of article, et much longer without a technical one, I am back to have a talk with you about a project I work on. In this project I had to use the Fetch API from JavaScript to do some AJAX request, inside a file served from a Symfony 3 applicaion back-end. It wasn't easy but I won!


<!--break-->

[<img class="cover" src="/images/header_articles/ilya-pavlov-87438.jpg" />](https://unsplash.com/photos/OqtafYT5kTw)
![]()

_Photo by Ilya Pavlov on Unsplash_
## The project

First, a little bit of context. During my education, I have to create a project from scratch in 2 years, with a group of 7 students (including me). We are free to choose the subject, but it has to be validated by a range of presentations in front of selected jurys in order to check if the project has potential to lead to the creation of a startup.

Our project is called __Playficient__. We found out thanks to statistics that __40% of work time__ (average) is lost. One of the main reason for this is by switching from one tool to another. A lot of softwares and tools have been made in order to __reduce__ the number of tools used in work (Synchronize with an API, use "LogIn with Facebook", using IFTTT, or creating WebHoks on Slack or Github).

We want to create a similar tool, for small and very small companies, which have __strong contact__ with computers. But we want to go __further__, with the principles of [Gamification](https://en.wikipedia.org/wiki/Gamification) in order to motivate workers, but also with __clever advices__ with an Articial Intelligence which allows users to get better in their everyday working processes. To make this a little more tricky, we want this project to be __customizable__, with a __modular system__ that can add or remove features if the user wants to, just like the add-ons in Wordpress or in Firefox (Subliminal text: Go to Firefox 57!)

(Link to a showcase website to come if you wish to take a look, don't hesitate to hive us some feedback it would be awesome and sooo kind! =D)

## Hey, didn't you talk about a technical article?

Indeed indeed, it's time for me to talk about it. To manage with ease the modular system, we use a server-side framework in PHP called [Symfony 3](http://symfony.com) which works with __Bundles__, and 2 people are working on this back-end for now. The Front-End part is managed by Symfony through __Templates__ and __Assets__:

* A __Template__ is an HTML page with [Twig](https://twig.symfony.com/) syntax which is reusable, and customisable by variable substitution and some other features like loops and conditions.
* An __Asset__ is a file which gives stuff to a template, like JavaScript code, an image, CSS, etc.

So we use a Template to create __reusable__ page, or to create a __specific__ page to a [Route](https://symfony.com/doc/current/routing.html). But we won't find in a Template anything but __HTML code__ and __Twig__ tags (and no other code if you write ugly code). So we don't really care about Templates if we want to write JavaScript code.

On the other hand, Assets are much more interesting, because it is thanks to them that we will be able to serve to client a JavaScript file. But we have a problem here: We __do not have__ Twig syntax from Templates to use server-side variables in __JavaScript__.

And this is problematic when we need to get a __Route's URL__.

## FOSJSBundle comes to rescue us

Like I said, Symfony works with Bundles, just like npm packages in JavaScript or Gems in Ruby. These bundles are used as dependencies to a project, and we can find __hundreds__ of them already existing thanks to the huge Symfony community.

[FOSJSBundle](https://symfony.com/doc/master/bundles/FOSJsRoutingBundle/index.html) is a bundle that gives us a JavaScript library, called <code class='javascript'>Routing</code> to get a Route's URL.

Here is how to use it:

```javascript
const url = Routing.generate('route_name', {your parameters}, absoluteUrlBool);
```

This function returns __the URL__ corresponding to the Route given in first parameter, exactly what we needed!

Now, we need to create the so called AJAX request. Lets take a use case (Randomly, what I was working on today). We are user X, __connected__ to Playficient and in possession of the __Task Manager__ module. In this we have a list of boxes, each one is a __task__ and can contain any number of __sub tasks__. We'd like to do some "drag'n drop" of a sub tasks to change the box where it belongs. We we do this, we need to tell the server that we want to __remove__ the task from its previous position, and __add__ it to its new one.

For this, we go use som JavaScript and create an __AJAX__ request. There is multiple way to handle this, the most newest way to do this is by using the [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch). The Fetch API works with two Objects and a method:

* [Request](https://developer.mozilla.org/fr/docs/Web/API/Request): It is the Object that defines the request (easy, isn't it?). We define in it the URL, parameters, method, etc.
* [Response](https://developer.mozilla.org/fr/docs/Web/API/Response): This Object defines the server's response. We get in this object when a fetch Promise is resolved.
* [fetch()](https://developer.mozilla.org/fr/docs/Web/API/GlobalFetch/fetch): This method has the Request as first parameter. This method returns a [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) that resolves a Response object.

Now you know more about it, lets take a look at code corresponding to a request to remove a sub task from the box it originally was:

```javascript
const url = Routing.generate('rask_remove', {
  taskId: 1,
  parentId: 2,`
});
const request = new Request(url, { method: 'GET' });

fetch(request)
  .then(reponse => {
    console.log('We removed this task!');
  })
  .catch(error => {
    console.error(`Error when removing: ${error}`);
  });
```

Ok, everything's here? Lets run the server and do the manipulation... Here is what Firefox's console gives us:

```
GET   http://localhost/task/2/1/remove        302 Found
GET   http://localhost/login                  200 Ok
'We removed this taks!'
```

And when we reload the page... the task __is still here!__

Quickly, we can see that there is __two requests__ done: One to remove the task, aand another to the login page... that's weird. I'm not gonna let the suspense last any longer and explain why this happened.

We are still user X (not professor), and connected as it is, the server needs to know in __the name of who__ we are doing this request. This is why [cookies](https://en.wikipedia.org/wiki/HTTP_cookie) are used in Symfony. From one page to another, the user is __walking around with this cookies__ that allows him/her to stay connected until he/she click on "Log Out".

So, what we need to do in our request is to __get this cookie__ and send it, but how? This is, in fact, really simple with the Fetch API and Symfony, as this is a __simple parameter to put to the fetch method__, to send 'credentials':

```javascript
fetch(request, { credentials: 'same-origin' })
```

Lets run again our code:

```
GET   http://localhost/task/2/1/remove      200 OK
'We removed this task!'
```

And here comes our request!

Using Fetch API from JavaScript and Symfony, it is pretty easy to do all these things, but at the condition that we know how. (I spent 3 days to look for how to get routes in JavaScript from Symfony, and understanding this credentials error even though it was simple in fact!)

This article is also available in french if you'd like to. I'm going to take advantage of my stay at [Quebec](https://www.flickr.com/photos/159186107@N06/) and of my end-school project to write more articles about technical studd. By the way, I am working on a plugin on [Talk](https://coralproject.net/products/talk.html) from the [CoralProject](https://coralproject.net/), when this will be done I might write something about it ;)

Until then, have a nice day everyone!
