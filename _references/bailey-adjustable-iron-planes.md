---
layout: page
title: Stanley "Bailey" Adjustable Iron Planes
type: reference
parent: stanley-hand-planes
permalink: /stanley-bailey-adjustable-iron-planes/
---
<i>[Home](/) > [Reference](/reference/) > [Stanley Hand Planes](/stanley-hand-planes/)</i>

<ul>
    {% for reference in site.references %}
      {% if reference.parent == "bailey-adjustable-iron-planes" %}
        <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
      {% endif %}
    {% endfor %}
</ul>