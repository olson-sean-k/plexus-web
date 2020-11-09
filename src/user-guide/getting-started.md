To get started with Plexus, add a dependency to the `Cargo.toml` manifest.

```toml linenums="1"
[dependencies]
plexus = "=0.0.11" # Unstable. Require exact version.
```

The documentation on this website is based on work on the [`master`
branch][repository]. **Because Plexus is in its initial development phase,
published crates may differ significantly from what is documented here.**
Consider taking a dependency on a `master` revision.

```toml linenums="1"
[dependencies]

[dependencies.plexus]
git = "https://github.com/olson-sean-k/plexus.git"
rev = "..."
```

## Prelude Module

Some features are exposed largely via traits. It can sometimes be cumbersome to
import these traits, so it is recommended to import the contents of the
`prelude` module.

```rust linenums="1"
use plexus::prelude::*;
```

The `prelude` module re-exports commonly used types and traits. Collisions are
avoided by importing traits anonymously. In particular, the `prelude` module
re-exports traits used for tessellation and iterator expressions that manipulate
iterators of topological data.

```rust linenums="1"
use decorum::R64;
use nalgebra::Point3;
use plexus::index::{Flat3, HashIndexer};
use plexus::prelude::*;
use plexus::primitive::cube::Cube;
use plexus::primitive::generate::Position;

type E3 = Point3<R64>;

// These trait functions are imported from `prelude`.
let (indices, vertices) = Cube::new()
    .polygons::<Position<E3>>()
    .triangulate()
    .index_vertices::<Flat3, _>(HashIndexer::default());
```

!!! note
    Most code examples in the user guide do not include imports. See the [API
    documentation](../rustdoc/plexus/index.html) for import paths.

## Integrations

Plexus integrates with the [`theon`] crate to abstract Euclidean spaces and
provide geometric traits that support various mathematics crates in the Rust
ecosystem. Any mathematics crate can be used and, if it is supported by Theon,
Plexus provides geometric APIs.

Geometric traits are optionally implemented for types in various crates by
enabling [Cargo features][cargo-features].

| Feature                | Default | Crate           | Support  |
|------------------------|---------|-----------------|----------|
| `geometry-cgmath`      | No      | [`cgmath`]      | Complete |
| `geometry-glam`        | No      | [`glam`]        | Complete |
| `geometry-mint`        | No      | [`mint`]        | Partial  |
| `geometry-nalgebra`    | No      | [`nalgebra`]    | Complete |
| `geometry-ultraviolet` | No      | [`ultraviolet`] | Partial  |

If using one of these supported crates, it is highly recommended to enable the
corresponding feature. To configure features, specify a dependency on Plexus in
`Cargo.toml` as seen below.

```toml linenums="1"
[dependencies]
nalgebra = "^0.21.0"

[dependencies.plexus]
git = "https://github.com/olson-sean-k/plexus.git"
rev = "..."
default-features = false
features = [
    "geometry-nalgebra"
]
```

Plexus also integrates with the [`decorum`] crate for floating-point
representations that can be hashed for fast indexing. The `R64` type is a
(totally ordered) real number with an `f64` representation that cannot be `NaN`
nor infinity, for example. Geometric conversion traits are implemented for
supported types to allow for implicit conversions of scalars.

Plexus re-exports integrated crates in sub-modules of the `integration` module.
When using integrated crates, a direct dependency or an import from
`integration` can be used. Using the `integration` module avoids version
conflicts.

```rust
// Import re-exported crates. No direct dependency is required.
use plexus::integration::{decorum, nalgebra};

use decorum::R64;
use nalgebra::Point3;
use plexus::geometry::Vector;
use plexus::prelude::*;

type E3 = Point3<R64>;

#[derive(Clone, Copy, Eq, Hash, PartialEq)]
pub struct Vertex {
    pub position: E3,
    pub normal: Vector<E3>,
}
```

[cargo-features]: https://doc.rust-lang.org/cargo/reference/manifest.html#the-features-section
[repository]: https://github.com/olson-sean-k/plexus

[`cgmath`]: https://crates.io/crates/cgmath
[`decorum`]: https://crates.io/crates/decorum
[`glam`]: https://crates.io/crates/glam
[`mint`]: https://crates.io/crates/mint
[`nalgebra`]: https://crates.io/crates/nalgebra
[`theon`]: https://crates.io/crates/theon
[`ultraviolet`]: https://crates.io/crates/ultraviolet
