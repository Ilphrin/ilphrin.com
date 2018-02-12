---
layout: post_kevin
title: 'Service Workers in JS and offline reading'
author: kevin
hashtags: javascript js
category: javascript
---

Hi! First of all: Happy New Year! I hope for you that 2018 will be a good year, and that it won't end with a World War III because of a blond-haired president.

Now, lets dive into much more interesting. Let's imagine you are an owner of a website which talks about political news, with very long article that are awesome. As a user, wouldn't be cool that I load some articles I want to read on your website from my smartphone, shut my smartphone down, and a few days later go back to it while traveling in the New-York subway without any connection, and still be able to open Firefox and read your articles?

Well, thanks to Service Workers, this could be possible, and achieved really easily.

<!--break-->

Once upon a time, was an API called [AppCache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache). This API allowed people to store pages in cache for further use in the client browser while offline. But it had a [few issues](https://alistapart.com/article/application-cache-is-a-douchebag<Paste>). And the W3C made this API [Deprecated](https://html.spec.whatwg.org/multipage/offline.html#offline). "But now how do we do" - Asked Devs? Well, we have a new strong API that allows us to store assets offline: the [Service Workers](https://w3c.github.io/ServiceWorker/).

This new guy on the world of Web was a shiny API, walking with proud on its face because of its capabilities that allowed everyone to do whatever he/she wants, even in cases where AppCache was upset and doing its own stuff.

## Service Workers

A Service Worker is basically a JavaScript file, which will be run by the browser in a different context from common scripts of a web page. It:

* Is running on a separated execution thread
* Doesn't have access to the DOM
* Is 'installed' on the users computer/smartphone.
* Is only running on HTTPS domains (for Firefox, Chrome doesn't care if it is on unsafe page)

Then you could say: "Yay that's cool. But now what? What can we do with this JavaScript? If it doesn't have access to the DOM..."

Well, it is because the purpose of the Service Worker is not to handle the DOM, but to handle __requests to the server__. It has a few steps, and to show that I'll show your a nice picture from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Browser_compatibility):

![Service Worker lifecylce](/images/sw-lifecycle.png)

### Registering a Service Worker

Before installing a Service Worker, you need to register one from your main JavaScript file. This can be done thanks to the method <code class='language-javascript'>navigator.serviceWorker.register</code> like this:

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorkerArticles.js', { scope: '/' }):
}
```

This method takes two parameters:

* The __name__ of the javascript file, relative to the root of your domain
* (Optional) The __scope__ to give a specific perimeter where your ServiceWorker has power to work. Basically it is the folder where it has control for assets, the default value is the root of the domain.

__Note__: This function returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Installing, and using a Service Worker

Now that we registered a Service Worker from 'serviceWorker.js', lets fill this file so your website about political article can have its article read offline if you user has already visited the needed article before.

For most of the actions, you just need to do some <code class='javascript'>addEventListener</code>, as Service Workers already have a plenty of useful Events to listen to!

```javascript
self.addEventListener('install', cach => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
              '/',
              '/style.css',
              '/app.js',
              '/favicon.ico',
              '/frontPageCover.jpg',
            ]);
          })
        );
    });
```

We have 3 interesting methods here! Lets take a quick look to all of them:

* <code class='javascript'>event.waitUntil</code>: This method is used in an event to make it wait for a Promise to be resolved, in our case we have to compute things from cache before the Service Worker is considered _installed_
* <code class='javascript'>caches.open</code>: This method comes form the [CacheStorage API](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage), it returns a Promise that containing the cache you asked in given parameter.
* <code class='javascript'>cache.addAll</code>: This method comes form the [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) (do not confuse with the CacheStorage, the Cache API is an object that is returned by the <code class='javascript'>caches.open</code> ). This method takes an array of URLs, and for each of them try to retrieve them and store it in the Cache object.

So with this code, your Service Worker is now __registered__, __installed__, and __active__. If you go to the home page of your website, and reload it while being in offline mode, you should be able to see your page just as before!

### Go further

In this article we just covered a few parts of the Service Worker API, but you can do a lot of other things, like remove old caches, and dynamically add new URL to load in your Service Worker, etc...

If you want to take a deeper look into this, I recommend that you look at this [MDN page about Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Browser_compatibility) which was most of my inspiration of today's article.
