---
title: A record of learning (2025)
description: My record of talks, posts, and articles worth engagement
tags: [engineering, education]
publishedDate: 2025-02-15
updatedDate: 2025-03-11
isDraft: false
---

The organization of this page may evolve over time.
Perhaps this grouping of sections blindly by content type is less relevant in the face of particular topics of interest.

Generally, I tend to gravitate towards web performance, software design, geometry or mathematically-driven design.
I'm currently interested in the local-first movement in app/web development and am experimenting with a small homelab setup.

## Reads

- [Good Code is a love letter to the next developer who will maintain it](https://addyosmani.com/blog/good-code/) (Addy Osmani)
- [CSS Guidelines](https://cssguidelin.es) (Harry Roberts)
- [Against innovation tokens](https://blog.glyph.im/2024/07/against-innovation-tokens.html) (Glyph)

> Questions the old idea of spending "innovation tokens" and reaping complexity.
Instead, this offers the idea of "boundary tokens" which are spent when a project exits the area of what is well and commonly understood by contributors.
It shifts the focus to value deep knowledge of one's chosen tools and puts a higher cost on investing in services outside of that scope due to the maintainability and familiarity concerns.

- [Questions for a new technology](https://kellanem.com/notes/new-tech) (Kellan Elliott-McCrea)
- [Introducing the React Profiler](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html#browsing-commits) (Brian Vaughn)

> yes, it's from 2018, but it's a nice dive into the render and commit phases of React

- [Supercharging Discord Mobile: Our Journey to a Faster App](https://discord.com/blog/supercharging-discord-mobile-our-journey-to-a-faster-app) (Ruby Feinstein)
- [Staff archetypes](https://staffeng.com/guides/staff-archetypes/)
- [High Ownership, High Urgency](https://blog.danielna.com/high-ownership-high-urgency/) (Daniel Na)
- [Your team needs juniors](https://softwaredoug.com/blog/2024/09/07/your-team-needs-juniors) (Doug Turnbull)

> Learning requires the ability to fail publicly.
While this may be "okay" in groups of only senior+ employees, it becomes *much* more acceptable and common when instruction is a core part of the job.
"Juniors force-multiply seniors, not by writing code, but just by forcing seniors to teach and rethink their knowledge."

- [On good software engineers](https://candost.blog/on-good-software-engineers/) (Candost Dagdeviren)
- [Lessons learned in 35 years of making software](https://dev.jimgrey.net/2024/07/03/lessons-learned-in-35-years-of-making-software/) (Jim Grey)

### Figma Engineering

- [Desperately seeking squircles](https://www.figma.com/blog/desperately-seeking-squircles/) (Daniel Furse)

> Related prior/contemporaneous detail on the design and pursuit of the squircle are found in the following:
[iOS 7 Icon Squircle](https://www.cocoanetics.com/2013/06/ios-7-icon-squircle/) and
[Unleashing Genetic Algorithms on the iOS 7 Icon](https://blog.mikeswanson.com/unleashing-genetic-algorithms-on-the-ios-7-icon/) (Mike Swanson)

- [Under the hood of Figma’s infrastructure: Here’s what goes into powering a web-based design tool](https://www.figma.com/blog/under-the-hood-of-figmas-infrastructure/) (Samir Goel)
- [How Figma's multiplayer technology works](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/) (Evan Wallace)
- [Just our type: The story of creating Figma Sans](https://www.figma.com/blog/the-story-of-creating-figma-sans/) (Jenny Xie)
- [Why everyone can (and should) be a great storyteller](https://www.figma.com/blog/why-everyone-can-and-should-be-a-great-storyteller/) (Carly Ayres)

> This one reminded me of Eva Parish's [What I think about when I edit](https://evaparish.com/blog/how-i-edit).

- [Crafting the visual identity for Config 2024](https://www.figma.com/blog/config-2024-branding/) (Jessica Svendsen & Chad Colby)

### The difficulty of measuring productivity

- [The worst programmer I know](https://dannorth.net/the-worst-programmer/) (Dan North)
- [Generative organizational culture](https://dora.dev/capabilities/generative-organizational-culture/) (DORA)

> A generative culture is an "organizational culture that is high-trust and emphasizes information flow is predictive of software delivery performance and organizational performance in technology."
The six key aspects of such a culture are:
high cooperation, trained messengers, shared risks, encouraged cross-functionality (bridging), allowing failure to invite inquiry, and experimentation with the novel.

- [Measuring developer productivity with the DX Core 4](https://getdx.com/report/dx-core-4/) (Abi Noda)

### Against web bloat

- [Run less software](https://www.intercom.com/blog/run-less-software/) (Rich Archbold)
- [Javascript dos and don'ts](https://muan.co/posts/javascript) (Mu-An Chiou)
- [Performance inequality gaps](https://infrequently.org/series/performance-inequality/) (Alex Russell)
- [Platform strategy and its discontents](https://infrequently.org/2024/10/platforms-are-competitions/) (Alex Russell)
- [Building a robust frontend with progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)
- [Removing jQuery from Github Frontend](https://github.blog/engineering/engineering-principles/removing-jquery-from-github-frontend/) (Github Engineering)

> The subsection on incremental decoupling here provides a framework for facilitating painful migrations.
Using jQuery is easy, so preventing new uses of it in a draconian way would lead to inevitable animus.
Setting up linting on new code and a PR bot to pull in the migration orchestration team on relevant PRs allows for the easy suggestion of alternatives.
Stripping functionality out of the version of jQuery used was another good move to prevent regressions.

- [I don't have time to learn React](https://www.keithcirkel.co.uk/i-dont-have-time-to-learn-react/) (Keith Cirkel)
- [The frontend treadmill](https://polotek.net/posts/the-frontend-treadmill/) (Marco Rogers)

## Talks and Docs

- [Why can't we make simple software](https://www.youtube.com/watch?v=czzAVuVz7u4) (Peter van Hardenberg)

> Deals with the inevitability of instability and unknowns in the face of unavoidable complexity incurred as software projects mature.
Further reading includes the [Laws of Software Engineering](https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution) (Lehman & Belady)
that provides a set of pseudo-axioms describing the forces affecting software systems.
[Out of the Tar Pit](https://curtclifton.net/papers/MoseleyMarks06a.pdf) (Moseley & Marks) is also recommended on accidental vs essential complexity.

- [Transforming the Organizational Culture at Etsy](https://www.youtube.com/watch?v=a772VLZ4ot8) (Kellan Elliott-McCrea)

> How to build a learning culture in an engineering org.
Somehow, 15 minutes is enough to provide a full framework for the cycle of fostering resilience, growth, and collective education among engineers.

- [Top 5 techniques for building the worst microservice system ever](https://www.youtube.com/watch?v=88_LUw1Wwe4&t=2147s) (William Brander)

> Doing something that looks like the inverse may be good, but nothing is guaranteed.
Microservices are another design pattern for systems,
and the collective sentiment that they operate as some golden panacea is likely overblown in many instances.
I still, generally, believe in smaller services, but the added network overhead has to be justified by traffic data and good architecture.
This lead me to [Assault by GC](https://blog.marcgravell.com/2011/10/assault-by-gc.html) from Marc Gravell,
which talks about an approach to circumvent GC issues StackExchange was having that caused outages.

- [Marc Andreessen on Building Netscape & the Birth of the Browser](https://the-ben-marc-show.simplecast.com/episodes/marc-andreessen-building-netscape-the-birth-of-the-browser-y_u75PCG) (Marc Andreessen & Ben Horowitz)

## Tools

No promise that I've gone and used these, but I've certainly read about them and find them compelling enough to list.

- [Zero Alpha](https://zero.rocicorp.dev/docs/introduction) - sync query engine between client and server
- [Yjs](https://docs.yjs.dev) auto-syncing, performance-focused CRDT for collaborative applications ([the algo](https://github.com/yjs/yjs#yjs-crdt-algorithm))
- [Shadow DOM](https://web.dev/articles/shadowdom-v1) - browser-native CSS scoping. Particularly useful in the context of a browser extension or a web app that needs to load a ton of CSS.
- [Open Stories](https://github.com/dddddddddzzzz/OpenStories) - small syndication format for the social web.
- [11ty](https://www.11ty.dev) - static site generator
- [PlayDate SDK](https://play.date/dev/) - game engine for a small console
- [Clay](https://github.com/nicbarker/clay/blob/main/README.md) - highly performant flexbox-model layout lib for arbitrary rendering libraries.
More info in the [introduction video](https://www.youtube.com/watch?v=DYWTw19_8r40)
