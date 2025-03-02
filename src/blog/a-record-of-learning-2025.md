---
title: A record of learning (2025)
description: My record of talks, posts, and articles worth engagement
tags: [engineering, education]
publishedDate: 2025-02-15
updatedDate: 2025-03-03
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

- [Desperately seeking squircles](https://www.figma.com/blog/desperately-seeking-squircles/) (Daniel Furse)

> Related prior/contemporaneous detail on the design and pursuit of the squircle are found in the following: 
[iOS 7 Icon Squircle](https://www.cocoanetics.com/2013/06/ios-7-icon-squircle/) and
[Unleashing Genetic Algorithms on the iOS 7 Icon](https://blog.mikeswanson.com/unleashing-genetic-algorithms-on-the-ios-7-icon/) (Mike Swanson)

### The difficulty of measuring productivity

- [The worst programmer I know](https://dannorth.net/the-worst-programmer/) (Dan North)

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

## Tools

No promise that I've gone and used these

- [Zero Alpha](https://zero.rocicorp.dev/docs/introduction) - sync query engine between client and server
- [Yjs](https://docs.yjs.dev) auto-syncing, performance-focused CRDT for collaborative applications ([the algo](https://github.com/yjs/yjs#yjs-crdt-algorithm))
- [Shadow DOM](https://web.dev/articles/shadowdom-v1) - browser-native CSS scoping. Particularly useful in the context of a browser extension or a web app that needs to load a ton of CSS.
- [Open Stories](https://github.com/dddddddddzzzz/OpenStories) - small syndication format for the social web.
- [11ty](https://www.11ty.dev) - static site generator
