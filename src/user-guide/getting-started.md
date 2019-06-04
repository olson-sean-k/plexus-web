To get started with Plexus, add a dependency to `Cargo.toml`.

```toml
[dependencies]
plexus = "0.0.11" # Unstable. Require exact version.
```

!!! warning
    Plexus is still in its initial development phase. At this time, it is best
    to take strict dependencies on a specific version. Using carets, tildes, or
    Kleene stars in dependency requirements will likely cause spurious build
    failures between releases.

Plexus interacts with other crates in the Rust ecosystem. Most importantly, it
uses [`theon`](https://crates.io/crates/theon) to abstract Euclidean geometry
atop various mathematics crates. It also uses
[`decorum`](https://crates.io/crates/decorum) for floating-point values that
support `Hash` and numeric traits.
[`nalgebra`](https://crates.io/crates/nalgebra) is highly recommended for
geometric types, but other crates like
[`cgmath`](https://crates.io/crates/cgmath) and
[`mint`](https://crates.io/crates/mint) are also supported. Consider also taking
dependencies on these crates.

```toml
[dependencies]
decorum = "^0.1.1"
nalgebra = "^0.17.0"
plexus = "0.0.11" # Unstable. Require exact version.
theon = "0.0.1" # Unstable. Require exact version.
```

## Cargo Features

Plexus exposes two kinds of [Cargo
features](https://doc.rust-lang.org/cargo/reference/manifest.html#the-features-section):
_geometry features_ and _encoding features_.

Geometry features integrate with mathematics crates and optionally implement
[geometric traits](../geometry) from `theon` for types in those crates. It is
highly recommended to enable the corresponding geometry feature if a supported
crate is used for geometric types.

| Feature             | Default | Crate      | Support  |
|---------------------|---------|------------|----------|
| `geometry-cgmath`   | No      | `cgmath`   | Complete |
| `geometry-mint`     | No      | `mint`     | Partial  |
| `geometry-nalgebra` | Yes     | `nalgebra` | Complete |

Encoding features expose sub-modules in the `encoding` module for mesh formats
that can be used to serialize and deserialize mesh data. For example, the
`encoding-ply` feature enables the `encoding::ply` module with support for the
[PLY](https://en.wikipedia.org/wiki/ply_(file_format)) format.

| Feature        | Default | Encoding | Read | Write |
|----------------|---------|----------|------|-------|
| `encoding-ply` | No      | PLY      | Yes  | No    |

To configure features, specify a dependency on Plexus in `Cargo.toml` as seen
below.

```toml
[dependencies.plexus]
features = [
    "encoding-ply"
    "geometry-nalgebra",
]
version = "0.0.11" # Unstable. Require exact version.
```

## Prelude Module

Plexus exposes much of its functionality via traits with blanket
implementations. It can sometimes be cumbersome to import these traits, so it is
recommended to import the contents of the `prelude` module whenever Plexus is
used.

```rust
use plexus::prelude::*;
```

The `prelude` module re-exports many commonly used traits. In particular, it
re-exports traits used by iterator expressions that process streams of
topological structures.

```rust hl_lines="4"
use decorum::N64;
use nalgebra::Point3;
use plexus::index::{Flat3, HashIndexer};
use plexus::prelude::*;
use plexus::primitive::cube::Cube;

// These functions are all imported from `prelude` via traits.
let (indices, vertices) = Cube::new()
    .polygons_with_position::<Point3<N64>>()
    .triangulate()
    .index_vertices::<Flat3, _>(HashIndexer::default());
```

!!! note
    Most code examples in the user guide do not include imports.
