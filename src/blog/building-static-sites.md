---
title: Primer on building simple static sites
description: Some initial guidance on writing simple static sites using HTML and CSS
tags: [engineering, education]
publishedDate: 2025-03-01
updatedDate: 2025-03-01
isDraft: false
---

> This is a work in progress.
I've had reason to make a few very small static sites recently
and am helping some friends get up to speed with the basics.
Think of this as a primer on HTML and CSS that would be best opened next to the [Mozilla developer docs](https://developer.mozilla.org) and a search window.
If you find the information below unbalanced or lacking, let me know how and where.
My contact info is on my homepage.

The following is a ongoing guide to building simple sites using HTML and CSS.
Most of the time, static sites will not need Javascript, so this should be a good starting point.
The information below is (understandably) a small subset of what is at your disposal,
but should keep you on track for following best practices.

Another upside to this approach is that it is a good way to understand the relationship between HTML, CSS, and Javascript.
Jumping to a framework like React or Vue too early can make it hard to understand the relationship between the three.
Additionally, they add significant page weight without providing a commensurate benefit for small sites.
If you must use a framework, consider [Astro](https://astro.build) or [Svelte](https://svelte.dev), both of which are designed to ship minimal HTML, CSS, and Javascript.

## HTML

This is your structure.
HTML generally equates to a series of boxes on the screen that contain content.
All visual elements get rectangles drawn around them, which can be used for positioning and grouping.
Adding CSS styles to your HTML will allow you to control the layout and styling of your site, but it will not change the underlying structure of the page.
Getting this structure right is the first step to making a good site.

There are many different [HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML), but most small sites will get away with only using the following.

### Root elements

These define the core structure of your document.
Any HTML page should have only one of each of these (In addition to a `<!DOCTYPE html>` declaration at the top of the file to ensure the browser knows it's an HTML document).

- `html` - the root element, for the entire document
- `head` - the head element, for metadata about the document (e.g. title, description, etc.). This is not visible to the user. 
- `body` - the body element, for the content of the document. This is visible to the user and contains all the elements that make up the page.

### Head elements

The tags in the `head` element are important for SEO and page visibility on search engines.
They will determine the title of the page, the description, image used on links, and other metadata that is not visible to the user.
Tags in the `head` such as `link` and `script` are used to inform the browser of additional resources that are needed for the page to render (e.g. a stylesheet or Javascript).
Standards for what to include in the `head` are [well-documented](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML).

- `title` - the title of the page, displayed in the browser tab.
- `meta` - metadata about the document, including the description, image used on links, and other metadata that is not visible to the user.
- `link` - a link to a resource, such as a stylesheet or favicon.
- `script` - a script, for Javascript.

### Layout elements

These are used to position content on the page.
These elements are generic and only provide the ability to group content together.
More semantically specific elements exist (e.g. `section` and `nav`) and may be relevant in specific situations, but these are the most basic.

- `div` - a division, a generic container for content. This is [block-level](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content) and will take up the full width of its parent, rendering on a new line.
- `span` - a span, a generic inline container for content. This is [inline-level](https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content) and will take up as much width as its content, rendering on the same line as neighboring elements.

### Text elements

These are used to display text on the page.
Headings should be starting with `h1` and moving down to `h6` for subheadings.
Not all (or any) headings need to be used, but starting with and `h1` will reduce the need to refactor later.

- `h[1-6]` - headings, for titles and subtitles. Only one `h1` per page. Any other headings should be used in a nested manner (e.g. `h2` inside `h1`, `h3` inside `h2`, etc.).
- `p` - a paragraph, for text content. Within `p` tags, line breaks in the HTML document will not be rendered as line breaks in the browser. Whitespace across newlines is trimmed to a single space. Use the `br` element to force a line break.
- `a` - a link, for hyperlinks. To be used inside other text elements.
- `ul` - an unordered list, for a list of items
- `ol` - an ordered list, for a list of items
- `li` - a list item, for an item in a list

#### Text decoration

These are used to style text.
Much of the elements here should feel familiar from other design software.
The `br` element causes a line break within a text element, typically a `p` tag.
This differs from switching to a new `p` element, which will cause the layout to be subject to element layout rules rather than just the text styling.

- `b` or `strong` - a bold, for bold text
- `i` or `em` - an emphasized, for italic text
- `u` - an underline, for underlined text
- `s` - a strikethrough, for strikethrough text
- `mark` - a highlighted text, for highlighted text
- `blockquote` - a block quote, for a quote
- `br` - a line break, for a line break

### Media elements

These are used to display media on the page.
Using `picture` elements allows for responsive images, which is a more modern approach to the `img` tag and ensures that the most correctly sized image is loaded for the user's device.
Add `alt` attributes to all media elements to provide a text description that is more descriptive than the default.

- `img` - an image, for visual content
- `picture` - a container for responsive images, to be used with `source` and `img` elements
- `source` - a source for a media element; provides URLs at different widths of the same image and sizing information for how to select the correct image
- `video` - a video, for video content

### Interactive elements

This area is intentionally left blank for now.
I will update this with details on `form` elements, `input` elements, and other interactive elements as I get time.
For creating initial landing pages for personal projects, the above elements should be sufficient.

## CSS

This is your styling.
CSS generally equates to a series of rules that apply to the elements in your HTML.
Giving classes to your elements is a good way to make them easier to style.
Classes are declared in the `class` attribute of an element.

```html
<div class="container">
  <h1>Hello, world!</h1>
</div>
```

CSS stands for Cascading Style Sheets.
The "cascading" part means that styles are applied in order and can be overridden.
All styles are applied as rulesets, which are composed of a selector and a declaration block.

```css
h1 {
  color: var(--primary-color);
}
```

The selector is the part before the `{` and the declaration block is the part between the `{` and the `}`.
The declaration block contains one or more declarations, which are a property and a value, separated by a colon and ending with a semicolon.
Selectors have levels of specificity, which determine which styles are applied to an element.

### CSS Selectors

CSS selectors are used to select elements in the HTML document.
They can be used to select elements by their tag name, class, id, attribute, and more.
Selector rules are applied in order [according to their specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity).
Generally, the more specific the selector, the more weight it has.

- `element` - a selector for an element by its tag name.
- `class` - a selector for an element by its class.
- `id` - a selector for an element by its id.
- `attribute` - a selector for an element by an attribute.

```css
/* Selects all h1 elements */
h1 {
  color: var(--primary-color);
}

/* Selects all elements with the class "container" 
(<div class="container">) */
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Selects all elements with the attribute 
data-type="container" (<div data-type="container">)
This tends to be more useful in larger projects */
div[data-type="container"] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

#### Selector Anti-patterns

There are a few common anti-patterns that should be avoided,
as these will make it harder to reason about why styles are applied.
Generally, they remove the predictable nature of CSS and make it harder to maintain.

- Avoid using IDs as much as possible.
- Avoid using `!important` to override styles.
- Avoid using `*` to select all elements.

### Media queries

Media queries are a way to apply styles based on the size of the screen.
They are declared in the `@media` rule, which is a block of rules that apply to a specific media type.

### CSS Variables

CSS variables are a way to store values that can be reused throughout your stylesheet.
They are declared in the `:root` selector, which is the root element of the document.
If you find yourself repeating the same values in multiple places, consider using a variable,
as this will make it easier to change the value later.
Shared colors, fonts, and spacing values are good candidates for variables.

```css
:root {
  --primary-color: #000;
}
```

### CSS Units

CSS units are a way to specify the size of elements.
They can be absolute or relative.
Multiple values can be used together with the `calc()` function (e.g. `calc(100% - 1rem)`).

- `px` - a pixel, for absolute size
- `%` - a percentage relative to the parent element
- `em` - the font size of the element
- `rem` - the font size of the root element
- `vh` - a viewport height, for relative size
- `vw` - a viewport width, for relative size

### CSS Layout (flexbox and grid)

CSS layout is a way to position elements on the page.
Flexbox and grid are two of the most common layout methods.
Both have many nuances and are best learned by doing.
Below are links to games that can help you understand the concepts.

- [Flexbox froggy](https://flexboxfroggy.com/)
- [Grid garden](https://cssgridgarden.com/)

### Which rules do I need?

This is a hard question to answer.
It depends on the complexity of the site and the desired level of control.
The Mozilla docs have comprehensive [guides for common styling patterns](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides) and a series of ["layout cookbooks"](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook) that cover many common use cases.
