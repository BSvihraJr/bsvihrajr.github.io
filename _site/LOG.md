Installed Ruby
    https://jekyllrb.com/docs/installation/windows/
    Ruby+DevKit
        ridk install
        3
    Bundler already installed
    gem update
Installed Jekyll via Bundler
    https://jekyllrb.com/tutorials/using-jekyll-with-bundler/
    bundle init
    bundle add jekyll
    bundle exec jekyll new --force --skip-bundle .
    bundle install
    bundle exec jekyll serve (anything you want to use jekyll, prefix with bundle exec)
Configure .gitignore
    # Ignore metadata generated by Jekyll
    _site/
    .sass-cache/
    .jekyll-cache/
    .jekyll-metadata

    # Ignore folders generated by Bundler
    .bundle/
    vendor/

Gemfile
    https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
    Comment
        gem "jekyll", "~> 4.3.2"
    Change gem github-pages to gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
    bundle install


https://pages.github.com/versions/


Remote theme
https://github.com/mmistakes/minimal-mistakes/blob/master/README.md#remote-theme-method
- gemfile add: gem "jekyll-include-cache", group: :jekyll_plugins
- Add jekyll-include-cache to the plugins array of your _config.yml.
- Fetch and update bundled gems by running the following Bundler command: bundle install
- Add remote_theme: "mmistakes/minimal-mistakes@4.24.0" to your _config.yml file. Remove any other theme: or remote_theme: entry.

bundle exec jekyll serve
http://127.0.0.1:4000