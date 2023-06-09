---
layout: page
title: Woodworking Joints
type: reference
parent: reference
permalink: /woodworking-joints/

popular-reference: true
---
<i>[Home](/) > [Reference](/reference/) ></i>
# Common joints
<ul>
    {% for reference in site.references %}
      {% if reference.parent == "woodworking-joints" and reference.common-joint == true%}
        <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
      {% endif %}
    {% endfor %}
</ul>
# All joints
<ul>
    {% for reference in site.references %}
      {% if reference.parent == "woodworking-joints" %}
        <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
      {% endif %}
    {% endfor %}
</ul>