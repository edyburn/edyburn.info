# Keith Edyburn's personal website

The code behind [keith.edyburn.info](https://keith.edyburn.info).

Built with [Astro](https://astro.build/) and
[TypeScript](https://www.typescriptlang.org/).

## Setup

This project offers two options that attempt to provide a repeatable and
consistent development environment:

1. A [dev container](https://containers.dev/). Requires Docker (or compliant
   CLI) and a [tool supporting dev
   containers](https://containers.dev/supporting), such as [Visual Studio Code
   with the Dev Containers
   extension](https://code.visualstudio.com/docs/devcontainers/containers). This
   will create a Docker container running Debian with the packages needed for
   development. If using VS Code, it will automatically install the extensions
   specified in the config.

2. A [nix](https://nixos.org/) flake. Requires the nix package manager, and
   optionally [direnv](https://direnv.net/). If using direnv, run `direnv allow`
   to trust the directory (only necessary once). Subsequently, entering the
   directory will load the necessary packages into the current shell
   environment. If not using direnv, run `nix develop` to get a bash shell with
   the necessary packages. If using VS Code, you will need to manually install
   the extensions recommended by the workspace (possibly plus `mkhl.direnv`).

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
npm run deploy
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
| `npm run format`          | Format the `./src/` tree with prettier           |
| `npm run lint`            | Lint the `./src` tree with eslint                |

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
