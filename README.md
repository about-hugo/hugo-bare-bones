# hugo-bare-bones

This is a project to try out and demo creating a hugo site and theme from scratch.
It's main purpose is to understand how hugo works, as most themes are quite big 
and thus require some time to find and understand everything. This very small 
site should make it easier to understand hugo and have a playground for own experiments.

## Usage
run 

    hugo server --buildDrafts

and open the url given ("Web Server is available at...") in your browser.
Depending on the available port and baseURL set in [hugo.toml](hugo.toml) it's:

http://localhost:1313/

or 

http://localhost:1313/hugo-bare-bones

# How to create a minimal running site with hugo

This documents the additions necessary to create a very small hugo site containing
only the essentials. You can look at the individual commits, the git diffs and this
log of the changes I made:

## files created for a minimal site

git diff new_hugo_site --name-only

    .gitignore
    README.md
    content/posts/_index.md
    content/posts/hello.md
    layouts/_default/baseof.html
    layouts/_default/list.html
    layouts/_default/single.html
    layouts/index.html


hugo.toml was edited, it could have been kept as it was.

## output of hugo new site
```sh
code/hugo/about-hugo>hugo new site hugo-bare-bones
Congratulations! Your new Hugo site was created in /Users/kleinen/mine/current/code/hugo/about-hugo/hugo-bare-bones.

Just a few more steps...

1. Change the current directory to /Users/kleinen/mine/current/code/hugo/about-hugo/hugo-bare-bones.
2. Create or install a theme:
   - Create a new theme with the command "hugo new theme <THEMENAME>"
   - Install a theme from https://themes.gohugo.io/
3. Edit hugo.toml, setting the "theme" property to the theme name.
4. Create new content with the command "hugo new content <SECTIONNAME>/<FILENAME>.<FORMAT>".
5. Start the embedded web server with the command "hugo server --buildDrafts".

See documentation at https://gohugo.io/.
```

## add github action

    mkdir -p .github/workflows
    cp ../hugo-geekdoc-tryout/.github/workflows/gh-pages.yml .github/workflows
    code .github/workflows/gh-pages.yml

edit this line in [.github/workflows/gh-pages.yml](.github/workflows/gh-pages.yml)
to set the correct baseURL for the site: 

    hugo -b https://about-hugo.github.io/hugo-bare-bones

## History

all commands I've entered (pick and choose, don't just copy...)

    hugo new site hugo-bare-bones
    cd hugo-bare-bone
    hugo new content posts/hello.md
    hugo new content posts/_index.md
    echo ".hugo_build.lock" >> .gitignore
    echo "public/" >> .gitignore
    mkdir layouts/_default
    code layouts/_default/baseof.html
    code layouts/_default/list.html
    code layouts/_default/single.html


