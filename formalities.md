# Assignment 2

## Formalia:

Please read the [assignment overview page](https://github.com/suneman/socialdata2026/wiki/Assignments) carefully before proceeding. This page contains information about formatting (including formats etc.), group sizes, and many other aspects of handing in the assignment.

_If you fail to follow these simple instructions, it will negatively impact your grade!_

**Due date and time**:

- The assignment is due on Monday April 6th, 2026 at 23:55.
- Hand via DTU Learn.
- You should simply hand in the link to the github page with your short data story. (You can't hand in a link directly, so just put the link to your website in a text file and upload that).

## A2: A short data story

This assignment is to create a short data-story based on the work we've done in class so far. In particular you will solve _Exercise 2.1_ from _Week 8, Part 2_. The exercises for that week contain full details on how the story should be constructed.

You will need to think about how you place that page on your personal github page (there are several ways of doing that and it's not hard. It's OK to ask an LLM for help). At some point you'll also need to host your final project there, so keep that in mind too.

## Part 2: A Short Data Story

Now for the main event. Time to put it all together. You're going to create a short data story: a narrative visualization piece published on your GitHub Pages site. Think of it as a magazine article with interactive graphics: a reader scrolls from top to bottom, encountering text and visualizations that build toward an insight.

This is a micro version of what you'll do in the final project. The constraints are tight on purpose. It's my way of forcing you to think carefully and make choices about what matters most. In the future, when you get a job, that's an important skill. Your busy boss won't have time to see all the plots, just the essential ones.

In Exercise 1.2 you thought about what it takes to guide a reader through a story. Now you'll do it for real.

> _Exercise 2.1_: Create a data story. Follow the specifications below.

### The story

- **Find your own story to tell** based on the work we've done analyzing SF crime data in Weeks 1–7. The idea is to choose an insight (perhaps how something changed over the years, a surprising geographic pattern, an unexpected correlation) and communicate it to a general audience reader.
- The story should have a **brief introduction to the dataset** so that readers from outside the class can understand what they're looking at. Don't assume your reader knows what "Personal Focus Crimes" are or where the data comes from.

### The format

- The page must be hosted on your **GitHub Pages site** (from Week 7).
- Use the **_Magazine Genre_** from the Segel & Heer paper: a single web page that reads linearly from top to bottom. Text and visualizations alternate — the author guides the reader through a specific narrative. **Important**: You don't need two columns or a fancy layout. What matters is the _linear, author-driven structure_: you control what the reader sees and in what order.
- Remember what you learned in Exercise 1.2 about the author-driven end of the spectrum — this is your chance to practice it.
- **Aim for brivity**. Quality over quantity: a tight & short piece with a clear point beats a rambling essay that tries to cover everything.

### The visualizations

Your story must include **exactly three visualizations** (not more, not fewer. It is OK to have multi-panel figures, those count as one). Each should be a different type:

1. **One static chart**: a time-series, bar chart, or one of the fancier types you've learned (calendar plot, polar bar chart, box plot, etc.) — whatever best supports your story. Export it as a PNG or SVG using `plt.savefig()`.
2. **One map**: a choropleth (Plotly), a Folium scatter/heatmap, or a `HeatMapWithTime` animation. Export using `fig.write_html()` or `m.save()`.
3. **One interactive Plotly visualization**: this should contain **different data** than the exercises from Week 6. It's a plus if it's a different _type_ of interactive viz altogether (not just another bar chart with the same structure). Export with `fig.write_html()`.

You already know how to export and embed all of these from Week 7 — use those skills here.

### Make it look good

- **Figure captions**: Every visualization needs a description. In scientific papers we always have captions with detailed descriptions. When you create data-visualizations, the picture is less clear. Sometimes captions are the right choice. Other times it makes more sense to keep the figure description the text round the figures. No strict rules apply in dataviz. But <b>for this assignment I want captions</b>, captions that tell the reader what they're looking at and what to notice. Don't just label axes; tell the reader _what the figure shows and why it matters_.
- **Visual consistency**: Aim for a consistent look across your three figures — similar color palettes, similar fonts, similar level of polish. This is one of the things that separates amateur from professional work. (Go nuts with our LLM here, I really hope to see some nice webpages).
- **Follow the recommendations** from the video on nice figures (Week 2).
- **External sources**: It's a plus if you can back up your findings with outside evidence — news stories, Wikipedia articles about specific neighborhoods, city policy changes. When you see something in the data (a spike, a drop, a geographic hotspot), try to find out _why_. Use real references at the end of the text.
