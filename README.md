# akshatkalra.com

Personal site. Hugo + [no-style-please](https://github.com/hanwenguo/hugo-theme-nostyleplease) (Hugo port of [riggraz/no-style-please](https://github.com/riggraz/no-style-please)).

## Local

```sh
git submodule update --init --recursive
hugo server
```

Open http://localhost:1313

Edit homepage copy in `content/_index.md`.

## Deploy

Push to `main`. Vercel builds with Hugo `0.165.0`.

If the build uses an old Hugo, set `HUGO_VERSION=0.165.0` in the Vercel project environment variables.

## Add an experience page later

```sh
hugo new experience/forestry.md
```

Write the page, set `draft: false`, then link that job in `content/_index.md`.
