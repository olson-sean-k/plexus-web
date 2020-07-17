Plexus uses [`theon`](https://crates.io/crates/theon) to abstract [Euclidean
spaces](https://en.wikipedia.org/wiki/euclidean_space) and support various types
in the Rust ecosystem. `theon` provides traits used to support spatial queries
and operations in [iterator expressions](../generators) and [graphs](../graphs).

While geometric traits are not required, it is recommended to implement them for
types used to represent geometry. For example, computing the normals of faces in
a graph or subdividing polygons in an iterator expression can be done easily if
these traits are implemented.

!!! note ""
    Enabling [geometry Cargo features](../getting-started/#cargo-features)
    provides implementations of these traits for types from commonly used crates
    like [`nalgebra`](https://crates.io/crates/nalgebra). It is highly
    recommended to enable these features.

## Conversions

Plexus provides conversions for geometric types to enable more ergonomic and
flexible APIs. The `FromGeometry` and `IntoGeometry` traits are analogous to the
standard `From` and `Into` traits and perform a similar function, but are used
exclusively for geometric types.

Conversions are optionally implemented via [geometry Cargo
features](../getting-started/#cargo-features) and include support for proxy
types from the [`decorum`](https://crates.io/crates/decorum) crate.

The `AsPosition` trait is re-exported from `theon` and allows vertex data to
expose positional data. When this positional data implements geometric traits,
spatial operations become available. For example, this allows graphs to support
splitting composite edges at midpoints, extruding faces, and flattening faces to
a best-fit plane.
