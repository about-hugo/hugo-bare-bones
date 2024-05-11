# hugo-bare-bones

This is a project to try out and demo creating a hugo site and theme from scratch.


hugo server --buildDrafts


http://localhost:1313/hugo-bare-bones
http://localhost:1313/hugo-bare-bones/posts/hello



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

## History

all commands I've entered (pick and choose, don't just copy...)

    hugo new site hugo-bare-bones
    cd hugo-bare-bone
    hugo new content posts/hello.md
    echo ".hugo_build.lock" >> .gitignore
    echo "public/" >> .gitignore

    mkdir layouts/_default