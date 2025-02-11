---
title: Building a cultural awareness of web performance at Squarespace
description: How Squarespace's Web Performance team evolved from building monitoring tools to fostering a company-wide performance culture.
tags: [web performance, engineering]
publishedDate: 2024-05-01
updatedDate: 2025-01-15
isDraft: false
---

> I drafted this blog post in May 2024, but did not get to publish it before leaving Squarespace. I'm publishing it now, as it tells the story of how the Web Performance team grew its platform and culture over the years, which I think is a good story to share.

Early this year (2024), the Squarespace Web Performance team re-architected the backend of its internal performance monitoring platform, which tracks page speed data across all Squarespace products.
The migration itself was a modernization effort that dramatically reduced the cost of maintenance for the platform and improved the reliability of our data.
After completing this project, we reflected on how the company has grown through the lens of a performance-aware culture since the team's inception.
The path was not always linear.
Specific projects that have since been terminated suggested parts of today's performance platform.
Seeking silver bullets can easily lead to more wasted time than success.
All this we learned through trial and error.
As the current tech lead and a member since (almost) the beginning, I'd like to share some thoughts on what has contributed to our success.

Squarespace founded its Web Performance team in February 2018 and began its first project in March.
The project could have been a performance improvement targeted at site loading speeds, investigations into latencies of site editor actions, or partnering with a backend team to enable improved asset compression for modern browsers (all work we did later).
Instead, we spent the first months building a data collection pipeline for performance metrics that would eventually integrate into all Squarespace products.

## Our narrative depended on telling the performance story from our users' perspective

You must start with some form of performance monitoring.
Without monitoring, you rely on customer complaints and developer altruism to raise performance concerns.
Reactionary performance work leads to teams putting out fires once they are already burning down the hillside of a feature.
Performance data collection enables proper forest management.
You get alerted when flammable brush is building up, where hazardous campfire sites are, and when water levels in streams change.
We built our performance monitoring platform with the goal of enabling this behavior.

