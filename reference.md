---
layout: page
title: Reference
permalink: /reference/
---
<i>[Home](/) ></i>
# Popular
<ul>
    {% for reference in site.references %}
      {% if reference.parent == "reference" and reference.popular-reference == true %}
        <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
      {% endif %}
    {% endfor %}
</ul>
# All
<ul>
    {% for reference in site.references %}
      {% if reference.parent == "reference" %}
        <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
      {% endif %}
    {% endfor %}
</ul>