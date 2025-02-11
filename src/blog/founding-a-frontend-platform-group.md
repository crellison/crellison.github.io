---
title: Founding a Frontend Platform Group
tags: [engineering, platform, frontend]
description: A proposal for building a Frontend Platform Group to standardize tooling and practices across an organization, improving developer experience and productivity.
publishedDate: 2024-11-14
updatedDate: 2025-02-11
isDraft: false
---

When I left Squarespace, we had a thriving Frontend Platform Group.
One of the key successes of the group was a shared platform scorecard (from Engineering Platform) that provided a unified method of evaluating the expected support level for a given feature surface.
The common comparison passed around this was that of a hotel star system, where a 5-star rating ensures a higher level of support and service than a 3-star or a 1-star rating, but also costs relatively more to maintain.
This system, combined with a golden path of preferred patterns and tooling, provided a clear path for engineers to understand the tradeoffs of a given feature surface.

I joined Grammarly with the long-term goal of developing their young Frontend Platform Group into a similarly thriving system.
Unfortunately, I learned I would be leaving Grammarly before I could see that goal realized.
During the weeks immediately prior to my departure,
I was shopping around a proposal for a Frontend Web Standardization plan that could have catalyzed development of such a system.
This post draws from that proposal and and generalizes the ideas to any organization looking to standardize their frontend codebase.

## Why focus on platform engineering?

Standardizing tooling across an organization is difficult, even when this is considered from the outset of development.
Product launches and feature work always draw attention away from routine upgrades.
However, failing to stay current on libraries leads to inconsistencies throughout the organization, which hampers cross-team collaboration.
If helping another team requires significant effort onboarding, cross-team projects (especially for new hires) are effectively discouraged.
This increases the silos already present in large organizations, and increases the likelihood of new projects generating similar silos.

> Failure to establish some standards and guidance has a snowballing effect on the engineering dissonance across the organization.

The inability to easily share code, solutions, and patterns across teams impacts business success by slowing the velocity of new product development.
This may lead some engineers to fix systems out of frustration, but efforts without broad support are unsustainable.

A lack of standardization also impacts employee satisfaction and retention.
Just as a tidy house is more welcoming to guests, shared standards across Javascript and Typescript surfaces improve the developer experience.
Enabling engineers to focus on the business logic of features, rather than the code it takes to support them, reduces the time spent on non-value-add work.
In this instance, reallocating engineers to work on a high-priority feature incurs a lesser ramp-up cost associated with onboarding.

The more of our common workflow that we share, the more we can solve problems once and propagate those solutions down to all teams.
This raises the bar of engineering across the organization, enables teams to move faster, and ensures more predictable delivery of new features.

## The initial goals of a Platform Engineering Group

This push for standardization argues for normalization in line with established best practices.
The goal is to provide a guide that helps all teams use shared tooling and patterns that best allow for communal success.
While this may lay the foundation for larger initiatives, established standards initially raise the floor of minimum expected quality across all projects at a company.
This reduces the decisions engineers need to make when creating new tools and features.
It also will make context switching between projects easier and reduce the frequency of unexpected difficulties when integrating internal tools into existing systems.

> In the same way a design system provides solutions for web components that allow developers to focus on the business logic of features, the frontend platform provides solutions for code and repo management to enable developers to focus on their task at hand.

## What to watch out for during the founding phase

Founding a Frontend Platform Group typically incites some discord over immediacy of certain changes.
Claiming that everything will be migrated right away is a surefire way to kill the initiative.
A better approach defines a plan to establish a collection of preferred patterns and tooling that can be incrementally adopted.
Ideally, using these should be abundantly easy in new projects, but not onerous in legacy projects.

> Larger, extant projects may require their own initiatives and migration plans.
Starting small is good.
Starting simple is good.
Provide a path for teams to walk, and success will be an easier journey.

The initial iteration of frontend standardization specifically leaves out projects whose complexity or implication is better suited to an isolated proposal.
While this varies by organization, common examples relate to large legacy code architecture and notably costly migrations to new tooling.
Some examples could include: immediate migration of key components off of a legacy framework and relocation of all JS/TS code into a single monorepo.
While such projects may have large upsides, they themselves are complex enough to warrant their own projects building off of the frontend platform.

A loose rubric I've used to gauge if something is too big is as follows:
If any of the following three statements is true, the item in question may be better suited to its own project.

- The implementation work involved in standardizing will likely take a team of engineers over a quarter
- The proposed standard is not a defendable best practice
- The proposed standard does not have a track record of improving development or code quality

Admittedly, this rubric is somewhat subjective, but it's a frame on which to hang larger decisions.
Expectations of adherence will change over time.
Imposing too much structure and rigidity too early will alienate the teams that are expected to adopt the platform.

> It's easy to imagine yourself already in the future with the platform in place,
but this early stage must be incrementally built up.
Sweeping dictums sow unease and resentment.
You (the platform engineering advocate) may believe in the process,
but your colleagues may need time to see the benefits.

## Founding methodology

