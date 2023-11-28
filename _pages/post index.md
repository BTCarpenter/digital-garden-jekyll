---
layout: page
title: 'All Posts'
permalink: /posts
nav: true
---
# ✨ All Writing

<ul>
  {% assign all_posts = site.posts | sort: "date" | reverse %}
  {% for post in all_posts %}
    <li>
      {{ post.date | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
