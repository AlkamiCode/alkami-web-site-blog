---
layout: post
title:  "The Universe Of Static Site Generators"
date:   2016-03-22 18:20:55 -0600
categories: Technical
---

# What's a dynamic site?

A dynamic site runs a server side scripting language(PHP, Rails, Pearl) to dynamically create the page being requested by each user. The pages on your Wordpress-powered blog are built on the fly! Database queries are run to get the different pieces, such as the title, content, or links. These are then returned and processed by PHP for EACH request. Every time a user visits one of your pages fresh HTML, styled by CSS and made fancy-shmancy by JavaScript, is built and served to the user.

In any app, or any part of life, there's always a problem/limitation. What's the problem with this? The problem is if you have one particular page getting requested again and again, and nothing is changing on the page itself, all that dynamic creation of that page over and over... can lead to resource usage problems on the server. Let's say for instance this page you're currently viewing is getting requested 1,000 times an hour because I dropped some gossip about Justin Bieber. Each time this page is requested the server has to run a script. It’s basically a waste of computing power!

# What's a static site?

A static website is a site in which the information stays the same over a relatively long period of time. With a static website, you simply have the raw HTML that creates your page in a file on the server. A user's web-browser will just directly request that specific file, and all the server has to due is hand it off as is without running a script. A static website consists of a series of HTML files (that require CSS and JS files), each one representing a physical page of a website. So on static site, each page is a separate HTML file. When you visit the homepage, you are viewing the actual homepage file. Even if two pages contain a chunk of identical content, e.g. a nav-bar, they both contain the same code for the nav-bar. So, if you want to update the nav-bar, you must do so in multiple files. This is fairly straightforward and it’s how all websites were built during the early hay days of web. The days when being an HTML developer meant 6-figure salaries and high potential for start-up immortality. These days no-one will even hire you as a junior developer without a fundamental understanding of multiple languages and frame-works. With my current web-dev skills, I could have probably freelance consulted for Fortune-500 companies in the early 90's.... sigh, Anywayz.

# How are they different?

Static site generators like Jekyll read some local configuration files, and build all of the HTML, CSS, and JavaScript on your local machine before deploying everything to your remote server. This actually makes your server administration much easier, safer, and faster.

Browsers read HTML, CSS, and JavaScript natively. Every other language is used to generate these three types of files. Static sites are created from hard-coded static files that do not rely on any server processes (unlike PHP, Ruby, Python or any other server-side language). Jekyll, a very popular static site generator, relies on the editor's local environment to generate the static files that will eventually be deployed.

Wait… What?
Say, for example, you have five blog posts in your Wordpress blog. When you visit http://yoursite.com, excerpts from these five posts show up on your home page. You click on a link to take you to the full post page. Each of these pages is served to your browser as HTML, styled by CSS; you may or may not have JavaScript that helps define some interactive behaviors. But every time you/user visit each page a PHP script in being run on the server.

# What are my options for a static site?
*Too many to list but here are some of the ones I find interested.*

{% include image.html
  img="blog-post-images/jekyll.jpg"
  alt="jekyll"
  title="jekyll"
  caption=""
%}

Jekyll is a parsing engine bundled as a ruby gem used to build static websites from dynamic components such as templates, partials, liquid code, markdown, etc. Jekyll is known as "a simple, blog aware, static site generator”. We love Jekyll so much we integrated it into our site, this blog is powered by Jekyll.

{% include image.html
  img="blog-post-images/octopress.png"
  alt="octopress"
  title="octopress"
  caption=""
%}

Octopress is a static blogging framework built on top of Jekyll. It uses scripts to build static files to be deployed to a server.

{% include image.html
  img="blog-post-images/hugo.png"
  alt="hugo"
  title="hugo"
  caption=""
%}

If you’re looking for sheer performance, Hugo should be at the top of your list. It has plenty of features, but its biggest draw is that it’s built with Go — a language famous for its speed. If I were starting a blog with a frequent publishing schedule and the expectation of thousands of pages, I’d choose Hugo.

{% include image.html
  img="blog-post-images/9-hexo.jpg"
  alt="hexo"
  title="hexo"
  caption=""
%}

Hexo is a fast, simple and powerful blog framework powered by Node.js, that supports multi-thread generating, so hundreds of files take just seconds to generate. Your posts are parsed with Markdown which then generates static files, with installation taking just a few minutes.

{% include image.html
  img="blog-post-images/pelican.png"
  alt="pelican"
  title="pelican"
  caption=""
%}

I’m a Ruby on Rails developer, so tools like Jekyll and Middleman are super attractive to me. If, however, you’re a Python kind of guy, then check out Pelican — the most popular static blog generator built with Python.

Fairly new open source tool that seemlesly integrates with GitHub pages. All you need is a GitHub account and unlike all the other blogs I mentioned, you have access to an online admin panel, where you can write your blog posts. Pretty awesome feature if you ask me.