The primary outputs initially will be ADR documents and published artifacts (e.g. JS libraries, docker images (for CI testing), and markdown guides) that facilitate adherence to the decisions recorded.
Discoverable documentation is key.
People need to know where to find the single source of truth for the platform and be able to read the rationale for the decisions made.

Rolling changes should be as easy locally as in CI/CD and QA environments.
Testing guidelines and linting rules should apply to new code first, while allowing adoption into legacy projects over time.
You may run into questions of ownership through static analysis of existing codebases—these may give rise to new questions and projects targeting dead and orphaned codebases.

A scorecard or some form of segmented checklist tends to be a useful tool to gauge levels of adherence to a set of standards.
It's worth exercising caution here.
The old saying of "what gets measured gets improved" applies here (or "when performance is measured, performance improves," pick your poison and attribute Peter Drucker or Karl Pearson at your leisure).
The point being that the way you define success of the provided platform will impact the longevity of the system.
Adoption of the rubric or scorecard should be sufficient at first.
Migrations to new preferred tooling can happen over time.

> Soliciting team feedback on all processes involved will ensure sustainability and acceptance of the platform.
You might already have an ADR/RFC channel in place, but if not, this is a good time to create one.
Such documents are proven patterns for engaging with stakeholders and getting feedback,
and they will become invaluable to newcomers as the platform matures.

Creation of a cross-functional working group of platform advocates is a good way to ensure buy-in from across the organization.
These individuals can help with early adoption and provide feedback on the ergonomics of various migrations.

At some point, you'll require more communal effort.
This is where explicit approval from or partnership from engineering leadership will be critical.
Without sponsorship from principle engineers, directors, or the CTO,
teams may be hesitant to include platform adoption onto their roadmap.
Ideally, platform adoption by some metric can be tied to an org-wide OKR.
This makes it easier for teams to justify the time and effort required to adopt the platform.
Otherwise, platform adoption will be a low priority that is relegated to the bottom of the backlog.

## Initial order of operations

Modernizing and standardizing projects across an organization will be a drawn-out process.
Beginning in the middle, as mentioned above, will lead to frustration, inconsistent timelines, and unexpected delays.
It's best to begin with core tooling and basics before attempting to unify on larger and less clear topics.

Below is a semi-sequential categorization of standards designed to start with the basics and move into complexity.
Start with low-cost standards that could be integrated into an existing repo in under a day, and ideally in under one hour.
Most of these "core features" don't require much in the way of published artifacts from the platform group.
Later items may require more guidance or depend of the creation of tooling before they can be adopted.

The list below is not exhaustive.
It's a starting point for a frontend platform group looking to take ownership of how things get built.

### Core features

- Node version (LTS) and Node version management (nvm, fnm, asdf, etc.)
- Typescript version
- Define the packageManager used by your repo in the package.json (and use a lockfile)
- Shared Browserslist configurations for websites and web apps
- Standard CI images for Node actions
- No unnecessary usage of the engines field

### Shared style

- Company eslint config (coding conventions)
- Standard prettier configuration
- Commit hooks for formatting/linting

### Testing

- When to write unit tests and expected code coverage for new code
- E2E test suggestions (framework and what to test)
- Visual regression testing tools

### Documentation

- README content expectations
- CONTRIBUTING content expectations
- Shared PR description templates
- All documentation is published (e.g. no links to chat threads with info)
- All files in the repo have a listed CODEOWNER
- No listed owners are deactivated users

### Commands and env setup

- Env requires no special setup (beyond global Node toolchain setup)
- All projects can be run locally (this includes provisioning/stubbing out of services)
- All projects have a QA or staging environment (or, for libraries, a prerelease method)

## New project guidance

Your company won't stop building new things while you're busy standardizing the old.
This is why it's important to provide guidance on where new libraries should live.
Modern monorepo tooling can dramatically simplify the setup of new projects while ensuring adherence to the platform by default.
With this, you can also provide easy publishing workflows and testing frameworks to incentivize development in the monorepo.
The tooling used is up to the standards of your organization.
Nx, Rush, Turborepo, and Bazel are all viable options with varying tradeoffs.
As with anything, know your tool and leverage what it can do.

At a minimum, this shared home for new projects should include:

- a single command to bootstrap a new project (a batteries-included mindset)
- a CI/CD pipeline that runs on code affected by the changes in the PR only
- publishing/deploying processes that "just work"
- ongoing maintenance by the frontend platform group to ensure packages therein follow all published standards by default

## Moving past the first stages

It's been six months or twelve months or eighteen months since you launched your platform engineering group.
You got buy in from leadership, and now teams are steadily adopting the platform.
New projects are using the shared monorepo.
You've dealt with some growing pains related to tooling and infrastructure, but the platform is working well.

What next?
Maybe you want to go [the route of Shopify](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/) and use their Backstage tool to provide a more unified home for all things platform.
Maybe it's time to [operationalize developer surveys like Brex did](https://boredhacking.com/stop-building-the-wrong-tools/) to get a pulse on the health of the platform.
Maybe it's time for one of those bigger projects you intentionally left out of the initial scope.
Whatever the case, data and community feedback should be your guide.
The platform should enable other developers to do their best work.
Listen to them.
