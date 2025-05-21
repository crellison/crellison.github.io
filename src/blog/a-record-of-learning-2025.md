---
title: A record of learning (2025)
description: My record of talks, posts, and articles worth engagement
tags: [engineering, education]
publishedDate: 2025-02-15
updatedDate: 2025-05-21
isDraft: false
---

The organization of this page may evolve over time.
Perhaps this grouping of sections blindly by content type is less relevant in the face of particular topics of interest.

Generally, I tend to gravitate towards web performance, software design, geometry or mathematically-driven design.
I'm currently interested in the local-first movement in app/web development and am experimenting with a small homelab setup.

## Reads

### General/Uncategorized

- [Good Code is a love letter to the next developer who will maintain it](https://addyosmani.com/blog/good-code/) (Addy Osmani)
- [Against innovation tokens](https://blog.glyph.im/2024/07/against-innovation-tokens.html) (Glyph)

> Questions the old idea of spending "innovation tokens" and reaping complexity.
Instead, this offers the idea of "boundary tokens" which are spent when a project exits the area of what is well and commonly understood by contributors.
It shifts the focus to value deep knowledge of one's chosen tools and puts a higher cost on investing in services outside of that scope due to the maintainability and familiarity concerns.

- [Questions for a new technology](https://kellanem.com/notes/new-tech) (Kellan Elliott-McCrea)
- [Introducing the React Profiler](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html#browsing-commits) (Brian Vaughn)

> yes, it's from 2018, but it's a nice dive into the render and commit phases of React

- [High Ownership, High Urgency](https://blog.danielna.com/high-ownership-high-urgency/) (Daniel Na)
- [Bazel is incompatible with Javascript](https://pow.rs/blog/bazel-is-incompatible-with-javascript/) (Drew Powers)

> It's nice to see my general impressions of Bazel (and Nx) reflected elsewhere (and with more backing experience).
My time at Grammarly showed me how Nx punishes you for not blindly adopting their entire philosophy on package development,
which feels largely based in layers obfuscation,
and how Bazel as a part of the JS/TS toolchain was massively cumbersome and unintuitive from Node experience POV.

- [The Great Divide](https://css-tricks.com/the-great-divide/) (Chris Coyier)
- [The illustrated guide to a Ph.D.](https://matt.might.net/articles/phd-school-in-pictures/) (Matt Might)
- [The art of designing with heart](https://jonas.do/writing/2016-08-29-the-art-of-designing-with-heart/) (Jonas Downey)
- [The Great(er) Divide in front-end](https://pow.rs/blog/3-pillars-of-front-end-knowledge/) (Drew Powers)
- [Advanced React in the Wild](https://largeapps.dev/case-studies/advanced/) (Addy Osmani and Hassan Djirdeh)
- [DynamoDB’s Best Feature: Predictability](https://brooker.co.za/blog/2022/01/19/predictability.html) (Marc Brooker)

### The place of AI

- [OpenAI's Studio Ghibli meme factory is an insult to art itself](https://www.bloodinthemachine.com/p/openais-studio-ghibli-meme-factory) (Brian Merchant)
- [AI Horseless Carriages](https://koomen.dev/essays/horseless-carriages/?ck_subscriber_id=2354594420) (Pete Koomen)

### Career reflections

- [Lessons learned in 35 years of making software](https://dev.jimgrey.net/2024/07/03/lessons-learned-in-35-years-of-making-software/) (Jim Grey)
- [10 Tips for Ramping Up as a Senior Engineer](https://jdx.dev/posts/2020-09-16-10-tips-ramping-up-as-a-senior-engineer/) (Jeff Dickey)
- [HOWTO: Get tenure](https://matt.might.net/articles/tenure/) (Matt Might)
- [12 resolutions for grad students](https://matt.might.net/articles/grad-student-resolutions/) (Matt Might)
- [Rethinking the Developer Career Path](https://www.youtube.com/watch?v=yIPbE7BssOs) (Randall Koutnik)

> This proposes from abstract terms of seniority to phases of the Implementer, the Solver, and the Finder.
I've internally mapped the traditional title levels to a similar gradation
(junior as task do-er, mid-level as task author and project do-er,
senior as project author and team direction do-er,
staff as team direction author and org direction do-er).
The simplicity of implementer, solver, and finder is more pleasant though and does not lean on assumptions of team/org structure.

- [Staff archetypes](https://staffeng.com/guides/staff-archetypes/)

### Interviewing and talent

- [How I Interview](https://rkoutnik.com/articles/How-I-Interview.html) (Randall Koutnik)

> Turns out at least someone in the industry has known that LeetCode is bad signal for a decade.

- [Valley Talent](https://rkoutnik.com/articles/Valley-Talent.html) (Randall Koutnik)
- [Your team needs juniors](https://softwaredoug.com/blog/2024/09/07/your-team-needs-juniors) (Doug Turnbull)

> Learning requires the ability to fail publicly.
While this may be "okay" in groups of only senior+ employees, it becomes *much* more acceptable and common when instruction is a core part of the job.
"Juniors force-multiply seniors, not by writing code, but just by forcing seniors to teach and rethink their knowledge."

### A11y and visual design

- [3 Layers of UI Interaction](https://pow.rs/blog/3-layers-of-ui-interaction/) (Drew Powers)
- [The polish paradox](https://matthewstrom.com/writing/the-polish-paradox/) (Matthew Ström)
- [Accessible color systems](https://stripe.com/blog/accessible-color-systems) (Daryl Koopersmith and Wilson Miner)
- [How to create high-performance CSS animations](https://web.dev/articles/animations-guide) (Kayce Basques and Rachel Andrew)
- [Perceptual color space vs the tools we have](https://observablehq.com/@sebastien/srgb-rgb-gamma) (Sébastien Pierre)

> I'd be interested to look at these gradient transforms in the oklch space.

- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [CSS Guidelines](https://cssguidelin.es) (Harry Roberts)
- [How to generate color palettes for design systems](https://matthewstrom.com/writing/generating-color-palettes/) (Matthew Strom)

> The follow on to modern techniques Stripe is using to generate color systems.
Heavy on the math, which we like.

### Companies scale their systems

- [Supercharging Discord Mobile: Our Journey to a Faster App](https://discord.com/blog/supercharging-discord-mobile-our-journey-to-a-faster-app) (Ruby Feinstein)
- [Removing jQuery from Github Frontend](https://github.blog/engineering/engineering-principles/removing-jquery-from-github-frontend/) (Github Engineering)

> The subsection on incremental decoupling here provides a framework for facilitating painful migrations.
Using jQuery is easy, so preventing new uses of it in a draconian way would lead to inevitable animus.
Setting up linting on new code and a PR bot to pull in the migration orchestration team on relevant PRs allows for the easy suggestion of alternatives.
Stripping functionality out of the version of jQuery used was another good move to prevent regressions.

- [Future-proofing our metadata stack with Panda, a scalable key-value store](https://dropbox.tech/infrastructure/panda-metadata-stack-petabyte-scale-transactional-key-value-store) (Preslav Le, Tanay Lathia, and Mehant Baid)


### Figma engineering

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
- [GraphQL, meet LiveGraph: a real-time data system at scale](https://www.figma.com/blog/livegraph-real-time-data-fetching-at-figma/) (Rudi Chen & Slava Kim)
- [Keeping it 100(x) with real-time data at scale](https://www.figma.com/blog/livegraph-real-time-data-at-scale/) (Arushi Bandi)
- [LiveGraph - Scaling Real-Time Data Access](https://www.youtube.com/watch?v=bnvF-IsQaUE) (Braden Walker)
- [Building a professional design tool on the web](https://madebyevan.com/figma/building-a-professional-design-tool-on-the-web/) (Evan Wallace)
- [Figma, faster](https://www.figma.com/blog/figma-faster/) (Jamie Wong)
- [Building Figma Slides](https://newsletter.pragmaticengineer.com/p/building-figma-slides-with-noah-finer) (Noah Finer and Jonathan Kaufman)
- [What working at Figma taught me about customer obsession](https://www.lennysnewsletter.com/p/what-working-at-figma-taught-me-about) (Sho Kuwamoto)
- [Version control: How a UX writer weighs one word against another](https://www.figma.com/blog/version-control-how-a-ux-writer-weighs-one-word-against-another/) (Henry Freedland)
- [How Figma’s databases team lived to tell the scale](https://www.figma.com/blog/how-figmas-databases-team-lived-to-tell-the-scale/) (Sammy Steele)

### WASM & WebGPU/WebGL

A few dives into high-framerate graphics in the browser by leveraging closer connections to the GPU and WASM.

- [Lessons learned from my first dive into WebAssembly](https://nullprogram.com/blog/2025/04/04/) (Chris Wellons)
- [Voronoi Diagrams on the GPU](https://www.rykap.com/graphics/skew/2016/02/25/voronoi-diagrams/) (Ryan Kaplan)
- [Ray Marching Soft Shadows in 2D](https://www.rykap.com/2020/09/23/distance-fields/) (Ryan Kaplan)

### The difficulty of measuring productivity

- [The worst programmer I know](https://dannorth.net/the-worst-programmer/) (Dan North)
- [Generative organizational culture](https://dora.dev/capabilities/generative-organizational-culture/) (DORA)

> A generative culture is an "organizational culture that is high-trust and emphasizes information flow is predictive of software delivery performance and organizational performance in technology."
The six key aspects of such a culture are:
high cooperation, trained messengers, shared risks, encouraged cross-functionality (bridging), allowing failure to invite inquiry, and experimentation with the novel.

- [Measuring developer productivity with the DX Core 4](https://getdx.com/report/dx-core-4/) (Abi Noda)

> The "Core 4" introduces a frame on four pillars (speed, effectiveness, quality, and impact) for engineering org productivity.
They take care to emphasize the known negative impact of using developer output metrics at an individual level and gamification of any productivity measurement through incentives.
The "paper" itself (can five pages count?) is a brief pitch of this new framework.
We used GetDX for a bit at Grammarly (perhaps Squarespace too, though I'm less certain).
As a reporting system and interviewing platform, it seemed functional.

- [On good software engineers](https://candost.blog/on-good-software-engineers/) (Candost Dagdeviren)

### Against web bloat

- [Run less software](https://www.intercom.com/blog/run-less-software/) (Rich Archbold)
- [Javascript dos and don'ts](https://muan.co/posts/javascript) (Mu-An Chiou)
- [Performance inequality gaps](https://infrequently.org/series/performance-inequality/) (Alex Russell)
- [Platform strategy and its discontents](https://infrequently.org/2024/10/platforms-are-competitions/) (Alex Russell)
- [Building a robust frontend with progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)
- [I don't have time to learn React](https://www.keithcirkel.co.uk/i-dont-have-time-to-learn-react/) (Keith Cirkel)
- [The frontend treadmill](https://polotek.net/posts/the-frontend-treadmill/) (Marco Rogers)
- [The Cost of Javscript Frameworks](https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/) (Tim Kadlec)
- [Second-guessing the modern web](https://macwright.com/2020/05/10/spa-fatigue.html) (Tom MacWright)
- [In defense of the modern web](https://dev.to/richharris/in-defense-of-the-modern-web-2nia) (Rich Harris)

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
- [A 10x faster Typescript](https://www.youtube.com/watch?v=pNlq-EVld70) (Anders Hejlsberg)

> The TypeScript team is migrating the TS compiler to GoLang (in 7.0).
A Senior Staff engineer once told me that any migration/port of a mature project must carry a *minimum* of a 10x improvement in performance, reliability, or maintainability (with no degradation in other categories).
At the time, this seemed steep, but having seen more examples of modernization projects and the long tail to completion,
the ROI for any given project needs to respect both the maturity of the system and the effort related to replacement.
Seeing this happen with the TypeScript compiler is exciting,
since the change feels like a recognition that TypeScript is really not the best choice for writing a compiler.
Tools that allow you to build things often like to dogfood their own tool.
"TypeScript is written in TypeScript" is great marketing material,
but that style of conceit requires the functionality of the product to keep up with internal complexities and consumer expectations.
If you find yourself needing a shoehorn and rib retractor to use your own tool internally,
it may be time to invest heavily in dogfooding with modernization work,
or just accept that you've grown out of the use case for your product.
It's nice to see that the TypeScript team has selected the former.

- [Papers I have loved](https://www.youtube.com/watch?v=SDS5gLSiLg0) (Casey Muratori)

> This is the type of engineering work that initially made me interested in software engineering,
though primarily in the abstract, since I never made games in my early projects.
This talk goes over three (ish) papers that step towards an elegant solution for determining whether or not two complex objects (made of a composite of convex shapes) are intersecting (with an efficient algorithm).
Along the way, it talks about how metaballs are defined mathematically,
discusses approaches to vector interpolation,
and even touches on voroni diagrams.
Good stuff; rather math-heavy.

- [For-Profit (Creative) Software](https://www.youtube.com/watch?v=I4mdMMu-3fc) (EndVertex)

> Most creative software, especially the good iterations, tend to start from a place of passion.
As tools become companies and profit becomes more important,
the good intentions are (usually) tainted by the need to make shareholders happy rather than users.
This leads to price hikes and increasingly antagonistic fee structures that are made to appear cheaper but are not.
I don't know how to solve this, and EndVertex doesn't necessarily either.
This video does, however, catalog the history of this in the context of 3D animation software
and provides some thoughts on what could address the most major concerns (maybe).

## Tools / Info / Examples

No promise that I've gone and used these, but I've certainly read about them and find them compelling enough to list.

- [Zero Alpha](https://zero.rocicorp.dev/docs/introduction) - sync query engine between client and server
- [Yjs](https://docs.yjs.dev) auto-syncing, performance-focused CRDT for collaborative applications ([the algo](https://github.com/yjs/yjs#yjs-crdt-algorithm))
- [Shadow DOM](https://web.dev/articles/shadowdom-v1) - browser-native CSS scoping. Particularly useful in the context of a browser extension or a web app that needs to load a ton of CSS.
- [Open Stories](https://github.com/dddddddddzzzz/OpenStories) - small syndication format for the social web.
- [11ty](https://www.11ty.dev) - static site generator
- [PlayDate SDK](https://play.date/dev/) - game engine for a small console
- [Clay](https://github.com/nicbarker/clay/blob/main/README.md) - highly performant flexbox-model layout lib for arbitrary rendering libraries.
More info in the [introduction video](https://www.youtube.com/watch?v=DYWTw19_8r40)

> This uses an "immediate mode" (all renders are "pure" and updates wholly replace items) interface for GUI spec rather than "retain mode" (CSS is in this category, as existing elements can be modified).
"Immediate mode" libs can reduce the amount of state stored across the application and minimize the amount of recalculation handled outside of their purview.
There's a [video from Casey Muratori](https://www.youtube.com/watch?v=Z1qyvQsjK5Y) ([blog](https://caseymuratori.com/blog_0001)) (game developer of Molly Rocket, Inc. at the time) from 2005 that explains the difference well.

- [curated list of personal sites](https://personalsit.es)
- [Algos](https://madebyevan.com/algos/) (Evan Wallace)
- [Emscripten](https://emscripten.org/) C++ to JavaScript/WASM
- [iA Writer](https://ia.net/) 
- [Hono](https://hono.dev/) New, faster platform-agnositc JS web framework
- [Web-centric Computing](https://web.cs.dal.ca/~jamie/CS3172/Course/assig/zeller.html)

> Anything to do with dates is very risky to implement on your own given all the fuckery going on with timezones and calendars, but these are fun.

- [Easing function curves](https://easings.net)
- [Accessibility developer guide](https://www.accessibility-developer-guide.com)
- [Redwood SDK](https://docs.rwsdk.com) React framework for Cloudflare workers
- [tsdown](https://tsdown.dev/guide/) build TS/JS code with rolldown (similar to tsup with esbuild)
- [An undeniably solid 404 page](https://jonas.do/ope) (Jonas Downey)
- [Feedbin](https://feedbin.com/) RSS Reader
- [Overture](https://github.com/fastmail/overture) the framework of Fastmail (also [Squire](https://github.com/fastmail/Squire) for text editing)
- [Github web components](https://github.com/github/github-elements)
- [Dataloader](https://github.com/graphql/dataloader) for batching graphQL requests to avoid N+1 query issues ([Ruby port](https://github.com/Shopify/graphql-batch))
