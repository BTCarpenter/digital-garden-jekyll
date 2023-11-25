---
layout: page
title: Home
id: home
permalink: /
nav: false
---

# 👋 Welcome!

<p style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px;">
My name is Beau and I don't know what to say! 🤓
</p>
- [Vision Baptist Church](https://www.visionbaptist.com)
- [Unsplash](https://unsplash.com/btcarpenter)
- [Facebook](https://www.facebook.com/beautcarpenter/)
- [Twitter](https://twitter.com/btcarpenter)
- [Email Me](mailto:beaucarpenter@hey.com)

## ✅ Tasks

*Please be patient, I'm still building! 😌*

- ✅ Update new writing section to show publish date
- 🟥 Update Footer
- 🟥 Write About Page
- 🟥 Write Now Page
- 🟥 Import posts from hey world

## 📝 Pages

<ul>
  {% assign navigation = site.pages | where: "nav", true %}
  {% for page in navigation %}
  <li>
    <a class="internal-link" href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a>
  </li>
  {% endfor %}
</ul>
## ✨ New Writing

<ul>
  {% assign recent_notes = site.notes | sort: "date" | reverse %}
  {% for note in recent_notes limit: 5 %}
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
