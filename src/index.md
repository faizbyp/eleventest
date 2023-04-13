---
title: Home
layout: "base.njk"
---

# Hello!

Welcome to Eleventest.

This is my place to learn about static site generator with [Eleventy](https://www.11ty.dev/)

### My Blog Posts

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}