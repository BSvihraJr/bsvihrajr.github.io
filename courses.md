---
layout: page
title: Courses
permalink: /courses/
---

# Projects, techniques, etc

<ul>
    {% for course in site.courses %}
      <li><a href="{{ course.url | relative_url }}">{{ course.title }}</a></li>
    {% endfor %}
</ul>