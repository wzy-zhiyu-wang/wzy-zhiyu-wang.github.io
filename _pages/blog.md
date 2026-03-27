---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 2
pagination:
  enabled: true
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

{% if page.pagination.enabled %}
  {% assign postlist = paginator.posts %}
{% else %}
  {% assign postlist = site.posts %}
{% endif %}

<ul class="post-list">
  {% for post in postlist %}

  {% if post.external_source == blank %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
  {% else %}
    {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
  {% endif %}
  {% assign year = post.date | date: "%Y" %}
  {% assign tags = post.tags | join: "" %}
  {% assign categories = post.categories | join: "" %}

  <li>
    {% if post.thumbnail %}
    <div class="post-thumbnail">
      <a href="{{ post.url | relative_url }}">
        <img class="card-img" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" />
      </a>
    </div>
    {% endif %}
    <h3>
      {% if post.redirect == blank %}
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% elsif post.redirect contains '://' %}
        <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
        <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.671 14.573L26.671 9.716 17.327 9.716 17.327 11.387 23.839 11.387 9.716 25.51 10.894 26.689 25 12.583 25 19.095 26.671 19.095z"
            class="icon"
          ></path>
        </svg>
      {% else %}
        <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
      {% endif %}
    </h3>
    <p>{{ post.description }}</p>
    <p class="post-meta">
      {{ read_time }} min read &nbsp; &middot; &nbsp;
      {{ post.date | date: '%B %d, %Y' }}
      {%- if post.external_source %}
      &nbsp; &middot; &nbsp; {{ post.external_source }}
      {%- endif %}
    </p>
    <p class="post-tags">
      <a href="{{ post.url | relative_url }}">
        {% if post.tags.size > 0 %}
          {% for tag in post.tags %}
            <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
            {% unless forloop.last %}&nbsp;{% endunless %}
          {% endfor %}
        {% endif %}
      </a>
    </p>
  </li>

  {% endfor %}
</ul>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}

</div>
