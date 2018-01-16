---
layout: post_kevin
title: "2017 retrospective of my everyday Free tools"
author: kevin
---

2017 will finish in a bunch of days, and here I am in a car leading back to Quebec City, after a week where I saw my family. I have 3 hours to spend so I'll take the time to make some kind of retrospective, looking at my year's best events but also the most relevant days of what I use/love/see everyday. Here we go!

<!--break-->

## Neovim, Oni

[Neovim](https://neovim.io/) had a lot of news this year, with [3 new releases](https://github.com/neovim/neovim/releases) it got:

- A new [remote-plugin support](https://github.com/neovim/neovim/pull/7458): nodejs
- [Externalization](https://github.com/neovim/neovim/pull/7173) of [its](https://github.com/neovim/neovim/pull/7454) UI, [allowing](https://github.com/neovim/neovim/pull/6583) a lot of tweaking for all GUI
- It got Lua integrated in it!
- A few more features [for](https://github.com/neovim/neovim/pull/7399) <code class="inline">:checkhealth</code>
- <code class="inline">inccommand</code> becomes more powerful and [performant](https://github.com/neovim/neovim/pull/6949) everyday
- A lot new features too for <code class="inline">:terminal</code> which becomes [really](https://github.com/neovim/neovim/pull/6185) usable and [useful](https://github.com/neovim/neovim/pull/6142) now
- Too much fixes to enumerate them here.

Now, I don't use all of these features in Neovim of course. For example I don't use <code class="inline">:terminal</code> yet, because it is faster to type __Ctrl+Maj+T__ to create a new tab in Tilix than doing <code class="inline">:terminal</code> in Neovim, but I think this may be changed with a bunch of _.vimrc_ customization.

I also use a lot [Oni](https://github.com/onivim/oni), a GUI written with React and Electron, that brings Web capabilities to Neovim. We already had a GUI like this with [Nyaovim](https://github.com/rhysd/NyaoVim), but Oni is much more powerful and really better integrated with Neovim, in that it uses the externalization of Neovim's UI to create features that fits best with a GUI. We could almost compare Oni to VSCode, with less features but a perfect bidirectionnal connection with Neovim.

And this year, Oni had not less than __20__ new versions! It exploded with the release of 2.0, and now it looks unstoppable:

- Updates of the list of configurations you can use in <code class="inline">config.js</code> (which was by the way a <code class="inline">config.json</code> before), like customization of the beep sound or fullscreen on start
- Implemented a <code class="inline">Find all references</code>!
- Auto-reload when modifying <code class="inline">config.js</code>
- Language Server Protocol support [for C# with OmniSharp](https://github.com/onivim/oni/issues/6), but also [for Go](https://github.com/onivim/oni/issues/443), [Python](https://github.com/onivim/oni/pull/441), [Reason and OCaml](https://github.com/onivim/oni/pull/488), [C/C++ with clangd](https://github.com/onivim/oni/pull/757) and [CSS/Less](https://github.com/onivim/css-language-server)
- UI features like [Notifications](https://github.com/onivim/oni/pull/365) or [Error Marker](https://github.com/onivim/oni/issues/335)
- [Drag'n Drop](https://github.com/onivim/oni/pull/472) support for files!
- Use Neovim's externalization for [status bar](https://github.com/onivim/oni/issues/201)
- [QuickInfo](https://github.com/onivim/oni/pull/508) when autocompleting
- A fresh [new icon](https://github.com/onivim/oni/pull/587)! That's always nice to see, and more when it comes with a [new website!](https://www.onivim.io/)
- A better support for i18n
- You can now record [videos and make screenshots](https://github.com/onivim/oni/pull/739) directly from Oni!
- Everyone can now support Oni thanks to [an OpenCollective](https://opencollective.com/oni)
- Documentation has been mostly rewritten within the Wiki
- And a lot more new fixes and improvements I can't write here


![Oni smart completion](/images/Gifs/Oni_01.gif){:style="width:100%;"}

Oni isn't yet in 0.3.0, and it has a lot of awesome features. One things I'd like to point here is that we have BountySource+OpenCollective as ways to give to Oni's developpers and support his work, and in 2018 it will really be one of the project I will give my money to! Don't hesitate to take a look at it!o

These two Open Source project have a lot of work behind them, and much more in front of them, but 2018 will be decisive for them: It will by a big date with a lot of newcomers, and a lot of people will start using Neovim, and because Oni exists we won't just have Developpers IMHO, but also people from other areas that look for a good ways to keep notes, and write things. I think about journalism, blogs, and things like that. That is my prediction for them in 2018!

## Mozilla

Ok, now everyone knows I am a big fan of [Mozilla](https://www.mozilla.org/en-US/), especially since I try to help them as a [Mozillian](https://mozillians.org/en-US/u/Ilphrin/). This year was big in terms of emotions, as we saw the fall of FirefoxOS at the end of 2016. I still used it for a few months because it was just fine for my needs. This is a big point, we could talk about the way of FirefoxOS' story for hours.

The fact is that FirefoxOS came too early. It came when people didn't need it enough, and when Web was still not enough performant for end-users. If Mozilla launched FirefoxOS today, we could see a smartphone running web applications with WASM for Gaia UI, A-Frame applications in it, WebExtensions used to improve its features, Quantum to launch it fast on every smartphone, etc...

Now, along with Ubuntu Phone fall, we don't have any alternative (In fact... we still have LineageOS! Which is pretty awesome, go check it out ;) )

But now, Mozilla strikes back, and it strikes strong, really strong in my opinion.

### A New Identity

Mozilla's logo was a Dinosaur since a very, very long time. But to accomodate to today's changes, it needed a refreshment. And like Mozilla do for everything, they asked people what they wanted. And they launched OpenDesign to create this new brand, for months and months, people voted for their favorite brand, and finally one came out to the lights, and ['zilla' appeared](https://blog.mozilla.org/opendesign/arrival/)!

I was amused by this one, because I loved it but I knew it would be controversal if it would be choosen. And some people said they were disappointed, but most of these were just stupid reasons like:

- _The colors are ugly_: Designers, I'm afraid you will eat this kind of comment with no substance and arguments for the rest of your life...
- _This is stupid because you can't search 'moz://a' in Google, it finds nothing_: Well, if people starts googling with what they see from a Logo instead of the Name, I wonder how they search for Instagram...

The fact is that playing with '://' is the best part in my opinion, you directly see that Mozilla is talking about Web. Now this new Logo is not alone, it comes with a new bunch of colors. And the two main colors are....White and black.

![MDN's new look with Black and white](/images/MDN_01.png){:style="width:100%;"}

At first, we could say that this is a pretty poor choice of color, and that it makes it really 'hard' and bold. And yes it is, but when I look for example at MDN now or the Mozilla's Blog, I can't think anything but that it was done with accessibility in mind. This contrast makes it really perfect for users that need big differences of colors.

### Quantum

The second big event, is the arrival of Quantum.

Everyone knows about Quantum now. It is the merge of months of work with a new Rust Engine. Just by making it with Rust means better security, more stability, and sometime better speed. But what brings speed really is the paralellization and the rework of all of the engine.

I am not the best person to talk about it, so I'll give you a few links so you can see by yourself:

* [Introducing the New Firefox: Firefox Quantum](https://blog.mozilla.org/blog/2017/11/14/introducing-firefox-quantum/)
* [A super-stable WebVR user experience thanks to Firefox Quantum](https://hacks.mozilla.org/2017/11/a-super-stable-webvr-user-experience-thanks-to-firefox-quantum/)
* [Firefox 57 "Quantum" Is Here, And It's Awesome](http://www.omgubuntu.co.uk/2017/11/firefox-57-quantum-better-faster-stronger)


I was afraid when FirefoxOS has fallen that Mozilla would suffer to much from it. And yes Mozilla suffered, but it was on purpose: Focus only on Firefox, and make it great again. Firefox is gaining again in popularity now, and I think Quantum is at least half of the why.

The other half somes from collaboration with other organizations and companies. I think about [Pocket](https://getpocket.com/), which was a shame a year ago because it was proprietary and everyone yelled on it. And now Mozilla acquired it and made it Open-Source, so everyone is quiet now.

I really appreciate this acquisition, but on the other way, I would be glad having Mozilla talk about it before it created "chaos" among community (Chaos is a pretty stronger word than needed though). And this is what I'd like Mozilla to get better with in 2018: Communication. Not only about technical stuff and updates about Firefox, but also about Activities, Acquisition, Marketing, etc...

That would make the community more calm, but also more involved in that people would make Mozilla know if something is wrong. We'll see in 2018 what will happen.

## Wine

Wine has got a lot of new version this year, and I don't know what is happening, but they came with so much improvements and fixes that I cannot talk about them all. Right now, they are working on the 3.0 version, which should be released soon (We are in version rc4), and making fixes to the stable version (2.0.4 right now).

I use Wine along with PlayOnLinux, and today I am able to play easily to games like Osu, PathOfExile or Might And Magic V.

if wine guys are reading this, cheers and chocolate to you, you make an awesome work!

The only negative point I'd like to notice is that Wine is still for nerds. If you are a "lambda" user it could be reaaaaaally complicated to make a game work if it doesn't at the first place. Fortunatelly, PlayOnLinux gives Wine a better UX with its GUI. By the way, the [Fifth version of POL is coming, check out the Github repository!](https://github.com/PhoenicisOrg/POL-POM-5)

I'd love to talk about Other things, but this article is taking too much time right now, and I need to rest in my car now. Have a nice day all.

And again, cheers to all these people that allow us to have fun with our computers and smartphones!


Oh, and by the way, happy new year!
