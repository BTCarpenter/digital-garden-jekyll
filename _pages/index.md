---
layout: page
title: Home
id: home
permalink: /
nav: false
links:
  -
    title: Vision Baptist Church
    url: https://www.visionbaptist.com
  - 
    title: Unsplash
    url: https://unsplash.com/btcarpenter
  - 
    title: Facebook
    url: https://www.facebook.com/beautcarpenter/
  - 
    title: Twitter/X
    url: https://twitter.com/btcarpenter
  - 
    title: Email Me
    url: mailto:beaucarpenter@hey.com
---

# 👋 Hey!

<p class="bg-indigo-50 dark:bg-slate-900 bg-opacity-70 -mt-4 py-12 px-5 rounded-xl">
I'm Beau, and you've arrived at my website. Take a look around, read a <a class="" href="/posts">post</a>, or find me other places online 👇
</p>

<ul>
{% assign links = page.links %}
{% for link in links %}
  <li><a class="after:content-['_↗'] " href='{{ link.url }}'>{{ link.title }}</a>
  </li>
{% endfor %}
</ul>

## 📝 Pages

<ul>
  {% assign navigation = site.pages | where: "nav", true %}
  {% for page in navigation %}
  <li>
    <a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a>
  </li>
  {% endfor %}
</ul>
## ✨ Latest Writing

<ul>
  {% assign recent_notes = site.notes | sort: "date" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.date | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

## 📬 Email Newsletter

I'm fascinated by local church ministry, the Christian life, writing, media, and note-taking. When I post something new, I'll be sure to send you a quick email. Often, I include related links and other tidbits.

{% include subscribe.html %}

## ✅ Tasks

*Please be patient, I'm still building!* 😌

- 🟥 Update About Page
- 🟥 Update Footer
- 🟥 Write Uses Page
- ✅ Re-write styles in Tailwindcss
- ✅ Dark Mode
- ✅ Rename Repository
- ✅ Add colophon to about page
- ✅ Add email subscribe to post as partial
- ✅ Update Post listing to include publish date
- ✅ Add email subscribe to homepage
- ✅ Update new writing section to show publish date
- ✅ Draft About Page
- ✅ Write Now Page
- ✅ Import posts from hey world

<style>
  .wrapper {
    max-width: 46em;
  }
</style>