In 2018, the world of web performance was less standardized.
We were one year away from the earliest browser support for the [Element Timing API](https://wicg.github.io/element-timing/).
The Chrome team was still two years from [announcing the Core Web Vitals project](https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html), "an initiative by Google to provide unified guidance for quality signals that … are essential to delivering a great user experience on the web."
Various companies offered performance metric tracking services at the time, but the industry had yet to land on what was most important.
The industry had already realized that [the load event was not a great signal to use](https://www.stevesouders.com/blog/2013/05/13/moving-beyond-window-onload/), but it wasn't clear that newer metrics like [Speed Index](https://docs.webpagetest.org/metrics/speedindex/) were the total solution either.

As we looked at off-the-shelf options, we realized that, aside from not allowing for the customization we may want, the scale of Squarespace sites may prevent adopting a third-party solution.
Squarespace hosts some 3% of the internet.
Those sites collectively see roughly 465 million page views per week from over eight thousand distinct user agents.
At this volume, off-the-shelf pricing for Real User Metrics (RUM) collection service (like those of DataDog, Speedcurve, or Pingdom) costs somewhere in the order of $100k/month, according to publicly available enterprise pricing estimates.
The monitoring platform we built (and still use today) costs two orders of magnitude less.
Perhaps another blog post will talk about the technical architecture of that system, but the fascinating story here is what we learned from some early mistakes in development.

## Reinventing the wheel goes poorly

From early on in the development of our monitoring system, we knew data visualization would be critical to establishing durable performance awareness in the company.
The first version of this dashboard was a custom web app maintained by the team.
We felt this would provide more flexibility than using Grafana and allow us to better provide relevant context to the information displayed.
We maintained this dashboard for a couple of years, building out new charts and aggregations as part of our standard workflow.
However, this data presentation approach proved suboptimal for various reasons.

As a small team, we had manufactured more work for ourselves with this data visualization and analysis approach.
Maintenance of this dashboard stacked on top of our core goal of discovering and planning work to improve the performance of Squarespace products.
As a new product, this dashboard had a variety of growing pains.
We would find bugs in chart data, our aggregation system, and visualization logic connections.
All these extra tasks distracted our focus away from analysis and optimization work.

To better understand the dashboard's importance to our consumers, Squarespace product engineers, we performed a series of consumer interviews with team leads and managers.
These interviews taught us that the dashboard did not answer the questions we hoped it would
In most cases, leads checked the dashboard weekly or monthly.
Those who regularly checked performance data did so via our integration with business analytics data.
The dashboard itself didn't help them catch performance issues or better understand how performance matters in the context of their product ownership.
Additionally, they wished that the raw data was more generally consumable by their data analytics engineers for more targeted analysis.

These interviews led us to pivot our approach to performance analysis.
We ended up deprecating and taking down that version of the performance dashboard to reduce the maintenance burden.
In its place, we deployed a Polynote query UI that we or other data analysts could use to perform ad-hoc queries at the request of product teams.
We focused more on education through writing documentation on how to think about performance.
At the same time, in 2021, we started our initial foray into Performance Audits, a reciprocal tool we now use to identify performance issues and gain commitments from product teams to address those issues.

## Getting platform work onto product team road maps

Performance Audits catalog the most impactful potential performance improvements for a product or service that the Web Performance team can identify at a given time.
We perform these at the request of product teams only with the agreement that the team will address 80% of "high priority" items listed in the audit.
Over time, this audit process has evolved and is informed by the corollary process used by our Accessibility team.

Audits have changed the way we approach performance work.
The reciprocal agreement that underpins the audit process results in higher engagement from audit recipients.
In a sense, the audit reserves time on product team road maps for performance work.
Each party works in their area of expertise, minimizing the time spent gaining familiarity with a system.
Web Performance investigates and diagnoses performance issues detracting from a product's user experience.
Product owners then leverage their understanding and familiarity with their domain to execute specified corrections.

Carving out time from feature development is hard, especially when the work associated with it is as nebulous as "improving performance."
Many studies have shown that faster site speed leads to more significant revenue, but knowing what matters and how to prioritize that work is nuanced.
Consider the case of a new customer entering the Squarespace funnel.
They land on the Squarespace homepage, click "Get Started," and open the template store.
Upon selecting a template, the user enters the page editing view, where they can modify their site.
We already have three different page loads and multiple interactions to consider.
How does the homepage load experience impact conversion into the template store?
How does template store load impact template selection?
What of the load speed of the editing experience?
Edit mode interactions?
Latency when the user saves their site?
For each of those steps, there may be a myriad of different contributing factors (image load speed, interaction delay, network latencies, JS bundle size, layout stability, etc.).
Which of these correlates to changes in conversion rate?
What is the estimated scope of the fix for any given issue?

Our team cannot claim to know the answers to all of these questions, but we spend our days learning deeply about identifying solutions to performance.
The data integrations into business metrics and our analysis platform allowed us to prioritize better the opportunities we find.
Performance Audits have remained a crucial component of our workflow and essential to developing a more robust performance culture at Squarespace.

## Performance Dashboard 2.0

In 2022, Squarespace normalized on Google Cloud Platform (GCP) as the future home of most deployed services.
With this, we gained access to the cohort of data management and analysis infrastructure offered on GCP.
Chief among these products, as it relates to this story, are BigQuery and Looker Studio.
Managed analytics and robust dashboard tooling allowed the Web Performance team to revisit our data visualization solutions.
Two primary reasons we shut down the original dashboard were infrastructure management and feature maintenance.
These now came for free.
All that remained was to decide what data to aggregate and display.

With lowered maintenance costs associated with building analytics pages, we have been able to iterate more rapidly on designs and views.
The dashboard now provides a more complete picture of the state of performance than we were able to provide in its original iteration.
Moreover, we're seeing increased engagement and trust in our performance platform.
The availability of our data and the educational work we put in earlier is paying off.
We've received and filled multiple feature requests for new visualizations, country-specific data, and user timing views.

Product teams can now use the dashboard as a research tool.
As we build out more views and establish strong patterns for data analysis, the team will be able to service investigation requests without slowing the cadence of the performance platform's expansions.
This data pipeline is only part of the story of the Web Performance team's scope at Squarespace.
We maintain frontend tracing systems, provide a polyfilling solution, and offer a modernized image component for all Squarespace rendering contexts, to name a few.
We plan to continue providing the Performance Audit platform as a deep-dive solution to more exhaustive performance analysis.
The dashboard is a self-service starting point for smaller-scoped investigations into product performance characteristics.

## Looking ahead

The world of web performance is ever-evolving.
Knowing where to start when analyzing product performance and site speed can take time and effort.
As the Web Performance team, we seek to be the experts who can ease this burden for all our consuming teams.
Our six-year history at Squarespace has informed how we operate as a platform and how we relate to our consumers in the product organization.
The story of this blog post attempts to capture the most important practices we've adopted.
User interviews keep us honest about what value we are generating.
Presentations, emails, and platform documentation inform current and potential users about platform developments and features.
The audit process has helped establish durable relationships and commitments with product teams.
Investing in a self-service solution gives our consumers greater confidence in our platform and the agency to explore issues independently.
All these learnings serve our goal of enabling product development teams to efficiently achieve best-in-class performance for all Squarespace customers.
