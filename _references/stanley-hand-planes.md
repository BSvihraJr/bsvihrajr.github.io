---
layout: page
title: Stanley Hand Planes
type: reference
parent: reference
permalink: /stanley-hand-planes/

popular-reference: true

todo: Build category dynamically at compile time, and add a page (consider using this page) that accepts category id for dynamic filtering. Maybe this is done in python when creating these md pages?
---
<i>[Home](/) > [Reference](/reference/) ></i>
# By category
<ul>
    {% for reference in site.references %}
      {% if reference.parent == "stanley-hand-planes" %}
        <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
      {% endif %}
    {% endfor %}
</ul>
# By number
<ul>
    {% for reference in site.references %}
      {% if reference.grandparent == "stanley-hand-planes" %}
        <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
      {% endif %}
    {% endfor %}
</ul>