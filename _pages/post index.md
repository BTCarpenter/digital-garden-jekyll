---
layout: page
title: 'All Posts'
permalink: /posts
nav: true
---
# ✨ All Writing

<ul>
  {% assign all_notes = site.notes | sort: "date" | reverse %}
  {% for note in all_notes %}
    <li>
      {{ note.date | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
