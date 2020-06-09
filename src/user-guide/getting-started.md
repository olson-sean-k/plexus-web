To get started with Plexus, add a dependency to the `Cargo.toml` manifest.

```toml
[dependencies]
plexus = "0.0.11" # Unstable. Require exact version.
```

The documentation on this website is based on work on the [`master`
branch](https://github.com/olson-sean-k/plexus). Because Plexus is in its
initial development phase, published crates may differ significantly from what
is documented here. Consider taking a dependency on a `master` revision.

```toml
[dependencies]

[dependencies.plexus]
git = "https://github.com/olson-sean-k/plexus.git"
rev = "63c1a2e"
```

Plexus interacts with other crates in the Rust ecosystem. Most importantly, it
uses [`theon`](https://crates.io/crates/theon) to abstract Euclidean geometry
atop various mathematics crates. [`nalgebra`](https://crates.io/crates/nalgebra)
is highly recommended for geometric types, but other crates like
[`cgmath`](https://crates.io/crates/cgmath) and
[`mint`](https://crates.io/crates/mint) are also supported via [Cargo
features](cargo-features).

The [`decorum`](https://crates.io/crates/decorum) crate is also supported by
Plexus and is useful for floating-point values that support `Hash` and various
numeric traits and constraints. Consider also taking dependencies on these
crates as needed.

```toml
[dependencies]
decorum = "^0.1.1"
nalgebra = "^0.18.0"
theon = "0.0.1" # Unstable. Require exact version.
```

## Cargo Features

Plexus exposes [Cargo
features](https://doc.rust-lang.org/cargo/reference/manifest.html#the-features-section)
to enable additional functionality and integrations. To configure features,
specify a dependency on Plexus in `Cargo.toml` as seen below.

```toml
[dependencies]
nalgebra = "^0.18.0"

[dependencies.plexus]
git = "https://github.com/olson-sean-k/plexus.git"
rev = "63c1a2e"
default-features = false
features = [
    "encoding-ply",
    "geometry-nalgebra"
]
```

### Geometry

Geometry features integrate with mathematics crates and optionally implement
[geometric traits](../geometry) from `theon` for types in those crates. It is
highly recommended to enable the corresponding geometry feature if a supported
crate is used for geometric types.

| Feature             | Default | Crate      | Support  |
|---------------------|---------|------------|----------|
| `geometry-cgmath`   | No      | `cgmath`   | Complete |
| `geometry-mint`     | No      | `mint`     | Partial  |
| `geometry-nalgebra` | No      | `nalgebra` | Complete |

### Encoding

Encoding features expose sub-modules in the `encoding` module for mesh formats
that can be used to serialize and deserialize polygonal mesh data. For example,
the `encoding-ply` feature enables the `encoding::ply` module with support for
the [PLY](https://en.wikipedia.org/wiki/ply_(file_format)) format.

| Feature        | Default | Encoding | Read | Write |
|----------------|---------|----------|------|-------|
| `encoding-ply` | No      | PLY      | Yes  | No    |

## Prelude Module

Plexus exposes functionality via traits with blanket implementations. It can
sometimes be cumbersome to import these traits, so it is recommended to import
the contents of the `prelude` module.

```rust
use plexus::prelude::*;
```

The `prelude` module re-exports commonly used traits. In particular, it
re-exports traits used by iterator expressions that process streams of
topological and geometric data.

```rust hl_lines="4"
use decorum::N64;
use nalgebra::Point3;
use plexus::index::{Flat3, HashIndexer};
use plexus::prelude::*;
use plexus::primitive::cube::Cube;
use plexus::primitive::generate::Position;

// These functions are all imported from `prelude` via traits.
let (indices, vertices) = Cube::new()
    .polygons::<Position<Point3<N64>>>()
    .triangulate()
    .index_vertices::<Flat3, _>(HashIndexer::default());
```

!!! note
    Most code examples in the user guide do not include imports. See the [API
    documentation](../rustdoc/plexus/index.html) for import paths.
