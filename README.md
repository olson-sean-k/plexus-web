**Plexus** is [a Rust library for polygonal mesh
processing](https://github.com/olson-sean-k/plexus). This repository contains
the source for the [documentation website](https://plexus.rs).

The following tools are needed to build and publish the website (not including
common Posix and Linux tools):

- [Rust](https://www.rust-lang.org/tools/install)
- [Peru](https://github.com/buildinspace/peru#installation)
- [MkDocs](https://www.mkdocs.org/#installation) (and Python)
- Make
- Git

The `Makefile` has two main rules: `build` and `publish`, which do exactly what
their names suggest. The `build` rule is the default rule and is executed by
`make` if no rule is specified. Build artifacts are written to the `./out`
directory. When publishing, these artifacts are copied into a temporary
directory via `mktemp`.

The `gh-pages` branch is used only for hosting the website and does not keep
history (because it contains build artifacts). Publishing forces a push to the
push specification of the `origin/gh-pages` branch from a temporary repository
with only a single commit.

Peru is used to fetch the Plexus source code. This code is used to generate API
documentation via `rustdoc`. See `peru.yaml`.

It is possible to test changes via `mkdocs serve`, but this will not serve the
`rustdoc` API documentation (even after executing `make build`).
