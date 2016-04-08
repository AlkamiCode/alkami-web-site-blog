## Setup Instructions:

1. `gem install jekyll`
2. `git clone git@github.com:AlkamiCode/alkami-web-site-blog.git`
3. `git checkout gh-pages`
4. `bundle install`
5. `bundle exec jekyll serve --config _config_dev.yml`

The last step fires up a server using the development config.yml

### Writing Posts

To create a new post, all you need to do is create a file in the _posts directory. How you name files in this folder is important. Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Code highlighting inside your markup file is simple:

`{% highlight ruby %}`
    `Code Goes Here!`
`{% endhighlight %}`

### Things to keep in mind

Don't make changes to any files inside of the _site folder,
everything in there is automatically generated when you make changes elsewhere.

All the .html files in the root of the directory are what you want to focus on.
Most of them have what's called front-matter at the top of the file, for example:

`---`
`layout: landing_page`
`---`

landing_page.html is in the _layouts folder,
it's just a way to include partials from other folders.

Ignore the site logo disapearing when you hover over it in development,
it only happens in development and it's not a cause for concern.

If you're adding css, don't add it to any file that has a .css extention!
These are generated files that come from the .scss files.
If you want to add css please do so at the bottom of _alkami-site.scss

The code for the hovering arrow is in `js/logo-hover.js`
It's basically a loop.
If you want to stop it in developement just comment out line:18 `runIt();`
Don't forget to un-comment before pushing back up to production.
