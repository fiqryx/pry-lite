# Contributing

Thanks for your interest in contributing to here. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.


## Structure

This repository is structured as follows:


```
...
├── public
└── src
	├── components
	├── config
	└── app
		├── favicon.ico
		├── layout.tsx
		├── not-found.tsx
		├── (app)
		└── (auth)
```

| Path                  | Description                              |
| --------------------- | ---------------------------------------- |
| `src/app`             | The Next.js application for the website. |
| `src/components`      | The React components for the website.    |
| `src/config`          | The Application config for the website.  |

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new features

- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)

- `refactor`: any code related change that is not a fix nor a 

- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)

- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies

  e.g. `feat(components): add new prop to the sidebar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
