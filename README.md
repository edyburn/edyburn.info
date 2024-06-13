# Keith Edyburn's personal website

The code behind [keith.edyburn.info](https://keith.edyburn.info).

Built with [Astro](https://astro.build/) and
[TypeScript](https://www.typescriptlang.org/).

## Setup

This project uses a [dev container](https://containers.dev/) to provide a
consistent development environment. Using the dev container with [VS
Code](https://code.visualstudio.com/docs/devcontainers/containers) is
recommended since it will automatically install the necessary extensions and
configure some settings.

## Deploying

1. Run the build:

```bash
npm run build
```

2. Review the built files:

```bash
npm run preview
```

3. Upload the files (assumes an appropriate `.env` file exists):

```bash
source .env && rsync -r dist/ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Why Astro?

The earlier version of this site used
[Frozen-Flask](https://frozen-flask.readthedocs.io/en/latest/) to generate
static pages from [Jinja2](https://palletsprojects.com/p/jinja/) HTML templates,
but there were a few things I wanted to change:

- Use markdown for most content to simplify editing
- Use component composition instead of using template includes/extends and macros
- Utilize typechecking, linting, and automatic formatting
- Have the option to introduce client-side UI frameworks, if necessary
- Experiment with something new after using Flask for more than a decade

Astro checked all of those boxes.

After using Astro for this site, I have a few thoughts about it:

- Hot module replacement from Vite is great for productivity
- The docs are comprehensive and address many common issues
- Content collections seem helpful for ensuring consistency
- Due to using JSX/React for so long, Astro's syntax had a few surprises:
  - Whitespace at tag boundaries can sometimes show up in the HTML
  - The separation of the script and template parts of components

## Links

- [Astro docs](https://docs.astro.build)
- [Bootstrap icon set](https://icon-sets.iconify.design/bi/?attribution=false)
  (seemed relatively comprehensive and doesn't require attribution)
